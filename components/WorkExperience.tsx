import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import myimg from '../assets/myimg2.jpg'
import { Experience } from '../typings'
type Props = {
  myimg: string,
  experiences:Experience[]
}

const WorkExperience = ({experiences}: Props) => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
     className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center '>        
        <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-lg '>Experience</h3>

    <div className='h-3/4 w-full mt-6 justify-start flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 '>
    {experiences.map(experience=>(<ExperienceCard myimg={''} key={experience._id} experience={experience}/>))}
    {/* {experiences.map(experience=>(<ExperienceCard myimg={''} key={experience._id} experience={experience}/>))} */}


    </div>
    </motion.div>
  )
}

export default WorkExperience