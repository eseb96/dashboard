const mongoose = require('mongoose');

const ConsultantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please add a name'],
        maxlength: [30,'Name cannot be more than 30 characters']
    },
    dob: {
        type: Date,
        required: [true,'Please add a Date of birth']
    },
    wage: {
        type: Number,
        required: [true, 'Please add the monthly wages']
    }
})

// module.exports = mongoose.models.