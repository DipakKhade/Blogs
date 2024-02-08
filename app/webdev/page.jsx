import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
const page = () => {
  const code1=`
  <!DOCTYPE html>
<html>
<head>
    <title>HTML Tree Example</title>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section>
        <h2>About Us</h2>
        <p>This is a brief description of our company.</p>
    </section>

    <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
</body>
</html>

  `

  const code2=`
  html
├── head
│   └── title
└── body
    ├── header
    │   ├── h1
    │   └── nav
    │       └── ul
    │           ├── li
    │           │   └── a
    │           ├── li
    │           │   └── a
    │           ├── li
    │           │   └── a
    │           └── li
    │               └── a
    ├── section
    │   ├── h2
    │   └── p
    └── footer
        └── p

  `
  return (
    <div>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 antialiased">
        <div className=" justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
    <header className="mb-4 lg:mb-6 not-format">
        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Understanding How Websites Work</h1>
    </header>

    <p className="lead">Curious about the inner workings of the websites you visit every day? Delve into the fascinating world of web technology with our beginner&apos;s guide to understanding how websites function. From client-server communication to rendering HTML, we&apos;ll unravel the mysteries behind the scenes.</p>

    <h2>Client-Server Architecture</h2>
    <p>At the heart of the web lies the client-server architecture, where web browsers (clients) communicate with web servers to request and receive web pages. This communication occurs via the Hypertext Transfer Protocol (HTTP), a protocol that governs the transfer of data between clients and servers.</p>

    <h2>Request-Response Cycle</h2>
    <p>When you enter a URL into your browser&apos;s address bar and hit enter, a series of events is set in motion. Your browser sends an HTTP request to the corresponding web server, requesting the desired web page. The server processes the request and responds with the requested web page, typically in the form of HTML, CSS, and JavaScript files.</p>

    <h2>Rendering HTML</h2>
    <p>Once the browser receives the HTML file from the server, it begins the process of rendering the web page. This involves parsing the HTML markup, interpreting CSS styles, and executing JavaScript code to create the final visual representation of the webpage.</p>

    <h2>Dynamic Content Generation</h2>
    <p>Many modern websites feature dynamic content generated on the server-side using server-side scripting languages such as PHP, Python, or Node.js. These scripts interact with databases to fetch and manipulate data before rendering it into HTML for the client to consume.</p>

    <h2>Conclusion</h2>
    <p>By understanding the fundamentals of how websites work, you gain insight into the intricate processes that power the web. Whether you&apos;re a curious beginner or a seasoned developer, delving into the mechanics behind web technology opens up a world of possibilities for creating and experiencing the web.</p>

    <div>
      <h3>HTML Tree</h3>
<p>HTML tree refers to the hierarchical structure of HTML elements on a webpage. Its essentially a representation of how HTML elements are nested within each other.

Here s a simple example of an HTML tree:</p>
      <div>
      <SyntaxHighlighter language="javascript" style={vs}>
      {code1.trim()}
    </SyntaxHighlighter>
          
        </div>
    </div>

    <p>HTML tree structure can be visualized like this:</p>

    <div >
    <SyntaxHighlighter language="javascript" style={vs}>
      {code2.trim()}
    </SyntaxHighlighter>
        </div>
        <p>Each element in the HTML tree is nested inside its parent element, forming a hierarchy. This hierarchy is crucial for understanding the structure of a webpage and is used by web browsers to render the content correctly.</p>
</article>

          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
               HTML Entities
              </h1>
            </header>
            <p className="lead">
              Embarking on your journey into web development? Understanding the
              fundamental concepts is key to building a strong foundation. In
              this guide, we&apos;ll explore the basics of web development, including
              HTML entities, to help you kickstart your coding journey.
            </p>
            <h2>What is Web Development?</h2>
            <p>
              Web development is the process of creating websites and web
              applications. It involves a combination of programming languages,
              frameworks, and tools to build and maintain functional and
              visually appealing web experiences.
            </p>
            <h2>HTML Entities</h2>
            <p>
              HTML entities are special characters that are used to represent
              reserved characters in HTML. These characters have special
              meanings in HTML and cannot be used directly in your code.
              Instead, you use their corresponding entity names or entity
              numbers.
            </p>
            <p>
              For example, the less-than sign and greater-than sign are reserved
              characters in HTML. To display them on a webpage, you use the
              following entity names or entity numbers:
            </p>
            <ul>
              <li>
                <code>&amp;lt;</code> or <code>&amp;#60;</code> for the
                less-than sign
              </li>
              <li>
                <code>&amp;gt;</code> or <code>&amp;#62;</code> for the
                greater-than sign
              </li>
            </ul>
            <p>
              Using HTML entities ensures that your code is interpreted
              correctly by web browsers and prevents parsing errors.
            </p>
            <h2>Getting Started with Web Development</h2>
            <p>
              To get started with web development, you&apos;ll need to familiarize
              yourself with the core technologies used in web development:
            </p>
            <ul>
              <li>
                <strong>HTML:</strong> HyperText Markup Language (HTML) is the
                standard markup language used to create the structure and
                content of web pages.
              </li>
              <li>
                <strong>CSS:</strong> Cascading Style Sheets (CSS) is used to
                style and layout the visual presentation of web pages.
              </li>
              <li>
                <strong>JavaScript:</strong> JavaScript is a programming
                language that enables dynamic and interactive behavior on web
                pages.
              </li>
            </ul>
            <p>
              By mastering these foundational technologies and exploring
              advanced concepts and frameworks, you&apos;ll be well-equipped to build
              dynamic and engaging web experiences.
            </p>
           
          </article>
        </div>

        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              Exploring HTML Tags and Attributes
            </h1>
          </header>

          <p className="lead">
            Embarking on a journey into web development? Understanding HTML tags
            and attributes lays the foundation for crafting dynamic web
            experiences. In this guide, we delve into the basics of HTML tags
            and attributes to equip you with the essential knowledge needed to
            kickstart your coding journey.
          </p>

          <h2>Understanding HTML Tags</h2>
          <p>
            HTML tags are the fundamental building blocks of a webpage, defining
            its structure and content. Enclosed within angle brackets, tags
            often come in pairs consisting of an opening tag and a closing tag.
            Content is placed between these tags, defining its appearance and
            functionality.
          </p>

          <h2>Exploring HTML Attributes</h2>
          <p>
            HTML attributes provide additional information about HTML elements,
            modifying their behavior or appearance. They are specified within
            the opening tag and are written as name-value pairs. Attributes
            enhance the functionality and styling of elements, contributing to
            the overall user experience.
          </p>

          <h2>Example of HTML Tag with Attributes:</h2>
          <p>Let&apos;s take a look at an example of an HTML tag with attributes:</p>
          <pre className="bg-black text-white p-2 rounded-sm">
            <code>&lt;img src=&quotimage.jpg&quot alt=&quotImage Description&quot&gt;</code>
          </pre>
          <p>In this example:</p>
          <ul>
            <li>
              <code>src</code> specifies the image files source.
            </li>
            <li>
              <code>alt</code> provides alternative text for the image.
            </li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            Mastering HTML tags and attributes is essential for any aspiring web
            developer. With a solid understanding of these fundamental concepts,
            you&apos;ll be well-equipped to create captivating and functional web
            experiences that engage users.
          </p>

          <section className="not-format p-4">
            

            <form className="mb-6">
              <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <label for="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows="6"
                  className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                  placeholder="Write a comment..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Post comment
              </button>
            </form>

            <div className="btn">commit</div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default page;
