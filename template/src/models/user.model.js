import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
        minlength: [3, 'username must be more then of 3 characters'],
        maxlength: [40, 'username cannot be more then of 40 character long'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: [true, 'email must be unique'],
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please fill a valid email address'],
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'],
        minlength: [8, 'password must be atleast of 8 character long'],
        select: false
    }
})

const userModel = mongoose.model('users', userSchema)