const express = require('express')
const { fetchVideos } = require('./fetchVideos')
const app = express()
const port = 3000

fetchVideos()

app.listen(port, () => {
    console.log(`Youtube search listening on port ${port}`)
})