import { Schema } from "mongoose";
import mongoose from "mongoose";

const blogsSchema=new Schema(
    {
      image:{
        type:String

      },
      date:{
        type:String
      },
      CardTitle:{
        type:String
      },
      CardDescription:{
        type:String
      },
      blogref:{
        type:String
      }

    }
    ,
    {timestamps:true}
)

const Blog = mongoose.models.Blog  ||  mongoose.model("Blog",blogsSchema)   //User is a collection name

export default Blog;
