import { Schema } from "mongoose";
import mongoose from "mongoose";

const blogsSchema = new Schema(
  {
    image: {
      type: String,
    },
    date: {
      type: String,
    },
    CardTitle: {
      type: String,
    },
    CardDescription: {
      type: String,
    },
    blogref: {
      type: String,
    },
    // actual blog
    
    mainimage: {
      type: [String],
    },
subtitles:{
  type:[String]
},
    maindesc: {
      type: [String],
    },
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogsSchema); //User is a collection name

export default Blog;

/* 
{
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO90lSJSyP8s1JSj4atZ8hUVMgTAqRgdgoXnqUkRguV4G2AoINcWS8d1O4C7TMT51I7hU&usqp=CAU",
  "date": "Feb 03, 2024",
  "CardTitle": "Redux - A predictable state container for JavaScript apps",
  "CardDescription": "Maintain and update data across your applications for multiple components to share, all while remaining independent of the components.",
  "blogref": "/redux",
  "mainimage": [
    "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1272701/regular_1708x683_1023-Reactive_Apps_Dan_Newsletter-e7a0d738ef4f2d2a966847d9828d58c6.png",
    "https://miro.medium.com/v2/resize:fit:919/1*BcmtHcMHN6PT7IniIWniHg.png",
    "https://d2yn3p1o2oplij.cloudfront.net/2023/11/what-is-redux-and-how-to-use-it.webp"
  ],
  "subtitles": [
    "Introduction",
    "What is Redux?",
    "Core Concepts of Redux"
  ],
  "maindesc": [
    "In the realm of frontend development, managing state is a crucial aspect of building robust and scalable applications. Redux, a predictable state container for JavaScript apps, has gained immense popularity for its simplicity and effectiveness in managing application state. In this blog, we'll dive into the core concepts of Redux, explore its principles, and understand how it can revolutionize the way you manage state in your applications.",
    "Redux is a state management library for JavaScript applications, particularly those built using frameworks like React, Angular, or Vue. It provides a centralized store to manage the entire application state, making it predictable and easy to debug. Redux follows a unidirectional data flow architecture, which means that data flows in a single direction, making it easier to trace and understand how state changes occur within the application.",
    "Store: The store is a JavaScript object that holds the entire application state. It serves as a single source of truth, making it easy to access and modify the state from anywhere in the application. Actions: Actions are plain JavaScript objects that represent events or user interactions that trigger state changes. They contain a type field that describes the type of action being performed and optional payload data. Reducers: Reducers are pure functions responsible for handling actions and updating the state of the application. They take the current state and an action as input and return a new state based on the action type. Dispatch: Dispatch is a method provided by Redux to dispatch actions to the store. When an action is dispatched, Redux passes it to the appropriate reducer, which updates the state accordingly. Middleware: Middleware provides a way to extend Redux's functionality by intercepting actions before they reach the reducers. It's commonly used for logging, asynchronous actions, and other cross-cutting concerns."
  ]
}

*/