import ProfileImage from "@/assets/me.jpg?format=webp"
import { useState } from "react"
import { motion } from "framer-motion";
import { Skills } from "./Skills"
import { Experience } from "./Experience";
import { GridAligned } from "./atoms/GridAligned";
import { MailIcon, PhoneIcon } from "lucide-react";

const Tab = {
  experience: "Experiences",
  skills: "Skills",
  projects: "Projects",
} as const;
type Tab = (typeof Tab)[keyof typeof Tab]

const me = `I’m a developer from Ghent with a strong focus on building projects that have a clear, real-world impact.
After spending several years studying computer science and actively contributing to student organisations, I realised that my motivation comes from creating software that I know is being used.
I enjoy working on both the frontend and backend, usually with Go, React, and TypeScript, and I like projects that go futher than plain CRUD operations.

Outside of coding, I’ve been involved in various student initiatives, where I learned a lot about teamwork, coordination, and turning ideas into working systems.
`

export const About = () => {
  const [selected, setSelected] = useState<Tab>(Tab.experience)

  const getSelectedTab = () => {
    switch (selected) {
      case Tab.skills:
        return <Skills />
      case Tab.experience:
        return <Experience />
      case Tab.projects:
        return null
    }
  }

  const handleClick = (tab: Tab) => {
    if (tab === Tab.projects) {
      const projects = document.getElementById("projects")
      if (projects) {
        projects.scrollIntoView({ behavior: "smooth" })
      }

      return
    }

    setSelected(tab)
  }

  return (
    <div className="min-h-screen">
      <div id="about" className="container m-auto pt-24">
        <div className="grid grid-cols-3 gap-12">
          <div className="col-span-2 flex flex-col gap-12">
            <h2 className="text-7xl font-extrabold text-white">About Me</h2>
            <p className="text-muted-foreground whitespace-pre-wrap text-pretty text-justify">{me}</p>
            <div className="relative flex gap-24 border-b border-transparent">
              {Object.values(Tab).map(v => (
                <div key={v} onClick={() => handleClick(v)} className="relative font-bold cursor-pointer pb-1 hover:text-orange-500">
                  {v}
                  {selected === v && (
                    <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 h-[2px] w-full bg-orange-500" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                  )}
                </div>
              ))}
            </div>
            <div className="hidden lg:block">
              {getSelectedTab()}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <img src={ProfileImage} className="object-contain rounded-2xl max-w-102" />
            <GridAligned className="grid-cols-[max-content_1fr] items-center">
              <GridAligned.Title><PhoneIcon size={18} /></GridAligned.Title>
              <GridAligned.Description>+32 470 20 81 75</GridAligned.Description>
              <GridAligned.Title><MailIcon size={18} /></GridAligned.Title>
              <GridAligned.Description className="text-wrap break-all">vincent.vallaeys@gmail.com</GridAligned.Description>
            </GridAligned>
          </div>
          <div className="col-span-3 lg:hidden">
            {getSelectedTab()}
          </div>
        </div>
      </div>
    </div>
  )
}


