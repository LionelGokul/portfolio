import { ExperienceType } from '../types/experience'
import Experience from './Experience'

const WorkExperiences = ({
  Experiences
}: {
  Experiences: ExperienceType[]
}) => {
  return (
    <section className="py-36 md:py-48" id="workExperience">
      <div className="flex w-full items-center">
        <h3 className="whitespace-nowrap font-heading text-lg font-bold uppercase tracking-widest dark:text-white">
          Work Experience
        </h3>
        <div className="mx-8 h-0.5 w-full max-w-md rounded bg-gray-200"></div>
      </div>
      <ul className="mt-16 flex flex-col gap-16">
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {Experiences.map((experience) => (
            <Experience Experience={experience} key={experience.startedAt} />
          ))}
        </div>
      </ul>
    </section>
  )
}

export default WorkExperiences
