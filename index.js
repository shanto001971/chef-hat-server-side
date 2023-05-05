const express = require('express')
const app = express()
const port = 5000
const chefs = require('./chef.json')
const cors = require('cors');

app.use(cors())

app.get('/data', (req, res) => {
    res.send(chefs)
})
app.get('/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const chef = chefs.find(singleChef => singleChef.id === id) || {};
    res.send(chef)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})