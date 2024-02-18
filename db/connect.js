
const mongoose = require('mongoose')

const connectDB = async() => {
  try{
    await mongoose.connect('mongodb+srv://mathewadavuruku:mathewadavuruku@cluster0.c6aq5ce.mongodb.net/')
    .then(console.log("MongoDB connected"))
  }catch(error){
    console.log(error.message)
  }
}

// const connectDB = (url) => {
//   return mongoose.connect(url, {
//     useNewUrlParser: false,
  
   
//     useUnifiedTopology: false,
//   })
// }

module.exports = connectDB
