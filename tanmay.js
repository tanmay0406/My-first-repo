const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;


mongoose.connect('mongodb+srv://ajinkyagajarmal:Ajinkyag16@cluster0.2koedho.mongodb.net/Doctors',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
const Schema = mongoose.Schema;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});


const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    qualification: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: false, unique: true },
    password: { type: String, required: false },
    photo: { type: String, required: false }
})


const Model = mongoose.model('TanmayDoctor',doctorSchema);

app.use(bodyparser.json());
app.use(cors());


app.get('/doctors', async (req, res) => {
    try {
        const doctors = await Model.find();
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



app.post('/add-doctor', async(req,res)=>{
    try{
        const newDoctor = new Model(req.body);
        await newDoctor.save();
        res.status(201).json(newDoctor);
    } catch (error){
        res.status(400).json({message: error.message});
    }
});

app.post('/doc-login', async(req,res)=> {
    const {email, password} = req.body;
    try{
        const doctor = await Model.findOne({email});
        if(!doctor){
            return res.status(404).json({message:"Doctor not found"});
        }

        // Comparing passwords directly (not recommended in production)
        if(password !== doctor.password){
            return res.status(401).json({message:"Invalid Credentials"});
        }

        res.status(200).json({message: "Login successful"});
    } catch(error){
        res.status(500).json({message:error.message});
    }
});

app.put('/update-doctor/:id', async(req,res)=>{
    const {id} = req.params;
    const updateFields = req.body;
    try{
        // Filter out any properties that are undefined or null
        const filteredUpdateFields = Object.fromEntries(Object.entries(updateFields).filter(([_, v]) => v != null));
        const updatedDoctor = await Model.findByIdAndUpdate(id, filteredUpdateFields, { new: true });
        if(!updatedDoctor){
            return res.status(404).json({message: "Doctor not found"});
        }
        res.status(200).json(updatedDoctor);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});



app.delete('/delete-doctor/:id', async(req,res) => {
    const {id} = req.params;
    try{
        const deletedDoctor = await Model.findByIdAndDelete(id);
        if(!deletedDoctor){
            return res.status(404).json({message:"Doctor not found"});
        }
        res.status(200).json({message:"Doctor Deleted Successfully"});
    } catch(error){
        res.status(400).json({message: error.message});
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

