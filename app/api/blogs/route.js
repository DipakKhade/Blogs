import { NextResponse } from "next/server";
import Blog from "@/app/models/blogs";
import connectTomongoDB from "@/libs/mongoDB";

export async function GET() {
    await connectTomongoDB();
    const blogs = await Blog.find();
    return NextResponse.json({ blogs });
  }


  export async function POST(req) {
    const { thunbnail,title,description } = await req.json();
  
    await connectTomongoDB();
  
    await Blog.create({ thunbnail,title,description });
  
    return NextResponse.json({ massage: "Blog created" }, { status: 201 });
  }