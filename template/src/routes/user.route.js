import express from 'express'
import { registerController } from '../controllers/auth.controller.js';

export const authRoutes = express.Router();

//post-register-endpoint
authRoutes.post('/register',registerController)

//verification

//login

//forget password

//delete account