const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

// const JWT_SECRET = 'ADMIN@123';


const PORT = 5000;

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://ajinkyagajarmal:Ajinkyag16@cluster0.2koedho.mongodb.net/Doctors',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const doctorSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    qualification: { type: String, required: true },
    number: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: false, unique: true },
    password: { type: String, required: false },
    photo: { type: String, required: false }
});


doctorSchema.pre('save', async function(next){
    const doctor = this;
    if(!doctor.isModified('password')) return next();

    try{
        const hashedPassword = await bcrypt.hash(doctor.password, 10);
        doctor.password = hashedPassword;
        next();
    } catch(error){
        return next(error);
    }
});

const Model = mongoose.model('Doctor', doctorSchema);

app.use(bodyParser.json());
app.use(cors());

app.post('/add-doctor', async (req, res) => {
    try {
        const { id, name, qualification, number, role, age, email, password, photo } = req.body;

        if (!id || !name || !qualification || !number || !role || !age) {
            return res.status(400).json({ message: 'All required fields must be provided' });
        }

        const newDoctor = new Model({ id, name, qualification, number, role, age, email, password, photo });
        await newDoctor.save();
        res.status(201).json(newDoctor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.post('/doc-login', async(req,res)=> {
    const {email, password} = req.body;
    try{
        const doctor = await Model.findOne({email});
        if(!doctor){
            return res.status(404).json({message:"Doctor not found"});
        }

        const isPasswordValid = await bcrypt.compare(password, doctor.password);
        if(!isPasswordValid){
            return res.status(401).json({message:"Invalid Credentials"});
        }

        const token  = jwt.sign({email:doctor.email,id:doctor._id}, JWT_SECRET,{expiresIn:'1h'});
        res.status(200).json({token});
    } catch(error){
        res.status(500).json({message:error.message});
    }
});

app.put('/update-doctor/:id', async(req,res)=>{
    const {id} = req.params;
    const updateFields = req.body;
    try{
        const updatedDoctor = await Model.findByIdAndUpdate(id, updateFields,{new: true});
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


app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});