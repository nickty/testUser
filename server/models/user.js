const mongoose = require('mongoose'); 
const { Schema } = mongoose; 

const UserSchema = new Schema({
    name: {
        type: String,
        required : 'Name is required'
    },
    email: {
        type:String, 
        unique: 'Email is already exist',
        trim: true,
        required : 'Email is required'
        
    }
})

module.exports = mongoose.model('User', UserSchema);