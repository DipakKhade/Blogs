import mongoose from "mongoose";

const connectTomongoDB=async()=>{
   try {
    await mongoose.connect(process.env.MONGODBURL)
   } catch (error) {
    console.log(error)
   }
}

export default connectTomongoDB;