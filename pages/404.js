import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import arrow from '../public/rightArrow.svg'
import Router from 'next/router'
import Lottie from "lottie-react";
import drop from "../public/drop404.json"

const NotFound = () => {
  return (
<div className="w-full h-screen flex flex-col justify-center items-center">
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
        <span className="text-[6rem] font-bold leading-[6rem]">
            <Lottie
                initial={{ opacity:0, y:200 }}
                whileInView={{ opacity:100, y:0 }}
                transition={{
                    duration: 0.6,
                    delay: 0.5,
                    transition: "easeInOut",
                    //ease: [0, 0.71, 0.2, 1.01]
                }}   
                className='row-span-4 justify-self-center'
                animationData={drop} 
                loop={true} 
                autoplay={true}
                style={{ width: 200, height: 200 }}  
            />
        </span>
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
        WE ARE <span className="text-primary font-bold">SORRY</span>, BUT THE
        PAGE YOU REQUESTED WAS NOT FOUND !
      </motion.p>

      {/* <Link href="/auth/signin"> */}
      {/* onClick={() => Router.back()} */}
        <motion.div 
            className='flex flex-row justify-center items-center w-1/4 mt-10'
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