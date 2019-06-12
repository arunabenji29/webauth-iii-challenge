const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json());

server.get('/',(req,res) => {
    res.send('It should be definitely working')
})

const port = process.env.PORT || 3700
server.listen(port, ()=>{
    console.log(`API listening for webtokens Project at http://localhost:${port}`)
})