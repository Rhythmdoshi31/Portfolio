import React from 'react'
import { TracingBeam } from "./ui/tracing-beam";
import { FlipWords } from './ui/flip-words';

const About = () => {
  return (
    <TracingBeam>
      <div className="w-full md:w-[80%] mx-auto py-20">
      <FlipWords words={["About Me", "BackStory", "Lore"]} className="text-5xl font-bold text-white mb-8 text-center" />
        <p className="text-gray-300 text-xl px-4">Hey there! I'm Rhythm Doshi, a web developer who treats code like a creative medium—except my "paintings" involve semicolons, breakpoints, and the occasional 2 AM bug hunt. I believe great software should solve real problems and make users smile (even if it's just because the form actually submits without crashing).</p>
        <p className="text-gray-300 text-xl mt-6 mb-16 px-4">As a full-stack developer, I love crafting seamless experiences from database to button click. Fueled by curiosity, coffee, and a healthy dose of stubbornness, I build applications that are  as reliable as they are delightful. Whether it's designing sleek UIs or engineering solid backends, I'm all about code that works—and works well.</p>
      </div>
    </TracingBeam>
  )
}

export default About