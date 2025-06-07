import { useEffect } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'
import ResumeButton from './ResumeButton'
import useActiveSection from '../hooks/useActiveSection'
import {
  UserIcon,
  HammerIcon,
  ClipboardIcon,
  MailIcon,
  WorkExperienceIcon,
  HomeIcon
} from '../components/icons'

interface SidebarProps {
  open: boolean
  close(): void
}

const Sidebar = ({ open, close }: SidebarProps) => {
  useEffect(() => {
    if (!document) return

    if (open) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [open])

  const active = useActiveSection()

  const linkStyle =
    'uppercase font-semibold text-white text-lg flex gap-8 items-center justify-between z-50'

  return (
    <>
      <div
        onClick={() => close()}
        className={clsx(
          'fixed top-0 left-0 z-30 hidden h-screen w-1/2 bg-gray-600/50',
          '-translate-y-full transition-transform',
          'md:block lg:hidden',
          'sidebar',
          open ? '-translate-y-0' : ''
        )}
      ></div>
      <div
        className={clsx(
          'fixed top-0 right-0 z-30 h-screen w-screen bg-primary-800/70',
          'backdrop-blur-md transition-transform',
          'flex flex-col justify-center gap-8 p-16 pb-32',
          'md:w-1/2 lg:hidden',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="mb-8 flex items-center justify-between">
          <Link href="/">
            <a onClick={() => close()}>
              <HomeIcon
                className={`w-8 text-white ${
                  active === 'home' ? 'text-primary-200' : ''
                }`}
              />
            </a>
          </Link>
          <DarkModeToggle className="text-white" />
        </div>
        <Link href="#about" key="about" className="">
          <a className={linkStyle} onClick={() => close()}>
            about
            <span className="w-6 text-white/50">
              <UserIcon />
            </span>
          </a>
        </Link>
        <Link href="#workExperience" key="workExperience" className="">
          <a className={linkStyle} onClick={() => close()}>
            work experience
            <span className="w-6 text-white/50">
              <WorkExperienceIcon />
            </span>
          </a>
        </Link>
        <Link href="#projects" key="projects" className="">
          <a className={linkStyle} onClick={() => close()}>
            projects
            <span className="w-6 text-white/50">
              <HammerIcon />
            </span>
          </a>
        </Link>
        <Link href="#skillset" key="skillset" className="">
          <a className={linkStyle} onClick={() => close()}>
            skillset
            <span className="w-6 text-white/50">
              <ClipboardIcon />
            </span>
          </a>
        </Link>
        <Link href="#contact" key="contact" className="">
          <a className={linkStyle} onClick={() => close()}>
            contact
            <span className="w-6 text-white/50">
              <MailIcon />
            </span>
          </a>
        </Link>
        <ResumeButton className="mt-8 self-center border-white text-white" />
      </div>
    </>
  )
}

export default Sidebar
