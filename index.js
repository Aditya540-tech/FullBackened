require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/',(req,res)=>{
   res.send('Hello World')
})

app.get('/youtube',(req,res)=>{
  res.send('<h1>Heklllo Youtube</h1>')
})

app.listen(port,()=>{
    console.log(`Example App listening on port ${port}`)
})