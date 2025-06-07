import { NextPage } from 'next'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import 'highlight.js/styles/atom-one-dark.css'

const Lists: NextPage<{}> = () => {
  return (
    <Layout
      title="Project Lists"
      description="Contains a list of projcets done by me"
    >
      <Navbar projectPage />
      <div className="transition-colors xl:dark:bg-neutral-700">
        <div className="inner-shadow relative mx-auto flex h-[450px] max-w-screen-2xl flex-col justify-end md:h-[550px] xl:grid xl:h-[650px] xl:grid-cols-2">
          Project Lists
        </div>
      </div>
      <div className="bg-white transition-colors dark:bg-neutral-700"></div>
    </Layout>
  )
}

export default Lists
