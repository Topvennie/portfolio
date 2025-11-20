import { GridAligned } from "./atoms/GridAligned"
import { Separator } from "./ui/separator"

import type { ComponentProps, ReactNode } from "react"
import { Logo } from "./atoms/Logo"
import type { LogoOption } from "@/lib/types/logo"

const logos: Record<string, Record<string, LogoOption[]>> = {
  "languages": {
    "proficient": ["go", "typescript", "python"],
    "working": ["c", "java"],
    "familiar": ["ruby"]
  },
  "frameworks": {
    "proficient": ["gofiber", "react", "tailwind", "bubbletea"],
    "working": ["native", "fastify", "django"],
    "familiar": ["angular", "rails"]
  },
  "databases": {
    "all": ["postgresql", "mongodb", "redis", "minio"],
  },
  "tools": {
    "all": ["docker", "sentry", "git", "cicd", "grpc", "coolify", "graphql", "figma", "proxmox", "grafana", "prometheus"],
  },
}

export const Skills = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <Group title="Languages">
        <GridAligned className="grid-cols-[max-content_1fr] items-start">
          <GridAligned.Title className="pt-1">Proficient</GridAligned.Title>
          <GridAligned.Description>
            <Logos>
              {logos.languages.proficient.map(l => <Logo key={l} logo={l} />)}
            </Logos>
          </GridAligned.Description>
          <GridAligned.Title className="pt-1">Working Knowledge</GridAligned.Title>
          <GridAligned.Description>
            <Logos>
              {logos.languages.working.map(l => <Logo key={l} logo={l} />)}
            </Logos>
          </GridAligned.Description>
          <GridAligned.Title className="pt-1">Familiar</GridAligned.Title>
          <GridAligned.Description>
            <Logos>
              {logos.languages.familiar.map(l => <Logo key={l} logo={l} />)}
            </Logos>
          </GridAligned.Description>
        </GridAligned>
      </Group>
      <Group title="Frameworks">
        <GridAligned className="grid-cols-[max-content_1fr] items-start">
          <GridAligned.Title className="pt-1">Proficient</GridAligned.Title>
          <GridAligned.Description>
            <Logos>
              {logos.frameworks.proficient.map(l => <Logo key={l} logo={l} />)}
            </Logos>
          </GridAligned.Description>
          <GridAligned.Title className="pt-1">Working Knowledge</GridAligned.Title>
          <GridAligned.Description>
            <Logos>
              {logos.frameworks.working.map(l => <Logo key={l} logo={l} />)}
            </Logos>
          </GridAligned.Description>
          <GridAligned.Title className="pt-1">Familiar</GridAligned.Title>
          <GridAligned.Description>
            <Logos>
              {logos.frameworks.familiar.map(l => <Logo key={l} logo={l} />)}
            </Logos>
          </GridAligned.Description>
        </GridAligned>
      </Group>
      <Group title="Databases">
        <Logos>
          {logos.databases.all.map(l => <Logo key={l} logo={l} />)}
        </Logos>
      </Group>
      <Group title="Tools">
        <Logos>
          {logos.tools.all.map(l => <Logo key={l} logo={l} />)}
        </Logos>
      </Group>
    </div>
  )
}

const Group = ({ title, children }: { title: string, children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h4 className="font-semibold">{title}</h4>
        <Separator className="border-2" />
      </div>
      {children}
    </div>
  )
}

const Logos = (props: ComponentProps<"div">) => {
  return <div className="flex flex-wrap gap-4" {...props} />
}
