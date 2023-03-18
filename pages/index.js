import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from './components/NavBar'
import Architect from './components/Architect'
import Blob from './components/Blob'
import arrow from "../public/rightArrow.svg"
import astra from "../public/astra.svg"
const inter = Inter({ subsets: ['latin'] })
import dynamic from 'next/dynamic'
import { motion, useScroll, useSpring } from 'framer-motion'
import Router from 'next/router'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

export default function Home() {

  const [loading, setLoading] = useState(false)

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleButton = () => {
    Router.push('/upload')
  }

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])


  return (
    <>
    { loading ? 
      (
        <div className='h-[100vh] w-full flex justify-center items-center absolute'>
          <Blob/>
        </div>
      ) 
      : 
      (
        <>
          <Head>
            <title>Medical Prone</title>
            <meta name="description" content="Medical Prone AI" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <AnimatedCursor 
            innerSize={8}
            outerSize={20}
            color='0,245,110'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            trailingSpeed={8}
            // outerStyle={{
            //   border: '0px solid rgba(0,245,110, .2)',
            //   borderRadius: '50%',
            // }}
            // clickables={[
            //   'a',
            //   'input[type="text"]',
            //   'input[type="email"]',
            //   'input[type="number"]',
            //   'input[type="submit"]',
            //   'input[type="image"]',
            //   'label[for]',
            //   'select',
            //   'textarea',
            //   'button',
            //   'img',
            //   '.link'
            // ]}
          />
          <motion.video
            initial={{ opacity: 0, scale: 0.5, borderRadius: "500px" }}
            animate={{ opacity: 1, scale: 1, borderRadius: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              transition: "easeInOut",
              //ease: [0, 0.71, 0.2, 1.01]
            }}
            className="w-full h-full object-cover bg-no-repeat bg-center bg-cover max-h-[66.5vh] absolute -z-20 m-0 p-0"
            src="https://chnspart.com/JFTL/abstract3d.mp4"
            controls={false}
            muted={true}
            autoPlay={true}
            loop={true}
          />
          <main className='grid grid-cols-2 grid-rows-3 h-[100vh] w-full gap-0 scrollbar-hide'>
              <div className='flex justify-center col-span-2 items-start w-full pt-10 h-fit px-40 z-50'>
                <motion.div className="progress-bar" style={{ scaleX }}/>
                <NavBar />
              </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 col-span-2 h-fit opacity-40 px-40">
              {/* top left section */}
              <div 
                className="origin-top lg:h-[33vh] 
                          overflow-hidden 
                          xl:overflow-scroll lg:overflow-scroll md:overflow-scrol
                          scrollbar-hide 
                          xl:scrollbar-hide lg:scrollbar-hide md:scrollbar-hide
                          sm:scrollbar-hide 
                          hidden 
                          xl:block lg:block relative
                          " 
              >
                <p className='text-sm xl:text-base lg:text-base md:text-sm
                              select-none animate-sato delay-500 opacity-20 absolute top-0 p-6'>
                    "Atelectasis": "0.3185494840145111",<br />
                    "Cardiomegaly": "0.08868326246738434",<br />
                    "Consolidation": "0.2665356695652008",<br />
                    "Edema": "0.5353983640670776",<br />
                    "Effusion": "0.11917716264724731",<br />
                    "Emphysema": "0.5018904209136963",<br />
                    "Enlarged Cardiomediastinum": "0.07020698487758636",<br />
                    "Fibrosis": "0.014410634525120258",<br />
                    "Filename": "10.jpg",<br />
                    "Fracture": "0.36686909198760986",<br />
                    "Hernia": "0.0063102091662585735",<br />
                    "Infiltration": "0.2333463579416275",<br />
                    "Lung Lesion": "0.025401389226317406",<br />
                    "Lung Opacity": "0.6239341497421265",<br />
                    "Mass": "0.046956442296504974",<br />
                    "Nodule": "0.07323925197124481",<br />
                    "Pleural_Thickening": "0.008107014000415802",<br />
                    "Pneumonia": "0.5568587779998779",<br />
                    "Pneumothorax": "0.024134185165166855"
                </p>
              </div>
              {/* top right section */}
              <div className="origin-top grid justify-center lg:justify-end xl:justify-end items-end lg:h-[33vh] opacity-0 lg:opacity-100 xl:opacity-100">
                <p className='text-sm xl:text-base lg:text-base md:text-sm text-back'>
                  Github
                </p>
              </div>

            </div>
            {/* bottom section */}
            <div className="grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-6 md:grid-cols-6 gap-20 lg:mx-40 col-span-2 h-fit bg-back leading-normal sticky top-72">
            {/* bottom left */}
              <div className="col-span-3 grid justify-start items-start min-h-[33vh] w-full p-10 xl:px-5 lg:px-5">
                <motion.h1
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring", 
                    stiffness: 20,
                    duration: 0.9,
                    delay: 1,
                    transition: "easeIn",
                  }} 
                  className='text-left xl:text-reg lg:text-reg md:text-med text-sml'
                  >
                  Get accurate chest disease 
                  predictions with our <br /> AI-powered app
                </motion.h1>
                <motion.p className='text-par'
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring", 
                    stiffness: 20,
                    duration: 0.9,
                    delay: 1.2,
                    transition: "easeIn",
                  }} 
                >
                  using advanced neural networks to  
                  analyze x-ray and radiology images.
                </motion.p>
              </div>
            {/* bottom right */}
              <div className="col-span-3 grid grid-cols-4 justify-center items-center h-[33vh] sticky top-72 overscroll-contain mr-2 xl:px-5 lg:p-0">
                <motion.div 
                  className='flex flex-row justify-center items-center col-span-4 lg:col-span-3 xl:col-span-3 md:col-span-3 gap-2'
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring", 
                    stiffness: 20,
                    duration: 0.9,
                    delay: 1.8,
                    transition: "easeIn",
                  }} 
                >
                  <a 
                    type='button'
                    onClick={handleButton}
                    className='flex flex-row justify-center 
                              items-center border-2 border-white
                              rounded-full
                              gap-4 lg:gap-5 xl:gap-5 md:gap-5
                              mx-3 lg:px-0 xl:px-0 md:px-0
                              h-20 lg:h-32 xl:h-32 md:h-32 w-full
                              transition-all hover:gap-10
                              lg:hover:gap-10 xl:hover:gap-10
                              md:hover:gap-10 text-xs xl:text-base 
                              lg:text-base md:text-base select-none'
                  >
                    <span>GET STARTED</span>
                    <Image className='z-20' src={arrow} height={20} width={20} alt='abstract_mp'/>
                    <div className="liquid"></div>
                  </a>
                </motion.div>
                <div className='flex flex-col lg:flex-row xl:flex-row md:flex-row justify-center items-center col-span-4 lg:col-span-1 xl:col-span-1 md:col-span-1 rounded-full h-20 lg:h-32 xl:h-32 md:h-32 w-full object-contain'
                >
                  <motion.video 
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring", 
                      stiffness: 20,
                      duration: 0.9,
                      delay: 1.6,
                      transition: "easeIn",
                    }} 
                    className="object-cover bg-no-repeat bg-center bg-cover rounded-full h-20 lg:h-32 xl:h-32 md:h-32"
                    controls={false}
                    muted={true}
                    autoPlay={true}
                    loop={true}
                    src="https://chnspart.com/JFTL/abstract.mp4"
                  />
                  <Image className='absolute xl:h-20 lg:h-15 md:h-10 h-10 animate-fadeup hover:animate-spin' src={astra} height={70} width={70} alt='abstract_mp'/>
                </div>
              </div>
            </div>
          </main>
          <section>
            <Architect/>
          </section>
        </>
      ) 
    }
  </>

    
  )
}
