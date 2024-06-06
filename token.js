const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const moment = require('moment');
const app = express();

app.use(express.json());
app.use(cors());

let nextTokenNumber = 1;
let currentTokenNumber = 1;

mongoose.connect('mongodb+srv://ajinkyagajarmal:Ajinkyag16@cluster0.2koedho.mongodb.net/Doctors', { useNewUrlParser: true, useUnifiedTopology: true });

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    token: { type: String, required: true },
    bookDate: { type: String, required: true },
    status: { 
        type: String, 
        enum: ['current', 'previous', 'cancelled'], 
        default: 'current' 
    }
}, { timestamps: true });

const Booking = mongoose.model('Appointment', bookingSchema);

function resetTokenOnDateChange() {
    const checkTime = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const currentTime = `${hours}:${minutes}:${seconds}`;
        if (currentTime === '06:00:00') {
            nextTokenNumber = 1;
            console.log('Token number reset to 1. Time is 6 AM.');
        }
    };
    setInterval(checkTime, 60000);
}
resetTokenOnDateChange();




app.post('/book-and-generate-token', async (req, res) => {
    try {
        const now = new Date();
        const hours = now.getHours();

        if (hours < 9 || hours > 18) {
            return res.status(400).json({ message: 'Token generation is open from 9 AM to 6 PM only.' });
        }

        const { name, phone, date } = req.body;
        const parsedDate = moment(date, 'DD-MM-YYYY').toDate();

        if (nextTokenNumber <= 200) {
            const token = nextTokenNumber;

            const booking = new Booking({ name, phone, bookDate: parsedDate, token: token });
            await booking.save();

            nextTokenNumber++;
            res.status(200).json({ booking, token });
        } else {
            nextTokenNumber = 1;
            res.status(200).json({ message: 'Token limit reached. Token number reset to 1.' });
        }
    } catch (error) {
        console.error('Error booking appointment and generating token:', error);
        res.status(500).json({ message: 'Internal server error. Failed to book appointment and generate token.' });
    }
});


app.get('/bookings', async (req, res) => {
    try {
      const bookings = await Booking.find();
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ message: 'Server Error', error });
    }
  });

  app.get('/bookings/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const booking = await Booking.findById(id);
      if (!booking) {
        return res.status(404).json({ message: 'Booking not found' });
      }
      res.json(booking);
    } catch (error) {
      res.status(500).json({ message: 'Server Error', error });
    }
  });



app.put('/update-token-number', async (req, res) => {
    try {
        const now = new Date();
        const hours = now.getHours();

        if (hours < 9 || hours > 18) {
            return res.status(400).json({ message: 'Sorry for your inconvenience...' });
        }

        if (currentTokenNumber < 10) {
            currentTokenNumber++;
            res.json({ message: 'Next Token Number: ', NextTokenNumber: currentTokenNumber });
        } else {
            currentTokenNumber = 1;
            res.status(200).json({ message: 'Token Limit Reached ' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
});

app.get('/live-token-number', (req, res) => {
    const now = new Date();
    const hours = now.getHours();
    if (hours < 9 || hours > 18) {
        return res.status(400).json({ message: 'No Token is Live Now ........' });
    }

    res.json({ liveTokenNumber: currentTokenNumber });
});

app.get('/latest-token/:phone', async (req, res) => {
    try {
        const { phone } = req.params;
        const latestPatient = await Booking.findOne({ phone }).sort({ createdAt: -1 });

        if (!latestPatient) {
            return res.status(404).json({ message: 'No token found for this phone number.' });
        }

        res.status(200).json({ token: latestPatient.token });
    } catch (error) {
        console.error('Error fetching latest token:', error);
        res.status(500).json({ message: 'Internal server error. Failed to fetch latest token.' });
    }
});

app.get('/bookings', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching bookings' });
    }
});

app.put('/booking/:id', async (req, res) => {
    try {
        const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        res.status(200).json(booking);
    } catch (error) {
        res.status(400).json({ error: 'Error updating booking' });
    }
});

app.delete('/booking/:id', async (req, res) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);
        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        res.status(200).json({ message: 'Booking deleted' });
    } catch (error) {
        res.status(400).json({ error: 'Error deleting booking' });
    }
});

app.get('/generated-token/:date', async (req, res) => {
    try {
        const { date } = req.params;
        const generatedToken = await Booking.findOne({ bookDate: date }).sort({ createdAt: -1 });

        if (!generatedToken) {
            return res.status(404).json({ message: 'No token generated for the specified date.' });
        }

        res.status(200).json({ token: generatedToken.token });
    } catch (error) {
        console.error('Error fetching generated token:', error);
        res.status(500).json({ message: 'Internal server error. Failed to fetch generated token.' });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
