import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
      minlength: [3, 'Username must be at least 3 characters long'],
      maxlength: [40, 'Username cannot exceed 40 characters'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address'],
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least 8 characters long'],  //we will validate the password requirement in controller because Password regex breaks bcrypt hashes
      select: false, // Prevents sensitive password leakage in general queries
    },
    refreshToken: {
      type: String,
      select: false, // Prevents sensitive token leakage in general queries
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('User', userSchema);