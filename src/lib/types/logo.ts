import Urenloop from "@/assets/icons/12urenloop.png?format=webp"
import Angular from "@/assets/icons/angular.png?format=webp"
import Bubbletea from "@/assets/icons/bubbletea.png?format=webp"
import C from "@/assets/icons/c.png?format=webp"
import CiCd from "@/assets/icons/cicd.png?format=webp"
import Coolify from "@/assets/icons/coolify.png?format=webp"
import Django from "@/assets/icons/django.png?format=webp"
import Docker from "@/assets/icons/docker.png?format=webp"
import Fastify from "@/assets/icons/fastify.png?format=webp"
import Figma from "@/assets/icons/figma.png?format=webp"
import Git from "@/assets/icons/git.png?format=webp"
import Go from "@/assets/icons/go.png?format=webp"
import Gofiber from "@/assets/icons/gofiber.png?format=webp"
import Grafana from "@/assets/icons/grafana.png?format=webp"
import Graphql from "@/assets/icons/graphql.png?format=webp"
import Java from "@/assets/icons/java.png?format=webp"
import Minio from "@/assets/icons/minio.png?format=webp"
import Mongodb from "@/assets/icons/mongodb.png?format=webp"
import Postgresql from "@/assets/icons/postgresql.png?format=webp"
import Prometheus from "@/assets/icons/prometheus.png?format=webp"
import Proxmox from "@/assets/icons/proxmox.png?format=webp"
import Python from "@/assets/icons/python.png?format=webp"
import Rails from "@/assets/icons/rails.png?format=webp"
import ReactNative from "@/assets/icons/react-native.png?format=webp"
import React from "@/assets/icons/react.png?format=webp"
import Redis from "@/assets/icons/redis.png?format=webp"
import Ruby from "@/assets/icons/ruby.png?format=webp"
import Sentry from "@/assets/icons/sentry.png?format=webp"
import SKO from "@/assets/icons/sko.png?format=webp"
import Tailwind from "@/assets/icons/tailwind.png?format=webp"
import Typescript from "@/assets/icons/typescript.png?format=webp"
import Ugent from "@/assets/icons/ugent.png?format=webp"
import Vue from "@/assets/icons/vue.png?format=webp"
import Weare from "@/assets/icons/weare.png?format=webp"
import Wvk from "@/assets/icons/wvk.png?format=webp"
import Zeus from "@/assets/icons/zeus.png?format=webp"

type LogoInfo = {
  logo: string;
  tip: string;
  href?: string;
}

export const logos = {
  go: { logo: Go, tip: "Golang", href: "https://go.dev/" },
  typescript: { logo: Typescript, tip: "Typescript", href: "https://www.typescriptlang.org/" },
  python: { logo: Python, tip: "Python", href: "https://www.python.org/" },
  c: { logo: C, tip: "C", href: "https://www.c-language.org/" },
  java: { logo: Java, tip: "Java", href: "https://www.java.com/en/" },
  ruby: { logo: Ruby, tip: "Ruby", href: "https://www.ruby-lang.org/en/" },
  gofiber: { logo: Gofiber, tip: "Gofibr", href: "https://gofiber.io/" },
  react: { logo: React, tip: "React", href: "https://react.dev/" },
  vue: { logo: Vue, tip: "Vue", href: "https://vuejs.org/" },
  tailwind: { logo: Tailwind, tip: "Tailwind", href: "https://tailwindcss.com/" },
  bubbletea: { logo: Bubbletea, tip: "Bubbletea", href: "https://github.com/charmbracelet/bubbletea" },
  native: { logo: ReactNative, tip: "React Native", href: "https://reactnative.dev/" },
  fastify: { logo: Fastify, tip: "Fastify", href: "https://fastify.dev/" },
  django: { logo: Django, tip: "Django", href: "https://www.djangoproject.com/" },
  angular: { logo: Angular, tip: "Angular", href: "https://angular.dev/" },
  rails: { logo: Rails, tip: "Ruby on Rails", href: "https://rubyonrails.org/" },
  postgresql: { logo: Postgresql, tip: "PostgreSQL", href: "https://www.postgresql.org/" },
  mongodb: { logo: Mongodb, tip: "MongoDB", href: "https://www.mongodb.com/" },
  redis: { logo: Redis, tip: "Redis", href: "https://redis.io/" },
  minio: { logo: Minio, tip: "Minio", href: "https://www.min.io/" },
  docker: { logo: Docker, tip: "Docker", href: "https://www.docker.com/" },
  sentry: { logo: Sentry, tip: "Sentry", href: "https://sentry.io/welcome/" },
  cicd: { logo: CiCd, tip: "CI/CD", href: "" },
  coolify: { logo: Coolify, tip: "Coolify", href: "https://coolify.io/" },
  graphql: { logo: Graphql, tip: "GraphQL", href: "https://graphql.org/" },
  figma: { logo: Figma, tip: "Figma", href: "https://www.figma.com" },
  proxmox: { logo: Proxmox, tip: "Proxmox", href: "https://www.proxmox.com/en/" },
  grafana: { logo: Grafana, tip: "Grafana", href: "https://grafana.com/" },
  prometheus: { logo: Prometheus, tip: "Prometheus", href: "https://prometheus.io/" },
  sko: { logo: SKO, tip: "Student Kick-Off", href: "https://www.studentkickoff.be/" },
  zeus: { logo: Zeus, tip: "Zeus WPI", href: "https://zeus.gent/" },
  ugent: { logo: Ugent, tip: "Ghent University", href: "https://www.ugent.be/en" },
  wvk: { logo: Wvk, tip: "Werkgroepen Konvent", href: "https://dsa.ugent.be/verenigingen/details/wvk" },
  weare: { logo: Weare, tip: "We Are", href: "https://we-are.be/" },
  urenloop: { logo: Urenloop, tip: "12 Urenloop", href: "https://12urenloop.be/" },
  git: { logo: Git, tip: "Git", href: "https://git-scm.com/" },
} as const satisfies Record<string, LogoInfo>;

export type LogoOption = keyof typeof logos;
