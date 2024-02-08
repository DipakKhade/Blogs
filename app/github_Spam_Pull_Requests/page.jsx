import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
const page = () => {
  return (
    <MaxWidthWrapper>

    <div className={twMerge( "text-lg mb-4 mt-12 md:mt-16")}>
   <h2 className='text-2xl font-bold'>The Dilemma of Spam Pull Requests in Open Source: A Call for Responsible Learning</h2>

   <p className='pt-4'>In the vast landscape of open-source projects, the journey to becoming a valuable contributor is often paved with learning experiences. However, amidst the planty of pathways to success lies a cautionary tale: the tale of the spam pull request.</p>

   <div className='font-semibold'>
<p>Step 1: create GitHub account.</p>

<p>Step 2: Create a repo
( Enough learning ) </p>
<p>Step 3: Fork a popular repo & Spam it with Update Readme.md</p>

<p className='text-red-600'> Now you are opensource contributor.</p>
</div>
   <div className='flex p-2 flex-wrap'>


<Image src={'https://pbs.twimg.com/media/GFqs03QX0AAcBcn?format=jpg&name=small'} width={500} height={400} />
   
<Image src={'https://pbs.twimg.com/media/GFqs1uzXEAAzZoi?format=jpg&name=900x900'} width={500} height={400} />
   
   </div>

<div className='p-4'>
<p>Recently, an incident surfaced on Twitter, showcasing a tutorial video demonstrating the process of pull requests using the Express.js repository. While pull requests are undeniably crucial to mastering collaborative software development, the execution in this particular video raised eyebrows. Instead of using a dedicated practice repository, the tutorial encouraged viewers to modify the README file directly within the Express.js repository.</p>

<p>The aftermath was staggering. A flood of pull requests inundated the repository, each altering a single line in the README file. Understandably, the community reacted with frustration and dismay. But who bears the blame in this scenario?</p>

<p>
Its easy to point fingers at the beginners who followed the tutorial s guidance. However, the fault lies not in malintent but in misguided instruction. As someone who once navigated the complexities of learning to code, I empathize with those who earnestly attempt to follow tutorials to the letter, trusting the expertise of the instructor.
</p>

<p>
Nevertheless, the repercussions of this influx of spam pull requests reverberate throughout the open-source community, particularly burdening maintainers. These dedicated individuals, often volunteers, invest their time and effort in managing contributions, only to find themselves overwhelmed by a deluge of frivolous pull requests.
</p>

<p>
However, amidst the frustration lies a glimmer of hope. Community members have proposed solutions, such as implementing GitHub actions to automatically detect and close spam pull requests. Furthermore, the decreasing trend in spam submissions signifies a growing awareness within the community.
</p>
</div>
    </div>
    <div className="card-actions flex justify-end text-lg font-bold">
      <div>Dipak Khade</div>
      <p>Feb 8,2024</p>
    </div>
    </MaxWidthWrapper>
  )
}

export default page
