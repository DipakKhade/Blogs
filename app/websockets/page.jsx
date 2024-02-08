"use client";
import React from "react";
import Video from "next-video";
import websocketvideo from "/videos/VID_20240128183853.mp4";
const page = () => {
  const servercode = `
  import { Socket } from "dgram";
import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

//web socket

io.on("connection", (socket) => {
 

  //getting messages from frontend , i.e the message event emit by the frontend
  socket.on("user-msg", (message) => {
    io.emit("user-msg", message);
  });
});

app.use(express.static(process.cwd() + "/public"));
app.get("/", (req, res) => {
  return res.sendFile(process.cwd() + "/public/index.html");
});

server.listen(3001, () => {
  console.log("server stated ");
});

`;

  const clientcode = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Web Sockets</title>
  </head>
  <body>
    <h1>Send a Message via Socket</h1>

    <input type="text" id="message" placeholder="Enter Message" />
    <button id="sendBtn">Send</button>

    <div id="messages"></div>

    <script src="/socket.io/socket.io.js"></script>
    <script>
      const socket = io();
      const sendBtn = document.getElementById("sendBtn");
      const messageInput = document.getElementById("message");
      const allMessages = document.getElementById("messages");

      socket.on("message", (message) => {
        const p = document.createElement("p");
        p.innerText = message;
        allMessages.appendChild(p);
      });

      sendBtn.addEventListener("click", (e) => {
        const message = messageInput.value;
        console.log(message);
        socket.emit("user-message", message);
      });
    </script>
  </body>
</html>
`;

  return (
    <div className="min-h-screen justify-center items-center dark:bg-black dark:text-white">
      <div className="max-w-6xl p-8  md:pl-[22vw]">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-400">
          The WebSocket API
        </h2>

        <p className="text-lg mb-4">
          The WebSocket API is an advanced technology that makes it possible to
          open a two-way interactive communication session between the user&apos;s
          browser and a server.
        </p>

        <p className="text-lg ">
          WebSocket is a communication protocol that provides full-duplex
          communication channels over a single, long-lived TCP connection. It is
          designed to be lightweight, efficient, and well-suited for real-time
          applications where low latency and high throughput are required.
          WebSocket enables bidirectional communication between a client (such
          as a web browser) and a server, allowing them to exchange data in
          real-time without the overhead of traditional HTTP requests and
          responses.
        </p>

        <div className="p-3">
          <img src="https://www.websocket.cz/web/img/rest-to-websocket-infrastructure.png" alt="" />
        </div>

        <h4 className="p-4 text-2xl font-bold">demo :</h4>

        <div className="bg-slate-950 text-white p-4 rounded-md mockup-code">
          <pre>
            <pre data-prefix="$" className="text-green-600">
              <code>/server.js</code>
            </pre>
            <code> {servercode.trim()}</code>
          </pre>
        </div>

        <div className="bg-slate-950 text-white p-4 rounded-md mockup-code mt-4">
          <pre>
            <pre data-prefix="$" className="text-green-600">
              <code>/public/index.html</code>
            </pre>
            <code> {clientcode.trim()}</code>
          </pre>
        </div>
      </div>

      <div className="md:w-[84vw] md:pl-[15vw] p-2">
<h4 className="p-4 text-2xl font-bold">OutPut :</h4>
      <Video src={websocketvideo} />
      {/* https://next-video.dev/docs#remote-storage-and-optimization */}
      </div>


     <div className="max-w-6xl p-8  md:pl-[22vw]">
     <h2 className="text-2xl font-bold text-blue-400">WebSockets Overview</h2>

<ol>
  <li><strong>Establishing a Connection:</strong>
    <ul>
      <li>The client initiates the WebSocket connection by sending a special HTTP request, known as the WebSocket handshake, to the server.</li>
      <li>If the server supports WebSockets, it responds with a corresponding handshake indicating the successful upgrade to the WebSocket protocol.</li>
    </ul>
  </li>

  <li><strong>Bi-directional Communication:</strong>
    <ul>
      <li>Once the WebSocket connection is established, both the client and server can send messages to each other at any time without having to wait for a request from the other party.</li>
      <li>Messages can be sent in either direction (from client to server or from server to client) asynchronously, allowing for real-time data exchange.</li>
    </ul>
  </li>

  <li><strong>Persistent Connection:</strong>
    <ul>
      <li>Unlike traditional HTTP, where connections are typically short-lived and stateless, WebSockets maintain a persistent connection between the client and server until one of the parties decides to close the connection.</li>
      <li>This persistent connection eliminates the need for repeatedly establishing and tearing down connections, reducing overhead and latency, especially for applications requiring frequent data exchange.</li>
    </ul>
  </li>

  <li><strong>Efficient and Low-latency Communication:</strong>
    <ul>
      <li>WebSockets are designed to be efficient and low-latency, making them well-suited for real-time applications such as online gaming, chat applications, live financial data feeds, collaborative editing tools, etc.</li>
      <li>By eliminating the overhead of establishing new connections for each communication, WebSockets reduce latency and provide a more responsive user experience compared to traditional HTTP-based approaches.</li>
    </ul>
  </li>

  <li><strong>Protocol and API:</strong>
    <ul>
      <li>WebSockets use a standardized protocol that defines how messages are framed, sent, and received over the WebSocket connection.</li>
      <li>Modern web browsers provide a JavaScript API (`WebSocket`) that allows client-side code to establish WebSocket connections and send/receive messages to/from the server.</li>
    </ul>
  </li>

  <li><strong>Security Considerations:</strong>
    <ul>
      <li>WebSocket connections can use the same security mechanisms as HTTP, such as TLS/SSL encryption, to ensure data confidentiality and integrity.</li>
      <li>Developers must be mindful of security risks such as cross-origin attacks, denial-of-service attacks, and message injection vulnerabilities when implementing WebSocket-based applications.</li>
    </ul>
  </li>
</ol>

<address className="flex items-center mb-6 not-italic pt-6 ml-[40vw]">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                     
                      <div>
                          <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Dipak Khade</a>
                          
                          <p className="text-base text-gray-500 dark:text-gray-400">Jan 28 2024</p>
                      </div>
                  </div>
              </address>

              <section className="not-format p-4">
             
             <form className="mb-6">
                 <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                     
                     <textarea id="comment" rows="6"
                         className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white  dark:bg-gray-800"
                         placeholder="Write a comment..." required></textarea>
                 </div>
                 
             </form>
          
             <div className='btn bg-blue-400'>commit</div>
         </section>
     </div>
    </div>
  );
};

export default page;
