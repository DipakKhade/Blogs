import HomeBlogs from "@/components/HomeBlogs";
import Content  from "../components/Content";


export default function Home() {
  return (
  <>
  <main className="min-h-screen dark:bg-zinc-900">

  <Content/>
  <div className="p-20 mx-auto text-center flex flex-col item-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl dark:text-white">
        
          Discover the artistry behind web development and 
            <span className="text-purple-600 ml-2">tech innovation</span>.
          </h1>
          </div>
 
<HomeBlogs/>
  </main>
  </>
  )
}
