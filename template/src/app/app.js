import express from 'express'
import cookieParser from 'cookie-parser'
import { authRoutes } from '../routes/user.route.js';

export const app = express();

//middelwares
app.use(express.json())
app.use(cookieParser())

//auth api route
app.use('/api/auth',authRoutes)