import { NextResponse } from "next/server";
import Blog from "@/app/models/blogs";
import connectTomongoDB from "@/libs/mongo/mongoDB";

export async function GET() {
    await connectTomongoDB();
    const blogs = await Blog.find();
    return NextResponse.json({ blogs });
  }


  export async function POST(req) {
    const { image, date, CardTitle, CardDescription ,blogref } = await req.json();
  
    await connectTomongoDB();
  
    await Blog.create({ image, date, CardTitle, CardDescription ,blogref });
  
    return NextResponse.json({ massage: "Blog created" }, { status: 201 });
  }