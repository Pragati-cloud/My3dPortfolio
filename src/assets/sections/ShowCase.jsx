import React from 'react'
import { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {
const sectionRef = useRef(null);
const project1Ref = useRef(null);
const p2Ref = useRef(null);
const p3Ref = useRef(null);


useGSAP(()=>{

  
const projects = [project1Ref.current, p2Ref.current, p3Ref.current]


  projects.forEach((card,index)=>{
    gsap.fromTo(card,{
      y:50, opacity:0
    },
    {
      y:0, opacity:1,
      duration:1,
      delay:0.3 *(index+1),
      scrollTrigger:{
        trigger:card,
        start:'top bottom-=100'
      }
    },
  )
  })

  gsap.fromTo(sectionRef.current , {opacity:0},
    {opacity:1 , duration :1.5}
  )
},[])

  return (
    
    <section id='work' ref={sectionRef} className='app-showcase'>
      <div className="w-full">
        <div className="showcaselayout">
          {/*Left*/ }
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/pp.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>SignSense</h2>
              <p className='text-white-50 md:text-xl'>A real-time hand sign detection system using Python, OpenCV, Mediapipe, and scikit-learn.</p>
            </div>
          </div>
          {/*right*/ }
          <div className="project-list-wrapper">
            <div className="project" ref={p2Ref} >
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/movie.png" alt="Ryde" />
              </div>
              <h2>🎬 CineScope</h2>
              <p className='text-white-50 md:text-xl'>A stylish movie discovery platform built with React and APIs — search, explore, and dive into your favorite films effortlessly.</p>
            </div>

            <div className="project" ref={p3Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/world.png" alt="Ryde" />
              </div>
              <h2>🌍 WorldAtlas</h2><p className='text-white-50 md:text-xl'>A sleek React web app that brings the world to your screen — explore detailed info about every country using live API data.</p>
            </div>
          </div>
        
        </div>
      </div>
      </section>
  )
}

export default ShowCase