require('dotenv').config();
//async errors
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

//middleware
app.use(express.json());

//routes
app.get('/', (req,res)=> {
    res.send('<h1>STORE API</h1><a href="/api/v1/products">products route will start working ....</a>')
})

app.use('/api/v1/products', productsRouter)

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () =>{
    try {
        await connectDB()
        app.listen(port, ()=>{
          console.log('Server is running......')
})
    } catch (error) {
        console.log(error)
    }
}

start()

// app.listen(port, ()=>{
// console.log(`Server is running......`)
// })