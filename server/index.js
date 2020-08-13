require('dotenv').config()
const express = require('express')
const app = express()
const fetch = require('node-fetch')
const { buildUrlWithParams } = require('./utils')

const { API_KEY, API_URL } = process.env

const port = 4000

const buildUrlMiddleware = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000")
    req.apiUrl = buildUrlWithParams(req.query, API_KEY, `${API_URL}${req.path}`)
    next()
}

app.use(buildUrlMiddleware)

const getNews = async (req, res) => {
    try {
        const response = await fetch(req.apiUrl)
        const body = await response.json()
        res.json(body)
    } catch (e) {
        res.status(400).send('Something went wrong')
    }
}

app.get('/top-headlines', getNews)

app.get('/everything', getNews)


app.listen(port, () => {
    console.log('Server is running at port ' + port)
})