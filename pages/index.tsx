import type {GetStaticProps} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import {Experience, PageInfo, Project, Skill, Social } from '../typings'
import {fetchPageInfo} from '../utils/fetchPageInfo'
import {fetchExperiences} from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocial } from '../utils/fetchSocials'
type Props = {
    pageInfo: PageInfo;
    experiences: Experience [];
    skills: Skill [];
    projects: Project [];
    socials: Social [];
};

const Home = ({pageInfo,experiences,skills,projects,socials}:Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Saif's Portfolio</title>
       </Head>
           <Header socials={socials}/>
         
          <section id='hero' className='snap-start'>
            <Hero pageInfo={pageInfo}/>
          </section>

          
          <section id='about' className='snap-center'>
            <About myimg={''} pageInfo={pageInfo}/>
          </section>

        
          <section id='experience' className='snap-center'>
            <WorkExperience myimg={''} experiences={experiences} />
          </section>

         
          <section id='skills' className='snap-start'>
            <Skills skills={skills}/>
          </section>

        <section id='projects' className='snap-start'>
          <Projects projects={projects}/>
        </section>

        <section id='contact' className='snap-start'>
          <ContactMe/>
        </section>

        <Link href='#hero'>
          <footer className='sticky bottom-5 w-full cursor-pointer'>
            <div className='flex items-center justify-center'><img src='https://png.pngtree.com/png-clipart/20200701/original/pngtree-old-retro-pirate-sword-vector-illustration-png-image_5417340.jpg' alt='' className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'/></div>
          </footer>
        </Link>

     </div>
  )
}

export default Home



export const getStaticProps: GetStaticProps<Props> = async()=>{

  
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();
  const pageInfo: PageInfo = await fetchPageInfo();


  return{
    props:{
      experiences:experiences||null,
      skills:skills||null,
      projects:projects||null,
      socials:socials||null,
      pageInfo:pageInfo||null,

    },
    revalidate:10,
  }

}