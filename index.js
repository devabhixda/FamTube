const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello Github")
})

app.listen(port, () => {
    console.log(`Youtube search listening on port ${port}`)
})