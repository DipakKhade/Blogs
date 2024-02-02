
import Content  from "../components/Content";
import { Card } from "@/components/Card";
import {SparklesPreview} from '../components/TagLine'
export default function Home() {
  return (
  <>
  <main className="min-h-screen dark:bg-black">

  <Content/>
  <div className=" mx-auto text-center flex flex-col item-center">

          <SparklesPreview/>
          </div>
 <Card/>

  </main>
  </>
  )
}
