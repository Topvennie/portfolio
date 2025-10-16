import Background from "@/assets/landing.jpg?format=webp"
import { cn } from "@/lib/utils"
import { ChevronsDownIcon, DownloadIcon } from "lucide-react"
import type { ComponentProps } from "react"
import { GithubIcon } from "./icons/github"
import { Button } from "./ui/button"
import { Title } from "./atoms/Title"

export const Landing = () => {
  const handleScroll = () => {
    const about = document.getElementById("about")
    if (about) {
      about.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div style={{ backgroundImage: `url(${Background})` }} className="flex h-screen bg-cover bg-center">
      <div className="container m-auto flex flex-col gap-12 items-center">
        <div>
          <Title order={1} className="text-white">Vincent Vallaeys</Title>
          <Title order={2} className="text-muted-foreground">Software Engineer</Title>
        </div>
        <div role="button" className="w-8 cursor-pointer">
          <a href="https://github.com/Topvennie" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="text-white hover:text-orange-500" />
          </a>
        </div>
        <div className="relative">
          <a href="/cv.pdf" download="Vincent_Vallaeys_CV.pdf">
            <ColouredButton className="absolute right-1/2 translate-x-[-32px]">
              CV
              <DownloadIcon />
            </ColouredButton>
          </a>
          <a href="mailto:vincent.vallaeys@gmail.com">
            <ColouredButton className="absolute left-1/2 translate-x-[32px]">
              Contact
            </ColouredButton>
          </a>
        </div>
        <div onClick={handleScroll} role="button" className="pt-12 cursor-pointer animate-hovering">
          <ChevronsDownIcon className="h-8 w-8 text-white hover:text-orange-500" />
        </div>
      </div>
    </div>
  )
}

const ColouredButton = ({ className, ...props }: ComponentProps<"button">) => {
  return (
    <Button variant="ghost" className={cn("text-white border border-white hover:border-orange-500 rounded-2xl cursor-pointer", className)} {...props} />
  )
}
