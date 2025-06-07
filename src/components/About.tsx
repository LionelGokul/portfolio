import { GridPattern } from './icons'
import Image from 'next/image'

const About = () => {
  return (
    <section
      className="flex w-full flex-col items-center gap-x-8 pt-28 pb-36 md:flex-row md:pb-48"
      id="about"
    >
      <div className="w-full">
        <div className="flex w-full items-center">
          <h3 className="whitespace-nowrap font-heading text-lg font-bold uppercase tracking-widest dark:text-white">
            About me
          </h3>
          <div className="mx-8 h-0.5 w-full rounded bg-gray-200"></div>
        </div>
        <div className="mt-4 text-gray-600 dark:text-gray-300">
          <p>
            I still remember the first time I sat in front of a computer. I was
            instantly captivated by the endless possibilities it offered.
            Playing games like Pocket Tanks, NFS, and Road Rash only deepened
            that fascination, but what truly amazed me was realizing that behind
            every digital world was carefully crafted code.
          </p>
          <br />

          <p>
            It wasn&apos;t until my seventh semester of college, however, that I
            discovered my real passion for software development. I needed money
            for a trip, so I decided to build a single-page web application.
            From the first line of code to the final result, every step felt
            like bringing an idea to life. Seeing people actually use the
            website I created was a moment of pure fulfillment—I knew then that
            this was what I wanted to do.
          </p>
          <br />

          <p>
            For me, software development is all about solving puzzles and
            finding the most elegant solution to a problem. There might be
            countless ways to fix an issue, but discovering that perfect
            approach is what excites me the most. And with new tools and
            technology emerging every day, there&apos;s always something fresh
            to learn. That constant push to innovate and improve is what keeps
            me inspired and reminds me why I fell in love with this field.
          </p>
          <br />
        </div>
      </div>
      <div className="mt-8 max-w-xs pr-5">
        <div className="relative">
          <div className="group relative z-10 transition-transform hover:translate-x-3 hover:translate-y-3">
            <div className="relative">
              <Image
                src="/images/me.jpg"
                width={500}
                height={500}
                alt="A picture of me"
                className="rounded brightness-90 transition group-hover:brightness-100 group-hover:saturate-100"
              />
            </div>
            <div className="absolute top-0 h-[98%] w-full bg-primary-800/30 transition-colors group-hover:bg-transparent"></div>
          </div>
          <GridPattern className="absolute top-0 mt-4 ml-6 h-full w-full from-primary-800 dark:from-white" />
        </div>
      </div>
    </section>
  )
}

export default About
