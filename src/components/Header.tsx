import { useRouter } from 'next/router'
import Button from './Button'
import Highlight from './Highlight'

const Header = () => {
  const router = useRouter()

  return (
    <section className="mt-20 flex min-h-[625px] flex-col justify-center md:min-h-[750px]">
      <p className=" mt-4 mr-5 font-bold text-gray-600 dark:text-gray-400">
        Hey - I&apos;m
      </p>
      <div
        className="mt-3 flex max-w-fit flex-col whitespace-nowrap rounded bg-primary-800 px-2 pt-1 pb-3 font-mono text-5xl
        font-semibold tracking-tight text-white shadow-lg dark:font-bold sm:flex-row sm:text-5xl lg:text-6xl"
      >
        <span className="mr-5">{'<Gokul'}</span>
        <span>{'Sekar />'}</span>
      </div>
      <h2 className="mt-4 font-heading text-5xl font-bold text-gray-600 dark:text-gray-300 sm:text-5xl lg:text-6xl">
        The urge to write code never ends.
      </h2>
      <p className="mt-8 max-w-2xl text-gray-600 dark:text-gray-300">
        As a seasoned <Highlight text="Software Developer " />
        with a rich history of contributions across dynamic roles in startup
        environments, I bring a fervent passion for leveraging new technologies
        to solve complex problems and enhance user experiences. My career is
        distinguished by a relentless pursuit of innovation, characterized by
        enhancing application performance, scalability, and implementing
        strategic data-driven solutions that drive substantial business growth.
      </p>
      <Button className="mt-8" onClick={() => router.push('#projects')}>
        Projects
      </Button>
    </section>
  )
}

export default Header
