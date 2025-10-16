import ProfileImage from "@/assets/me.jpg?format=webp"
import { useMemo, useState, type ComponentProps, type ReactNode } from "react"
import { motion } from "framer-motion";
import { Skills } from "./Skills"
import { Experience } from "./Experience";
import { GridAligned } from "./atoms/GridAligned";
import { MailIcon, PhoneIcon } from "lucide-react";
import { Title } from "./atoms/Title";
import { cn } from "@/lib/utils";
import { useIsDesktop } from "@/lib/hooks/useIsDesktop";

const Tab = {
  experience: "Experiences",
  skills: "Skills",
  projects: "Projects",
} as const;
type Tab = (typeof Tab)[keyof typeof Tab]

const me = `I’m a developer from Ghent with a strong preference on building projects that have a clear, real-world impact.
After spending several years studying computer science and actively contributing to student organisations, I realised that my motivation comes from creating software that I know is actively being used.

I enjoy working on both the frontend and backend, usually with Go, React, and TypeScript, and I prefer projects that go futher than plain CRUD operations.

Outside of coding, I’ve been involved in various student initiatives, where I learned a lot about teamwork, coordination, and turning ideas into working systems.
`

export const About = () => {
  const isDesktop = useIsDesktop()

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

  const selectedTab = useMemo(() => getSelectedTab(), [selected])

  return (
    <div id="about" className="pt-12 md:pt-24">
      {isDesktop
        ? <AboutDesktop selected={selected} handleClick={handleClick} selectedTab={selectedTab} className="hidden lg:grid" />
        : <AboutMobile selected={selected} handleClick={handleClick} selectedTab={selectedTab} className="lg:hidden" />
      }
    </div>
  )
}

type AboutProps = {
  selected: Tab;
  handleClick: (tab: Tab) => void;
  selectedTab: ReactNode;
} & ComponentProps<"div">

const AboutMobile = ({ selected, handleClick, selectedTab, className, ...props }: AboutProps) => {
  return (
    <div className={cn("flex flex-col gap-8", className)} {...props}>
      <div>
        <div className="ml-8 mb-8 float-right">
          <img src={ProfileImage} className="object-contain rounded-2xl w-36" />
        </div>
        <Title order={2} className="pb-4">About Me</Title>
        <p className="text-muted-foreground break-normal whitespace-pre-wrap text-justify">{me}</p>
      </div>
      <div className="flex gap-8">
        {Object.values(Tab).map(v => (
          <div key={v} onClick={() => handleClick(v)} className="relative font-bold cursor-pointer pb-1 hover:text-orange-500">
            {v}
            {selected === v && (
              <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 h-[2px] w-full bg-orange-500" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
            )}
          </div>
        ))}
      </div>
      {selectedTab}
    </div>
  )
}

const AboutDesktop = ({ selected, handleClick, selectedTab, className, ...props }: AboutProps) => {
  return (
    <div className={cn("grid grid-cols-3 gap-12 w-full", className)} {...props}>
      <div className="col-span-2 flex flex-col gap-12">
        <Title order={2}>About Me</Title>
        <p className="text-muted-foreground break-normal whitespace-pre-wrap text-justify">{me}</p>
        <div className="flex gap-24">
          {Object.values(Tab).map(v => (
            <div key={v} onClick={() => handleClick(v)} className="relative font-bold cursor-pointer pb-1 hover:text-orange-500">
              {v}
              {selected === v && (
                <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 h-[2px] w-full bg-orange-500" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
              )}
            </div>
          ))}
        </div>
        {selectedTab}
      </div>
      <div className="col-span-1 flex flex-col gap-4">
        <img src={ProfileImage} className="object-contain rounded-2xl" />
        <GridAligned className="grid-cols-[max-content_1fr] items-center">
          <GridAligned.Title><PhoneIcon size={18} /></GridAligned.Title>
          <GridAligned.Description>+32 470 20 81 75</GridAligned.Description>
          <GridAligned.Title><MailIcon size={18} /></GridAligned.Title>
          <GridAligned.Description className="text-wrap break-all">
            <a href="mailto:vincent.vallaeys@gmail.com" className="hover:text-orange-500">
              vincent.vallaeys@gmail.com
            </a>
          </GridAligned.Description>
        </GridAligned>
      </div>
    </div>
  )
}

