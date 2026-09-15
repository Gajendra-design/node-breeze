import bcrypt from 'bcryptjs'
import { config } from '../configs/env.config.js';
import jwt from 'jsonwebtoken';

export const hashPassword = async (password) => {
   return await bcrypt.hash(password, config.SALT)
}

export const comparePassword = async (password,hashPassword)=>{
    return await bcrypt.compare(password,hashPassword)
}

export const generateTokens = (userId) => {
    const accessToken = jwt.sign({ id: userId }, config.ACCESS_SECRET, { expiresIn: '15m' })
    const refreshToken = jwt.sign({ id: userId }, config.REFRESH_SECRET, { expiresIn: '7d' })
    return { accessToken, refreshToken }
}

export const verifyAccessToken = (accessToken) => {
   return jwt.verify(accessToken, config.ACCESS_SECRET)
}
export const verifyRefreshToken = (refreshToken)=>{
    return jwt.verify(refreshToken,config.REFRESH_SECRET)
}