import { Schema } from "mongoose";
import mongoose from "mongoose";

const blogsSchema=new Schema(
    {
       thumbnail:{
        type:String,
       },
       title:{
        type:String,
        require:true
       },
       description:{
        type:String
       }

    }
    ,
    {timestamps:true}
)

const Blog = mongoose.models.Blog  ||  mongoose.model("Blog",blogsSchema)   //User is a collection name

export default Blog;
