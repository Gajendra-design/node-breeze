import env from "dotenv"

env.config()

export const config = {
    PORT:Number(process.env.PORT) || 8000,
    MONGO_URL:process.env.MONGO_URL,
    REFRESH_SECRET:process.env.REFRESH_SECRET,
    ACCESS_SECRET:process.env.ACCESS_SECRET,
    SALT:Number(process.env.SALT) || 10
}