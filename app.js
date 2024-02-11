require('dotenv').config();
//async errors

const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

//middleware
app.use(express.json());

//routes
app.get('/', (req,res)=> {
    res.send('<h1>STORE API</h1><a href="/api/v1/products">products route</a>')
})

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
console.log(`Server is running......`)
})