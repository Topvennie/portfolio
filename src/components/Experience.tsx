import { Fragment } from "react/jsx-runtime"
import { GridAligned } from "./atoms/GridAligned"
import { Logo } from "./atoms/Logo"
import type { LogoOption } from "@/lib/types/logo"

type Entry = {
  time: string
  logo: LogoOption
  title: string
  content: string
}

const entries: Entry[] = [
  {
    time: "Jan 2025 - Apr 2025",
    logo: "weare",
    title: "We Are - Software Engineer (Student job)",
    content: `At We Are, a company that creates custom software solutions, I worked as a student developer on a web and mobile platform for a student housing company.
It was my first experience with GraphQL and I learned how to structure large projects into well defined layers with each their own responsibility.
`
  },
  {
    time: "Mar 2024 - Mar 2026",
    logo: "sko",
    title: "Student Kick-Off - Coordinator Software",
    content: `As coordinator software for Student Kick-Off, Belgium's largest one day festival with over 40 000 visitors, I developed and maintained several tools used during the organisation and execution of the event.
I built the new website that attracted more than 100 000 visits, created a financial tool for dynamic contract creation and made a real time people counter to know how many people are at the festival at any given time.
I also maintained existing projects like our internal program to manage tickets, parkings, volunteer shifts, ...
Lastly I helped with the migration of our software stack from Ruby on Rails to Golang + React.
`
  },
  {
    time: "Aug 2023 - Aug 2025",
    logo: "zeus",
    title: "Zeus WPI - President",
    content: `For 2 years I was President of Zeus WPI, the computer science association at Ghent University.
Our goal was to promote practical informatics to students through projects, workshops, talks and code nights.
As president I coordinated the team, organised events and represented the association within the university.
It gave me valuable experience in leading a team to common goals and to coordinate between personalities and organizations. 
`
  },
  {
    time: "2024 - 2025",
    logo: "urenloop",
    title: "Urenloop - IT Team",
    content: `I helped to maintain, setup and improve the Zeus WPI 'urenloop' counting system.
It works by giving each runner a baton with bluetooth and setting up multiple receivers along the course.

I helped to write the currently used algorithm to determine the amount of laps from the bluetooth data, helped to migrate the system to websocket and created a live visualization of the runner's positions.
The system is used during the 12urenloop in Ghent and has been used in the past for events in Bruges and in Antwerp.
`
  },
  {
    time: "May 2023 - May 2024",
    logo: "wvk",
    title: "WVK - Treasurer",
    content: `As treasurer of WVK, one of Ghent University's 7 overarching student associations, I hlped manage the budget and distribute subsidies between 22 child associations.
I also acted as the first point of contact for the associations regarding funding, logistics and operational issues.
`
  },
]

export const Experience = () => {
  return (
    <GridAligned className="lg:space-y-12 space-x-16 items-start">
      {entries.map(e => (
        <Fragment key={e.title}>
          <GridAligned.Title className="text-muted-foreground pt-6 lg:pt-1">{e.time}</GridAligned.Title>
          <GridAligned.Description>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                {e.logo && <Logo logo={e.logo} />}
                <p className="font-bold">{e.title}</p>
              </div>
              <p className="whitespace-pre-wrap text-pretty text-justify">{e.content}</p>
            </div>
          </GridAligned.Description>
        </Fragment>
      ))}
    </GridAligned>
  )
}
