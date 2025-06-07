import { useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon } from './icons'
import Button from './Button'
import ResumeButton from './ResumeButton'

const Contact = () => {
  const router = useRouter()

  return (
    <section className="py-36 md:py-48" id="contact">
      <div className="flex w-full items-center">
        <h3 className="whitespace-nowrap font-heading text-lg font-bold uppercase tracking-widest dark:text-white">
          Contact
        </h3>
        <div className="mx-8 h-0.5 w-full max-w-md rounded bg-gray-200"></div>
      </div>
      <div className="mt-12">
        <p className="max-w-lg text-gray-600 dark:text-gray-300">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out if
          you&apos;d like to learn more about my work or how we can collaborate
          on an upcoming project!
        </p>
        <div className="mt-10 flex flex-col justify-center gap-y-6 sm:flex-row sm:items-center sm:justify-start">
          <div className="flex gap-4">
            <ResumeButton />
            <Button
              className="after:left-[-150%]"
              onClick={() => router.push('mailto:lionelgokul1998@gmail.com')}
            >
              Mail
            </Button>
          </div>
          <div className="">
            <ul className="ml-4 flex items-center gap-4">
              <li>
                <a
                  href="https://github.com/LionelGokul"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Github profile"
                >
                  <GithubIcon className="h-8 w-8 dark:fill-white" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sgokul98/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn profile"
                >
                  <LinkedInIcon className="h-8 w-8 dark:fill-white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
