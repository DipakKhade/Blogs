import mongoose from "mongoose";

const connectTomongoDB=async()=>{
   try {
    await mongoose.connect('mongodb+srv://dipakhade214:TwF7ZImbgD5J5zkt@cluster0.saoibto.mongodb.net/portfolioconnect')
   } catch (error) {
    console.log(error)
   }
}

export default connectTomongoDB;