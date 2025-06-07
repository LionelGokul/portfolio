import { StaticImageData } from 'next/image'

export type Project = {
  title: string
  intro: string
  tags: string[]
  slug: string
  coverImage: string
  liveUrl: string
  repoUrl: string
  content: string
}
export type MyProject = {
  title: string
  description: string
  skills: string[]
  coverImage: StaticImageData
  liveUrl: string
  repoUrl: string
  priority: Number
}

export type Thumbnail = Omit<Project, 'content'>
