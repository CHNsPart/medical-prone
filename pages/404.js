import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import arrow from '../public/rightArrow.svg'
import Router from 'next/router'
import Lottie from "lottie-react";
import drop from "../public/drop404.json"
import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

const NotFound = () => {

  return (
<div className="w-full h-screen flex flex-col justify-center items-center">
        <AnimatedCursor 
            innerSize={8}
            outerSize={20}
            color='0,245,110'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            trailingSpeed={8}
            outerStyle={{
                border: '0px solid rgba(0,245,110, .2)',
                borderRadius: '50%',
            }}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link'
            ]}
        />
      <motion.div
        className="flex justify-center items-center my-5"
        layout
        initial={{ opacity: 1, translateY: -40 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          default: {
            duration: 0.6,
            ease: [0.4, 0.71, 0.4, 1.01],
          },
          scale: {
            type: 'spring',
            damping: 100,
            stiffness: 50,
            restDelta: 0.001,
          },
        }}
      >
        <span className="text-[6rem] font-bold leading-[6rem]">4</span>
        <motion.span
            initial={{ opacity:0, scale:0.3  }}
            animate={{ opacity:100, scale:1  }}
            transition={{
                duration: 1,
                delay: 0.6,
                transition: "easeInOut",
                //ease: [0, 0.71, 0.2, 1.01]
            }}   
            className="text-[6rem] font-bold leading-[6rem]"
        >
            <Lottie
                initial={{ opacity:0, y:200 }}
                whileInView={{ opacity:100, y:0 }}
                transition={{
                    duration: 0.6,
                    delay: 1,
                    transition: "easeInOut",
                    //ease: [0, 0.71, 0.2, 1.01]
                }}   
                className='row-span-4 justify-self-center'
                animationData={drop} 
                loop={true} 
                autoplay={true}
                style={{ width: 200, height: 200 }}  
            />
        </motion.span>
        <span className="text-[6rem] font-bold leading-[6rem]">4</span>
      </motion.div>

      <motion.p 
        className="tracking-wide text-md font-semibold w-90 text-center text-zinc-500"
        layout
        initial={{ opacity: 1, translateY: -40 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          default: {
            duration: 0.9,
            delay: 0.1,
            ease: [0.4, 0.71, 0.4, 1.01],
          },
          scale: {
            type: 'spring',
            damping: 100,
            stiffness: 50,
            restDelta: 0.001,
          },
        }}
        >
        THE
        PAGE YOU REQUESTED WAS 
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-darkBrandGreen via-brandGreen to-darkBrandGreen"> NOT FOUND !</span>
        {/* bg-gradient-to-tr to-darkBrandGreen from-brandGreen */}
      </motion.p>

      {/* <Link href="/auth/signin"> */}
      {/* onClick={() => Router.back()} */}
        <motion.div 
            className='flex flex-row justify-center items-center w-3/4 md:w-2/4 lg:w-1/4 xl:w-1/4 mt-10'
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
            type: "spring", 
            stiffness: 20,
            duration: 0.9,
            delay: 0.6,
            transition: "easeIn",
            }} 
        >
            <a 
            type='button'
            onClick={() => Router.back()}
            className='flex flex-row justify-center 
                        items-center border-2 border-white
                        rounded-full text-center
                        gap-4 lg:gap-5 xl:gap-5 md:gap-5
                        mx-3 lg:px-0 xl:px-0 md:px-0
                        h-20 lg:h-24 xl:h-24 md:h-24 w-full
                        transition-all hover:gap-10
                        lg:hover:gap-10 xl:hover:gap-10
                        md:hover:gap-10 text-xs xl:text-base 
                        lg:text-base md:text-base select-none'
            >
            <Image
             className='z-20 transition-all rotate-180' 
             src={arrow} height={20} width={20}
             alt='abstract_mp'
            />
            <span>GO BACK</span>
            <div className="liquid"></div>
            </a>
        </motion.div>
      {/* </Link> */}
    </div>
  )
}

export default NotFound