import React from 'react'
import { words } from '../../constants'
import Button from '../component/button.jsx'
import HeroExperience from '../component/HeroModels/HeroExperience.jsx'
import {useGSAP} from '@gsap/react'
import { gsap } from 'gsap'
import AminatedCounter from '../component/AminatedCounter.jsx'
import TitleHeader from '../component/TitleHeader.jsx'


export const hero = () => {
  useGSAP(()=>{
    gsap.fromTo('.hero-text h1', {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1.5, stagger: 0.2})
    gsap.fromTo('.hero-text p', {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1.5, stagger: 0.2})
    gsap.fromTo('#button', {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1.5})
  })


  return (
    <section id ='hero' className ='relative overflow-hidden'> <div className='absolute top-0 left-0 z-10'>
      <img src="/images/bg.png" alt="bg" srcset="" />

    </div>

    <div className="hero-layout">
      <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>

        <div className="flex flex-col gap-7">

          <div className="hero-text">
            <h1>Shaping 
              <span className ='slide'>
                <span className=' wrapper'>
                  {words.map((word) => (<span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                    <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'/>
                    <span>{word.text}</span>
                  </span>))
}
                </span>
              </span>
            </h1>
            <h1>into Real Projects</h1>
            <h1>that Deviler Results</h1>
          </div>
          <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
          Hey, I'm Pragati, a developer based in India with a passion for code.
          </p>
          <Button className='md:w-80 md:h-16 w-60 h-12' id='button' text='See my Work'></Button>
        </div>
      
      </header>
    <figure >
      <div className="hero-3d-layout">
        <HeroExperience></HeroExperience>
      </div>
    </figure>
      </div>
      
      <TitleHeader sub ='What I have Build Throughout' title='My Projects 💼'/>

    </section>
  );
};

export default hero;