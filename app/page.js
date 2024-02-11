'use client';
import Content  from "../components/Content";
import { Card } from "@/components/Card";
import {TypewriterEffectSmoothDemo} from '../components/TagLine2'
import Terminal from "@/components/Terminal";
export default function Home() {
  return (
  <>
  <main
   className="min-h-screen ">
  <Content/>
  <div className="text-center flex flex-col item-center">

        <TypewriterEffectSmoothDemo/>
          </div>
 <Terminal/>
 <Card/>
  </main>
  </>
  )
}
