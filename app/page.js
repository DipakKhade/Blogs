
import Content  from "../components/Content";
import { Card } from "@/components/Card";
import {TypewriterEffectSmoothDemo} from '../components/TagLine2'
import Header from '@/components/Header'
export default function Home() {
  return (
  <>
  <main className="min-h-screen">
<Header/>
  <Content/>
  <div className="text-center flex flex-col item-center">

        <TypewriterEffectSmoothDemo/>
          </div>
 <Card/>

  </main>
  </>
  )
}
