const express = require('express')
const { fetchVideos } = require('./fetchVideos')
const { paginatedResults, searchDb, setupDb } = require('./dbOps')
const app = express()
var cors = require('cors');
const port = 8080

app.use(cors())
setupDb().then(() => {
    fetchVideos()
});


app.get('/videos', paginatedResults(), (req, res) => {
    console.log("Get videos API triggered")
    res.json(res.paginatedResults)
})

app.get('/search', searchDb(), (req, res) => {
    res.json(res.paginatedResults);
})

app.listen(port, () => {
    console.log(`Youtube search listening on port ${port}`)
})