const express = require('express')
const { fetchVideos } = require('./fetchVideos')
const { paginatedResults, searchDb, setupDb } = require('./dbOps')
const app = express()
const port = 3000

setupDb().then(() => {
    fetchVideos()
});


app.get('/videos', paginatedResults(), (req, res) => {
    res.json(res.paginatedResults)
})

app.get('/search', searchDb(), (req, res) => {
    res.json(res.paginatedResults);
})

app.listen(port, () => {
    console.log(`Youtube search listening on port ${port}`)
})