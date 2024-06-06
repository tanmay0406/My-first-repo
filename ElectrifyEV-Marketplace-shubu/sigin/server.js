const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const nodemailer = require('nodemailer');
const fs = require('fs');

// Import User, Vehicle, and Contact models
const User = require('./models/user');
// Import Vehicle model
const Vehicle = require('./models/vehicle'); // Import the Vehicle model

const Contact = require('./models/contactModel');

// Body parser middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Error:', err));


// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tanmayrp97@gmail.com', // Your Gmail email address
        pass: 'your_password' // Your Gmail password, it's better to use environment variables for sensitive data
    }
});

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});


const upload = multer({ 
    storage: storage,
    limits: { fileSize: 100 * 1024 * 1024 } 
}).fields([
    { name: 'frontImages', maxCount: 3 },
    { name: 'sideImages', maxCount: 3 },
    { name: 'backImages', maxCount: 3 },
    { name: 'interiorImages', maxCount: 3 }
]);

 

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

app.post('/api/vehicle/register', cors(), (req, res, next) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json({ message: 'Multer error: ' + err.message });
        } else if (err) {
            return res.status(500).json({ message: 'Unknown error: ' + err.message });
        }
        next();
    });
}, async (req, res) => {
    try {
        const {
            ownerName,
            ownerContact,
            ownerEmail,
            ownerCity,
            vehicleType,
            brand,
            model,
            variant,
            location,
            batteryPower,
            vehicleDescription
        } = req.body;

        if (!req.files || !req.files['interiorImages'] || !req.files['frontImages'] || !req.files['sideImages'] || !req.files['backImages']) {
            return res.status(400).json({ message: 'Image files are missing' });
        }

        const interiorImages = req.files['interiorImages'].map(file => file.path);
        const frontImages = req.files['frontImages'].map(file => file.path);
        const sideImages = req.files['sideImages'].map(file => file.path);
        const backImages = req.files['backImages'].map(file => file.path);

        const color = req.body.color || null;

        const rtoCode = (!['edrone', 'ecycle'].includes(vehicleType)) ? req.body.rtoCode : null;
        const kilometresDriven = (!['edrone', 'ecycle'].includes(vehicleType)) ? req.body.kilometresDriven : null;

        const registrationYear = req.body.registrationYear || null;

        const bodyType = (vehicleType === 'ecar') ? req.body.bodyType : ((vehicleType === 'etractor') ? null : req.body.bodyType);

        const transmissionType = (['ecar', 'eauto', 'ebike'].includes(vehicleType)) ? req.body.transmissionType : ((vehicleType === 'etractor') ? null : req.body.transmissionType);
        

        const price = req.body.price || null;

        if (
            !ownerName ||
            !ownerContact ||
            !ownerEmail ||
            !ownerCity ||
            !vehicleType ||
            !brand ||
            !model ||
            !variant ||
            !location ||
            !batteryPower ||
            !vehicleDescription ||
            !color ||
            !registrationYear ||
            (!['edrone', 'ecycle'].includes(vehicleType) && (!rtoCode || !kilometresDriven)) ||
            ((['ecar', 'eauto', 'ebike'].includes(vehicleType)) && !transmissionType) ||
            (vehicleType === 'ecar' && !bodyType) ||
            (vehicleType === 'etractor' && (bodyType !== null || transmissionType !== null)) ||
            !interiorImages.length ||
            !frontImages.length ||
            !sideImages.length ||
            !backImages.length ||
            !price ||
            !price.currency ||
            !price.value
        ) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        

        const priceWithoutCommas = parseFloat(price.value.replace(/,/g, ''));

        const newVehicle = new Vehicle({
            ownerName,
            ownerContact,
            ownerEmail,
            ownerCity,
            vehicleType,
            brand,
            model,
            variant,
            location,
            rtoCode,
            batteryPower,
            kilometresDriven,
            bodyType,
            color,
            registrationYear,
            vehicleDescription,
            transmissionType,
            interiorImages,
            frontImages,
            sideImages,
            backImages,
            price: {
                currency: price.currency,
                value: priceWithoutCommas
            }
        });

        await newVehicle.save();
        res.status(201).json({ message: 'Vehicle registered successfully' });
    } catch (error) {
        console.error('Vehicle Registration Error:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});




app.get('/api/vehicles/ecar', async (req, res) => {
    try {
        // Extract filter parameters from request query
        const { brand, location, transmissionType, color, kilometresDriven, price, filterBodyType } = req.query;

        // Construct query based on filter parameters
        let query = { vehicleType: 'ecar' };
        if (brand) query.brand = brand;
        if (location) query.location = location;
        if (transmissionType) query.transmissionType = transmissionType;
        if (color) query.color = color;
        if (kilometresDriven) query.kilometresDriven = { $lte: parseInt(kilometresDriven) };
        if (price) {
            // Split price range from the query string
            const [minPrice, maxPrice] = price.split('-').map(p => parseInt(p.replace(/\D/g, ''))); // Remove non-numeric characters
            if (!isNaN(minPrice) || !isNaN(maxPrice)) {
                query['price.value'] = {}; // Initialize price.value object if it doesn't exist
                if (!isNaN(minPrice)) query['price.value'].$gte = minPrice;
                if (!isNaN(maxPrice)) query['price.value'].$lte = maxPrice;
            }
        }
        if (filterBodyType) query.bodyType = filterBodyType;

        // Query database with filters
        const ecars = await Vehicle.find(query);

        // Convert images to Base64 strings
        const ecarsWithBase64 = ecars.map((ecar) => {
            const frontImagesBase64 = ecar.frontImages.map((imagePath) => {
                const image = fs.readFileSync(imagePath);
                return Buffer.from(image).toString('base64');
            });

            // Repeat the process for other image fields (sideImages, backImages, etc.)

            return { ...ecar._doc, frontImagesBase64 /*, otherImageFields */ };
        });

        // Return filtered results with Base64 encoded images
        res.json(ecarsWithBase64);
    } catch (error) {
        console.error('Error fetching filtered eCar vehicles:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



// Endpoint to fetch ebike details
app.get('/api/vehicles/ebike', async (req, res) => {
    try {
        // Find all ebike vehicles in the database
        const ebikes = await Vehicle.find({ vehicleType: 'ebike' });

        // If no ebikes found, return error
        if (!ebikes || ebikes.length === 0) {
            return res.status(404).json({ message: 'No ebike vehicles found' });
        }

        // Convert images to Base64 strings
        const ebikesWithBase64 = ebikes.map((ebike) => {
            const frontImagesBase64 = ebike.frontImages.map((imagePath) => {
                const image = fs.readFileSync(imagePath);
                return Buffer.from(image).toString('base64');
            });

            // Repeat the process for other image fields (sideImages, backImages, etc.)

            return { ...ebike._doc, frontImagesBase64 /*, otherImageFields */ };
        });

        // If ebikes found, return the details with Base64 images
        res.status(200).json(ebikesWithBase64);
    } catch (error) {
        console.error('Error fetching ebikes:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});


// Endpoint to fetch ecycle details
app.get('/api/vehicles/ecycle', async (req, res) => {
    try {
        // Find all ecycle vehicles in the database
        const ecycles = await Vehicle.find({ vehicleType: 'ecycle' });

        // If no ecycles found, return error
        if (!ecycles || ecycles.length === 0) {
            return res.status(404).json({ message: 'No ecycle vehicles found' });
        }
        // Convert images to Base64 strings
        const ecyclesWithBase64 = ecycles.map((ecycle) => {
            const frontImagesBase64 = ecycle.frontImages.map((imagePath) => {
                const image = fs.readFileSync(imagePath);
                return Buffer.from(image).toString('base64');
            });

            // Repeat the process for other image fields (sideImages, backImages, etc.)

            return { ...ecycle._doc, frontImagesBase64 /*, otherImageFields */ };
        });

        // If ecycles found, return the details
        res.status(200).json(ecyclesWithBase64);
    } catch (error) {
        console.error('Error fetching ecycles:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});


// Endpoint to fetch edrone details
app.get('/api/vehicles/edrone', async (req, res) => {
    try {
        // Find all edrone vehicles in the database
        const edrones = await Vehicle.find({ vehicleType: 'edrone' });

        // If no edrones found, return error
        if (!edrones || edrones.length === 0) {
            return res.status(404).json({ message: 'No edrone vehicles found' });
        }

        // Convert images to Base64 strings
        const edronesWithBase64 = edrones.map((edrone) => {
            const frontImagesBase64 = edrone.frontImages.map((imagePath) => {
                const image = fs.readFileSync(imagePath);
                return Buffer.from(image).toString('base64');
            });

            // Repeat the process for other image fields (sideImages, backImages, etc.)

            return { ...edrone._doc, frontImagesBase64 /*, otherImageFields */ };
        });

        // If edrones found, return the details
        res.status(200).json(edronesWithBase64);
    } catch (error) {
        console.error('Error fetching edrones:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Endpoint to fetch etractor details
app.get('/api/vehicles/etractor', async (req, res) => {
    try {
        // Find all etractor vehicles in the database
        const etractors = await Vehicle.find({ vehicleType: 'etractor' });

        // If no etractors found, return error
        if (!etractors || etractors.length === 0) {
            return res.status(404).json({ message: 'No etractor vehicles found' });
        }

        // Convert images to Base64 strings
        const etractorsWithBase64 = etractors.map((tractor) => {
            const frontImagesBase64 = tractor.frontImages.map((imagePath) => {
                const image = fs.readFileSync(imagePath);
                return Buffer.from(image).toString('base64');
            });

            // Repeat the process for other image fields (sideImages, backImages, etc.)

            return { ...tractor._doc, frontImagesBase64 /*, otherImageFields */ };
        });

        // If etractors found, return the details
        res.status(200).json(etractorsWithBase64);
    } catch (error) {
        console.error('Error fetching etractors:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});
// Endpoint to fetch eauto details
app.get('/api/vehicles/eauto', async (req, res) => {
    try {
        // Find all eauto vehicles in the database
        const eautos = await Vehicle.find({ vehicleType: 'eauto' });

        // If no eautos found, return error
        if (!eautos || eautos.length === 0) {
            return res.status(404).json({ message: 'No eauto vehicles found' });
        }

        // Convert images to Base64 strings
        const eautosWithBase64 = eautos.map((eauto) => {
            const frontImagesBase64 = eauto.frontImages.map((imagePath) => {
                const image = fs.readFileSync(imagePath);
                return Buffer.from(image).toString('base64');
            });

            // Repeat the process for other image fields (sideImages, backImages, etc.)

            return { ...eauto._doc, frontImagesBase64 /*, otherImageFields */ };
        });

        // Send the response with eauto details including Base64 images
        res.status(200).json(eautosWithBase64);
    } catch (error) {
        console.error('Error fetching eauto vehicles:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});



// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
    try {
        // Extract data from the request body
        const { name, email, subject, comments } = req.body;

        // Create a new Contact document
        const newContact = new Contact({
            name,
            email,
            subject,
            comments
        });

        // Save the new Contact document to the database
        await newContact.save();

        // Send a success response to the client
        res.status(200).json({ message: 'Message received successfully!' });
    } catch (error) {
        console.error('Error processing contact form:', error);
        // Send an error response to the client
        res.status(500).json({ message: 'Server Error' });
    }
});


// Endpoint to fetch vehicle details by ID
app.get('/api/vehicle/:id', async (req, res) => {
    try {
        const vehicleId = req.params.id;

        // Find the vehicle by ID in the database
        const vehicle = await Vehicle.findById(vehicleId);

        // If vehicle not found, return error
        if (!vehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }

        // If vehicle found, return the details
        res.status(200).json(vehicle);
    } catch (error) {
        console.error('Error fetching vehicle details:', error);
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
