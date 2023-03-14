import React from 'react'
import { motion, useScroll } from 'framer-motion'
import nnpic from "../../public/nnpic.svg"
import input from "../../public/input.jpg"
import outputs from "../../public/outputs.png"
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import Lottie from "lottie-react";
import juggle from "../../public/juggling-master.json"

const Architect = () => {

  const { scrollYProgress } = useScroll();

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1280px)'
  })

  return (
    <>
      <motion.div 
        className='h-[100vh] w-full grid justify-center items-center
                  absolute grid-col-4 xl:grid-cols-4 lg:grid-col-4 md:grid-col-4 my-20'
      >
      <div className='col-span-4 w-full grid grid-col-2 grid-rows-4 justify-center items-center mb-20'>
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
          animationData={juggle} 
          loop={true} 
          autoplay={true}
          style={{ width: 200, height: 200 }}  
        />
        <motion.h1 
          className='row-span-4 justify-self-center'
          initial={{ opacity:0, y:200 }}
          whileInView={{ opacity:100, y:0 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            transition: "easeInOut",
            //ease: [0, 0.71, 0.2, 1.01]
          }}     
        >
          How It Works ?
        </motion.h1>
        <motion.p 
          className='row-span-4 text-center mt-2'
          initial={{ opacity:0, y:200 }}
          whileInView={{ opacity:100, y:0 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            transition: "easeInOut",
            //ease: [0, 0.71, 0.2, 1.01]
          }}   
        >
          Upload your single image or batch images to <br /> get a predicted output of possible chest diseases
        </motion.p>
      </div>
        
      {/* Left */}
        <motion.div
          className='h-auto w-1/2 grid grid-col-1 justify-end 
                    items-center text-back justify-self-end rounded-xl 
                    bg-clip-padding object-contain px-2'
        > 
          <Image className='animate-wiggle object-fill object-center h-auto w-full rounded-xl border-2 border-brandGreen shadow-2xl xl:shadow-xl lg:shadow-xl xl:shadow-brandGreen lg:shadow-brandGreen shadow-brandGreen ' src={input} alt='input' />
        </motion.div> 

        
      {/* Center */}
        <motion.div
          className='col-span-2 lg:col-span-2 xl:col-span-2 w-full xl:w-full lg:w-1/2 justify-self-center xl:justify-self-center'
          style={{ opacity: scrollYProgress}}
          initial={{ opacity:0, y:200 }}
          whileInView={{ opacity:100, y:0 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            transition: "easeInOut",
            //ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <Image src={nnpic} alt='architect' />
        </motion.div>


      {/* Right */}
        <motion.div
          className='h-auto w-1/2 justify-end order-6
                    items-center text-white justify-self-start rounded-xl 
                    bg-clip-padding object-contain' 
        > 
        { isDesktopOrLaptop ? 
          (
            <>
            <p className='text-base justify-self-start justify-items-center
                        select-none opacity-50 max-h-72 w-fit overflow-auto 
                        scrollbar-hide animate-sato'
            >
              {"{"}<br />"Atelectasis": "0.3185494840145111",<br />
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
              "Pneumothorax": "0.024134185165166855"<br />
              {"}"}
            </p>
            </>
          )
          :
          (
/*             <p 
              className='grid w-full justify-self-start
                        text-white text-base select-none opacity-50
                        order-last px-2'
              >
                {"Output"}
            </p> */
            <Image className='object-fill object-center h-auto w-full rounded-xl px-2' src={outputs} alt='input' />
          ) 
        }
        </motion.div>
      </motion.div>
    </>
  )
}

export default Architect