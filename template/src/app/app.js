import express from 'express'

export const app = express();

//middelwares
app.use(express.json())