// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const PORT = process.env.PORT || 5000;
const nodemailer = require('nodemailer');

// Import User and Vehicle models
const User = require('./models/user');
const Vehicle = require('./models/vehicle');

// Body parser middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tanmayrp97@gmail.com', // Your Gmail email address
        pass: '.' // Your Gmail password
    }
});













// Registration endpoint
app.post('/api/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            return res.status(400).json({ message: 'Invalid email address' });
        }

        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user with hashed password
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Registration Error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});














// Vehicle registration endpoint
app.post('/api/vehicle/register', async (req, res) => {
    try {
        // Create a new vehicle with details from request body
        const newVehicle = new Vehicle(req.body);
        // Save the new vehicle to the database
        await newVehicle.save();
        res.status(201).json({ message: 'Vehicle registered successfully' });
    } catch (error) {
        console.error('Vehicle Registration Error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});












// Login endpoint
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email in the database
        const user = await User.findOne({ email });

        // If user not found, return error
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the provided password with the hashed password in the database
        const passwordMatch = await bcrypt.compare(password, user.password);

        // If passwords don't match, return error
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // If passwords match, login successful
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});








// Forget password endpoint

app.post('/api/forgot-password', async (req, res) => {
    try {
        const { email } = req.body;

        // Find the user by email in the database
        const user = await User.findOne({ email });

        // If user not found, return error
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Generate reset token
        const resetToken = generateResetToken();

        // Update user's reset token in the database
        await User.updateOne({ email }, { $set: { resetToken } });

        // Send reset password email
        await sendResetPasswordEmail(email, resetToken);

        res.status(200).json({ message: 'Reset password email sent' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Generate reset token
function generateResetToken() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// Function to send reset password email
async function sendResetPasswordEmail(email, resetToken) {
    try {
        // Email options
        const mailOptions = {
            from: 'tanmayrp97@gmail.com', // Your Gmail email address
            to: email,
            subject: 'Reset Your Password',
            html: `<p>Hello,</p><p>You have requested to reset your password. Please click the following link to reset your password:</p><p><a href="http://localhost:3000/reset-password?token=${resetToken}">Reset Password</a></p><p>If you did not request this, please ignore this email.</p>`
        };

        // Send email
        await transporter.sendMail(mailOptions);
        console.log('Reset password email sent to', email);
    } catch (error) {
        console.error('Error sending reset password email:', error);
    }
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
