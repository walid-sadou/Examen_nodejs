const mongoose = require('mongoose');

// Schema
const bikesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 200
    },
    brand: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 150
    },
    accessories: {
        type: [String],
        required: true,
        minLength: 1,
        enum: ['front basket', 'back basket', 'rear view mirror', 'flowers', 'premium tires', 'bell bag', 'pump']
    },
    stock: {
        type: Number,
        min: 0
    },
    releaseDate: {
        type: Date,
        default: new Date(),
        required: false
    },
    isElectric: {
        type: Boolean,
        required: false,
        default: false
    }
});

//Model
const Bikes = mongoose.model('Bikes', bikesSchema);

//Export
module.exports = Bikes;