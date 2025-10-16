import Background from "@/assets/landing.jpg?format=webp"
import { cn } from "@/lib/utils"
import { ChevronsDownIcon, DownloadIcon } from "lucide-react"
import type { ComponentProps } from "react"
import { GithubIcon } from "./icons/github"
import { Button } from "./ui/button"

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
          <h1 className="text-9xl font-extrabold text-white">Vincent Vallaeys</h1>
          <h2 className="text-7xl font-semibold text-muted-foreground">Software Engineer</h2>
        </div>
        <div role="button" className="w-8 cursor-pointer">
          <a href="https://github.com/Topvennie" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="hover:text-orange-500" />
          </a>
        </div>
        <div className="relative">
          <ColouredButton className="absolute right-1/2 translate-x-[-32px]">
            CV
            <DownloadIcon />
          </ColouredButton>
          <ColouredButton className="absolute left-1/2 translate-x-[32px]">
            Contact
          </ColouredButton>
        </div>
        <div onClick={handleScroll} role="button" className="pt-12 cursor-pointer animate-hovering">
          <ChevronsDownIcon className="h-8 w-8 hover:text-orange-500" />
        </div>
      </div>
    </div>
  )
}

const ColouredButton = ({ className, ...props }: ComponentProps<"button">) => {
  return (
    <Button variant="ghost" className={cn("border border-white hover:border-orange-500 rounded-2xl cursor-pointer", className)} {...props} />
  )
}
