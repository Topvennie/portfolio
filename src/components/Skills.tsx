import { GridAligned } from "./atoms/GridAligned"
import { Separator } from "./ui/separator"

import type { ReactNode } from "react"
import { Logo, type LogoOption } from "./atoms/Logo"

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
    "all": ["docker", "sentry", "cicd", "coolify", "graphql", "figma", "proxmox", "grafana", "prometheus"],
  },
}

export const Skills = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <Group title="Languages">
        <GridAligned>
          <GridAligned.Title>Proficient</GridAligned.Title>
          <GridAligned.Description>
            <div className="flex gap-4">
              {logos.languages.proficient.map(l => <Logo key={l} logo={l} />)}
            </div>
          </GridAligned.Description>
          <GridAligned.Title>Working Knowledge</GridAligned.Title>
          <GridAligned.Description>
            <div className="flex gap-4">
              {logos.languages.working.map(l => <Logo key={l} logo={l} />)}
            </div>
          </GridAligned.Description>
          <GridAligned.Title>Familiar</GridAligned.Title>
          <GridAligned.Description>
            <div className="flex gap-4">
              {logos.languages.familiar.map(l => <Logo key={l} logo={l} />)}
            </div>
          </GridAligned.Description>
        </GridAligned>
      </Group>
      <Group title="Frameworks">
        <GridAligned>
          <GridAligned.Title>Proficient</GridAligned.Title>
          <GridAligned.Description>
            <div className="flex gap-4">
              {logos.frameworks.proficient.map(l => <Logo key={l} logo={l} />)}
            </div>
          </GridAligned.Description>
          <GridAligned.Title>Working Knowledge</GridAligned.Title>
          <GridAligned.Description>
            <div className="flex gap-4">
              {logos.frameworks.working.map(l => <Logo key={l} logo={l} />)}
            </div>
          </GridAligned.Description>
          <GridAligned.Title>Familiar</GridAligned.Title>
          <GridAligned.Description>
            <div className="flex gap-4">
              {logos.frameworks.familiar.map(l => <Logo key={l} logo={l} />)}
            </div>
          </GridAligned.Description>
        </GridAligned>
      </Group>
      <Group title="Databases">
        <div className="flex gap-4">
          {logos.databases.all.map(l => <Logo key={l} logo={l} />)}
        </div>
      </Group>
      <Group title="Tools">
        <div className="flex gap-4">
          {logos.tools.all.map(l => <Logo key={l} logo={l} />)}
        </div>
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
