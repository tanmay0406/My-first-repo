const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    ownerName: {
        type: String,
        required: true
    },
    ownerContact: {
        type: String,
        required: true
    },
    ownerEmail: {
        type: String,
        required: true
    },
    ownerCity: {
        type: String,
        required: true
    },
    vehicleType: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    variant: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    rtoCode: { // Changed from 'rtocode' to 'rtoCode'
        type: String,
        required: true
    },
    batteryPower: {
        type: String,
        required: true
    },
    kilometresDriven: {
        type: String,
        required: true
    },
    images: [{ type: String, required: true }] // Array of image paths
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
