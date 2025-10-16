import { ArrowRightIcon, LinkIcon } from "lucide-react"
import { Logo } from "./atoms/Logo"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import type { LogoOption } from "@/lib/types/logo"

type ProjectInfo = {
  title: string;
  content: string;
  organization?: LogoOption;
  website?: string;
  github?: string;
  logos?: LogoOption[];
}

const projects: ProjectInfo[] = [
  {
    title: "Student Kick-Off Website",
    content: `The official website for Student Kick-Off, Belgium’s largest one-day student festival, visited by over 100,000 users after launch.
Because of the high traffic peaks (up to 400 unique visitors per minute), a lot of work went into optimising performance. Caching rules in Cloudflare, image resizing and conversion, and the use of ETags, all without affecting the admin experience.

The platform was built for flexibility. It includes an extensive admin panel with logging and configuration tools, integrates with the Crowd Manager and serves as the source of truth for other Student Kick-Off systems.
`,
    organization: "sko",
    website: "https://www.studentkickoff.be",
    logos: ["go", "react", "typescript"]
  },
  {
    title: "Events",
    content: `Organising events for Zeus WPI involves many parts, multiple organisations, deadlines, and tasks.

The Events platform simplifies this process by automating as much as possible through various API integrations. It includes a task management system for adding, removing, and executing tasks, as well as a check system that validates event readiness and notifies organisers of approaching deadlines or status changes.
`,
    organization: "zeus",
    website: "https://events.zeus.gent",
    github: "https://github.com/zeuswpi/events",
    logos: ["go", "react", "typescript"]
  },
  {
    title: "Crowd Manager",
    content: `During Student Kick-Off, the police need real-time estimates of the number of people on site.
Crowd Manager provides this by analyzing camera feeds at each entrance and exit. The system detects and tracks visitors, determining whether they’re entering or leaving. After testing several public models, I trained a custom model that significantly improved accuracy.

The data is visualised through a Grafana + Prometheus + Node Exporter dashboard and made available via an API for integration with other tools.
`,
    organization: "sko",
    logos: ["python", "grafana", "prometheus"]
  },
  {
    title: "Telraam",
    content: `Telraam is the heart of the 12 Urenloop lap-counting system. Each runner carries a Bluetooth tag, and several receivers around the track collect signal data.
I helped implement a new lap-detection algorithm that determines each runner’s laps from Bluetooth packets and built a live visualiser that estimates the runner’s position in real time.

The data is sent to the frontend for a live visualisation of the race.
`,
    organization: "urenloop",
    github: "https://github.com/12urenloop/telraam",
    logos: ["java"],
  },
  {
    title: "SCC",
    content: `SCC is a Terminal User Interface (TUI) application that displays a variety of data fetched from different APIs.

It includes real-time synced lyrics for the current Spotify song by listening to an MQTT stream for the song ID, fetching metadata from Spotify, and displaying timed lyrics from the LRC lib format in the terminal.
`,
    organization: "zeus",
    github: "https://github.com/zeuswpi/scc",
    logos: ["go", "bubbletea"],
  },
  {
    title: "Ypovoli",
    content: `Ypovoli was a group project at Ghent University: a platform for teachers to create and automatically test programming exercises.

I focused on the execution and evaluation system, which runs submitted code securely inside predefined Docker containers.
Each submission is mounted, executed, and checked against custom test cases provided by professors.
A major part of the work involved sandboxing and security, ensuring that malicious code couldn’t escape the container or affect other systems.
`,
    organization: "ugent",
    github: "https://github.com/SELab-2/UGent-7",
    logos: ["python", "django", "docker", "vue"]
  }
]

const explanation = `Below are a few selected projects that I consider worth highlighting.
They were chosen based on what I learned while working on them and whether their code or results are publicly available.
You can find more of my work on my GitHub although not all projects are open source.
`

export const Projects = () => {
  return (
    <div className="min-h-screen">
      <div id="projects" className="container m-auto py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-12">
            <h2 className="text-7xl font-extrabold text-white">Projects</h2>
            <p className="text-muted-foreground whitespace-pre-wrap text-pretty text-justify">{explanation}</p>
          </div>
          {projects.map(p => <Project key={p.title} project={p} />)}
        </div>
      </div>
    </div>
  )
}

const Project = ({ project }: { project: ProjectInfo }) => {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h3 className="font-bold text-3xl">{project.title}</h3>
            {project.website && (
              <div role="button" className="w-8 cursor-pointer">
                <a href={project.website} target="_blank" rel="noopener noreferrer">
                  <LinkIcon className="hover:text-orange-500" />
                </a>
              </div>
            )}
          </div>
          {project.organization && <Logo logo={project.organization} />}
        </div>
      </div>

      {/* Content */}
      <div className="grow">
        <p className="whitespace-pre-wrap text-pretty text-justify py-8">{project.content}</p>
      </div>

      {/* Separator */}
      <div className="">
        <Separator className="border-2" />
      </div>

      {/* Footer */}
      <div className="pt-4">
        <div className="flex items-center justify-between">
          {project.logos && (
            <div className="flex items-center gap-4">
              {project.logos.map(l => <Logo key={l} logo={l} />)}
            </div>
          )}
          {project.github && (
            <Button size="sm" variant="outline" asChild className="border-white rounded-2xl">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                Github
                <ArrowRightIcon />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}


