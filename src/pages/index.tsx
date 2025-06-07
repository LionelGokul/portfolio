import { NextPage } from 'next'
import { getAllProjectsData } from '../services/projectService'
import { Project } from '../types/project'
import useSmoothScroll from '../hooks/useSmoothScroll'
import Layout from '../components/Layout'
import SideNavigation from './../components/SideNavigation'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import Skillset from '../components/Skillset'
import Contact from './../components/Contact'
import WorkExperiences from '../components/WorkExperiences'
import { experiencesData, projectsData } from '../services/data'

interface IndexProps {
  projects: Project[]
}

const Index: NextPage<IndexProps> = ({ projects }) => {
  useSmoothScroll()

  return (
    <Layout
      title="Home"
      description="The personal portfolio of Gokul Sekar. Love for coding and designing a software never ends."
    >
      <div className="transition-colors dark:bg-neutral-700">
        <div className="mx-auto flex max-w-6xl">
          <SideNavigation />
          <div className="w-full px-4 sm:px-8 lg:ml-20">
            <Navbar />
            <Header />
            <About />
            <WorkExperiences Experiences={experiencesData} />
            <Projects projects={projectsData} />
            <Skillset />
            <Contact />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index

export const getStaticProps = async () => {
  return {
    props: {
      projects: getAllProjectsData()
    }
  }
}
