import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import upload from "../../public/upload.json"
import complete from "../../public/complete.json"
import arrow from "../../public/rightArrow.svg"
import dynamic from 'next/dynamic'
import { CiImageOn } from "react-icons/ci"
import NavBar from "../components/NavBar";
import { RxCross2 } from "react-icons/rx"
import { AiOutlineLoading } from "react-icons/ai"
import { useMediaQuery } from 'react-responsive'
import axios from "axios";
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});



const index = () => {
  const fileInputField = useRef(null);
  const [formData, setFormData] = useState({});
  const [files, setFiles] = useState();
  const [status, setStatus] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    setStatus(true)
    setTimeout(() => setStatus(true), 5000);
    setStatus(false)
    return () => {
      clearTimeout()
    }
  },[files])

  const handleUpload = (e) => {
    //setFiles(false)
    e.preventDefault();
    const file = fileInputField.current.files[0];
    // setError(false)
    setFiles(URL.createObjectURL(file))
    setFormData({'file': URL.createObjectURL(file)},{'process_type': 'Single'})

    // if(file){
    //   const reader = new FileReader();
    //   reader.readAsDataURL(file);
    //   reader.onload = () => {
    //     setFiles(reader.result);
    //   };
    // }
  }
  
  const removeFile = () => {
    setFiles("")
    setError(false)
    setErrorText("")
    setStatus(false)
  }
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1280px)'
  })

  const handleSubmitButton = async (e) => {
    e.preventDefault()
    console.log("formData",formData)
    try {
      setError(false)
      setErrorText("")
      axios.post('https://footfall.pagekite.me/api/upload', formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      .then(function(res){
        console.log(res)
      })
      .catch(function(error){
        setError(true)
        setErrorText("")
        setErrorText(error.message)
        console.log(error.message)
      })
    } catch (error) {
      // setError(true)
      console.log(error)
    }
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-5 px-5 relative">
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
    <div className='flex justify-center top-10 absolute w-full h-fit px-40 pb-40 z-50'>
      <NavBar />
    </div>
    <div className='h-fit w-full flex flex-col xl:flex-row lg:flex-row md:flex-row justify-center items-center gap-5 px-5'>
        <form className="h-auto" action="">
          <motion.div
            initial={{ opacity:0, x:-100 }}
            animate={{ opacity:100, x:0 }}
            transition={{
              duration: 1,
              delay: 0.6,
              transition: "easeInOut",
              //ease: [0, 0.71, 0.2, 1.01]
            }} 
            className="w-60 h-40 bg-back border-2 border-dashed border-white rounded-xl flex justify-center items-center relative"
          >
              <p className="text-center w-full z-10 justify-self-center place-items-center tracking-widest font-bold absolute top-20">
                UPLOAD
              </p>
              <Image src={arrow} alt="arrow justify-self-center place-items-center" width={20} height={20} className="opacity-100 z-10 absolute -rotate-90 top-12" />
              <Lottie
                initial={{ opacity:0, y:200 }}
                animate={{ opacity:100, y:0 }}
                transition={{
                  duration: 1,
                  delay: 1,
                  transition: "easeInOut",
                  //ease: [0, 0.71, 0.2, 1.01]
                }}   
                className='row-span-4 justify-self-center absolute opacity-20'
                animationData={JSON.parse(JSON.stringify(upload))} 
                loop={true} 
                autoplay={true}
                style={{ width: 200, height: 150 }}  
              />
            <div className="liquid"></div> 
            <input type="file" accept="image/*" onChange={handleUpload} ref={fileInputField} className="opacity-0 z-40 w-full h-full" />
          </motion.div>
        </form>
        <motion.div 
          className="w-40 h-40 bg-[#2A2A2A] rounded-xl flex justify-center items-center"
          initial={{ opacity:0, x:100 }}
          animate={{ opacity:100, x:0 }}
          transition={{
            duration: 1,
            delay: 0.6,
            transition: "easeInOut",
            //ease: [0, 0.71, 0.2, 1.01]
          }} 
        >
          { files ? 
            <>
              <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{
                  duration: 1,
                  delay: 2,
                  transition: "easeInOut",
                }}
                className="h-10 w-10 bg-back absolute opacity-50 rounded-full hover:opacity-100 flex justify-center items-center text-brandGreen/20 hover:text-brandGreen transition-all duration-300 z-40"
                onClick={removeFile}
              >
                <RxCross2 size={isDesktopOrLaptop ? 30 : 20} className="" />
              </motion.div>
              { status ? 
                (
                  <motion.img 
                    className="p-2 rounded-2xl bg-cover"  
                    height={200} 
                    src={files==="" ? "#" : files} 
                    loading="lazy" 
                    width={200} alt="preview" 
                    // initial={{opacity:0}}
                    // animate={{opacity:1}}
                    // transition={{
                    //   duration: 1,
                    //   delay: 1,
                    //   transition: "easeInOut",
                    //   //ease: [0, 0.71, 0.2, 1.01]
                    // }}  
                  />
                ) 
                : 
                (
                <div 
                  className="h-full w-full absolute z-50 flex justify-center items-center"
                  
                >
                  {/* <AiOutlineLoading size={isDesktopOrLaptop ? 40 : 40} className="animate-spin text-brandGreen z-50 opacity-100 bg-back rounded-full p-2" /> */}
                  <Lottie
                    initial={{ opacity:0 }}
                    animate={{ opacity:100 }}
                    transition={{
                      transition: "easeInOut",
                      //ease: [0, 0.71, 0.2, 1.01]
                    }}   
                    className='rounded-xl'
                    animationData={JSON.parse(JSON.stringify(complete))} 
                    loop={false} 
                    autoplay={true}
                    style={{width: 150, height: 150}}  
                  />
                </div> 
                ) 
              }
              
            </>
            :
            <p className="text-white/20"><CiImageOn size={isDesktopOrLaptop ? 80 : 50} /></p>
          }
        </motion.div>
      </div>
      {/* button */}
      <motion.div 
        className='flex flex-col justify-center w-2/3 items-center gap-2'
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring", 
          stiffness: 20,
          duration: 0.9,
          delay: 0.3,
          transition: "easeIn",
        }} 
      >
        <a 
          type='button'
          onClick={handleSubmitButton}
          className='flex flex-row justify-center 
                    items-center border-2 border-white
                    rounded-full w-96 md:w-96 lg:w-1/2 xl:w-1/3
                    gap-2 lg:gap-2 xl:gap-2 md:gap-2
                    m-0 p-0
                    h-28 lg:h-28 xl:h-28 md:h-28
                    transition-all hover:gap-5
                    lg:hover:gap-10 xl:hover:gap-10
                    md:hover:gap-10 text-xs xl:text-base 
                    lg:text-base md:text-base select-none'
        >
          <span>SUBMIT</span>
          <Image className='z-20' src={arrow} height={20} width={20} alt='abstract_mp'/>
          <div className="liquid"></div>
        </a>
      { error ? 
        (
          <motion.p 
            initial={{ opacity:100, y:20 }}
            animate={{ opacity:0, y:0 }}
            transition={{
              duration: 2,
              delay: 1,
              transition: "bounce",
              type: "tween",               
            }}
            className="bg-red-200/10 text-red-600 w-fit py-2 px-3 text-center rounded-full
                      mt-2"
          >
            {errorText}
          </motion.p>
        )
        : 
        null
      }
      </motion.div>
    </div>
  )
}

export default index