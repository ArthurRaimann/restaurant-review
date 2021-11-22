import express from 'express'
import cors from 'cors'
import restaurants from './api/restaurants.route.js'

const app = express() // making the server

app.use(cors()) // middle ware that express is going to use
app.use(express.json()) // our sever excepts json in the body of the request

app.use('/api/v1/restaurants', restaurants) //specify initial routs
app.use('*', (req, res) => res.status(404).json({ error: 'not found' }))

export default app
