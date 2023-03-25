import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import upload from "../../public/upload.json"
import complete from "../../public/complete.json"
import arrow from "../../public/rightArrow.svg"
import Head from "next/head";
// import dynamic from 'next/dynamic'
import { CiImageOn } from "react-icons/ci"
import NavBar from "../components/NavBar";
import { RxCross2 } from "react-icons/rx"
import { AiOutlineLoading } from "react-icons/ai"
import { useMediaQuery } from 'react-responsive'
import axios from "axios";
import FormData from 'form-data'
// const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
//   ssr: false
// });

const dummy = {
  "Atelectasis": 0.3185494840145111,
  "Cardiomegaly": 0.08868326246738434,
  "Consolidation": 0.2665356695652008,
  "Edema": 0.5353983640670776,
  "Effusion": 0.11917716264724731,
  "Emphysema": 0.5018904209136963,
  "Enlarged Cardiomediastinum": 0.07020698487758636,
  "Fibrosis": 0.014410634525120258,
  "Fracture": 0.36686909198760986,
  "Hernia": 0.0063102091662585735,
  "Infiltration": 0.2333463579416275,
  "Lung Lesion": 0.025401389226317406,
  "Lung Opacity": 0.6239341497421265,
  "Mass": 0.046956442296504974,
  "Nodule": 0.07323925197124481,
  "Pleural_Thickening": 0.008107014000415802,
  "Pneumonia": 0.5568587779998779,
  "Pneumothorax": 0.024134185165166855
}


export default function index() {
  const fileInputField = useRef(null);
  // const [formData, setFormData] = useState(new FormData());
  const [files, setFiles] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [status, setStatus] = useState(false);
  const [result, setResult] = useState(null);
  const [dataProcessed, setDataProcessed] = useState(false);
  const [error, setError] = useState(false);
  const [processing, setProcessing] = useState(false);
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
    const thumbnail = URL.createObjectURL(fileInputField.current.files[0]);
    const file = fileInputField.current.files[0];
    setFiles(file)
    setThumbnail(thumbnail)
    // setFormData({'file': URL.createObjectURL(file)},{'process_type': 'Single'})

    // if(file){
    //   const reader = new FileReader();
    //   //reader.readAsDataURL(file);
    //   reader.onload = () => {
    //     setFiles(reader.result)
    //   };
    // }
  }

  const sortResult = (obj) => {
    const sortable = Object.entries(obj).sort(([,a],[,b]) => b-a);
    return sortable;
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
    if(!dataProcessed){
      setProcessing(true)
      const data = new FormData();
      data.append("file", files);
      data.append("process_type", "Single");
      try {
        setError(false)
        setResult(null)
        setErrorText("")
        axios.post('https://footfall.pagekite.me/api/upload', data,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            }
          }
        )
        .then(function(res){
          setProcessing(false)
          setResult(res)
          if(res!==null){
            setDataProcessed(true)
          }
          console.log(res)
          console.log(res.data.data)
        })
        .catch(function(error){
          setError(true)
          setErrorText("")
          setErrorText(error.message)
          setProcessing(false)
          console.log(error.message)
        })
      } catch (error) {
        // setError(true)
        setProcessing(false)
        console.log(error)
      }
      // setDataProcessed(true)
    } else {
      setFiles("")
      setError(false)
      setErrorText("")
      setStatus(false)
      alert("see")
    }
  }

  return (
    <div 
      className="h-screen w-full flex flex-col justify-center items-center"
    >
      <div className='flex justify-center top-10 absolute w-full h-fit px-40 pb-40 z-50'>
        <NavBar />
      </div>
      { dataProcessed ? 
        (
          <motion.div
            initial={{ opacity:0, y:100 }}
            animate={{ opacity:100, y:0 }}
            transition={{
              duration: 1,
              delay: 0.6,
              transition: "easeInOut",
              //ease: [0, 0.71, 0.2, 1.01]
            }}
            className="grid bg-[#2A2A2A] rounded-xl p-5 
                       grid-cols-4 grid-flow-row grid-rows-2 
                       justify-center items-center max-h-96 
                       w-2/3"
          >




            {/* Left Pred */}
            {/* Top Match */}
            <motion.div 
              className="justify-self-center col-span-1 bg-back/30 
                        p-5 rounded-xl"
              initial={{ opacity:0, x:-100 }}
              animate={{ opacity:100, x:0 }}
              transition={{
                duration: 1,
                delay: 0.6,
                transition: "easeInOut",
                //ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <p className="rounded-xl 
                            justify-self-center row-span-1 flex flex-col
                            justify-center items-center gap-2"
              >
                <span className="text-brandGreen text-xs">
                  Top Match
                </span>
                {((sortResult(result.data.data)[0][1])*100).toFixed(2)} %
                <span className="text-brandGreen bg-back
                                 text-xs rounded-full font-bold p-2"
                >
                  {sortResult(result.data.data)[0][0]}
                </span>
              </p>
            </motion.div>
           
            {/* Second Match */}
            <motion.div 
              className="justify-self-center col-span-1 bg-back/20 
                        p-5 rounded-xl"
              initial={{ opacity:0, x:-100 }}
              animate={{ opacity:100, x:0 }}
              transition={{
                duration: 1,
                delay: 0.6,
                transition: "easeInOut",
                //ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <p className="rounded-xl 
                        justify-self-center flex flex-col
                            justify-center items-center gap-2"
              >
                <span className="text-brandGreen text-xs">
                  Second Match
                </span>
                {((sortResult(result.data.data)[1][1])*100).toFixed(2)} %
                <span className="text-brandGreen bg-back
                                 text-xs rounded-full font-bold p-2"
                >
                  {sortResult(result.data.data)[1][0]}
                </span>
              </p>
            </motion.div>
            {/* Least Match */}
            <motion.div 
              className="justify-self-center col-span-1 row-span-1"
              initial={{ opacity:0, x:-100 }}
              animate={{ opacity:100, x:0 }}
              transition={{
                duration: 1,
                delay: 0.6,
                transition: "easeInOut",
                //ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <p className="rounded-xl 
                        justify-self-center flex flex-col
                            justify-center items-center gap-2"
              >
                <span className="text-brandGreen text-xs">
                  Least Match
                </span>
                {((sortResult(result.data.data)[17][1])*100).toFixed(2)} %
                <span className="text-white bg-red-500
                                 text-xs rounded-full font-bold p-2"
                >
                  {sortResult(result.data.data)[17][0]}
                </span>
              </p>
            </motion.div>





            {/* Right Pred */}
            <motion.div 
              className="w-40 h-40 bg-[#1A1A1A] col-span-1 
                         row-span-1 rounded-xl justify-self-center 
                         flex justify-center items-center"
              initial={{ opacity:0, x:100 }}
              animate={{ opacity:100, x:0 }}
              transition={{
                duration: 1,
                delay: 0.6,
                transition: "easeInOut",
                //ease: [0, 0.71, 0.2, 1.01]
              }} 
            >
              <img 
                className="p-2 rounded-2xl bg-cover"  
                height={200} 
                src={thumbnail==="" ? result.data.file_url : thumbnail} 
                loading="lazy" 
                width={200} alt="result image"
              />
            </motion.div>

            {/* Chart */}
             <motion.div 
              className="justify-self-center col-span-4 row-span-1"
              initial={{ opacity:0, x:-100 }}
              animate={{ opacity:100, x:0 }}
              transition={{
                duration: 1,
                delay: 0.6,
                transition: "easeInOut",
                //ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <p className="rounded-xl 
                        justify-self-center flex justify-center 
                        items-center"
              >
                
              </p>
            </motion.div>

          </motion.div>
        ) 
        : 
        (
          <>
          <Head>
            <title>Medical Prone</title>
            <meta name="description" content="Medical Prone AI" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Author: Touhidul Islam Chayan,
    Medical Prone is a Artificial Intelligence or Machine Learning app for medical purpose. This app helps doctors to analyze and predict diseases from radiology or x-ray image input to an output where every possible disease from 0 to 100%"/>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <motion.div 
            initial={{ opacity:100, y:0 }}
            animate={{ opacity:100, y:0 }}
            exit={{ opacity:0, y:-100 }}
            // { dataProcessed ? exit={{ opacity:100, y:-100 }} : null }
            transition={{
              duration: 1,
              delay: 0.4,
              transition: "easeInOut",
              //ease: [0, 0.71, 0.2, 1.01]
            }}
            className="h-fit w-full flex flex-col justify-center items-center gap-5 p-5 relative">
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
                    <input type="file" accept="image/*" onChange={handleUpload} ref={fileInputField} required className="opacity-0 z-40 w-full h-full" />
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
                            src={thumbnail==="" ? "#" : thumbnail} 
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
                type='submit'
                href="#"
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
                <span>
                  { !processing ?
                    <div className="flex flex-row gap-5 tracking-widest">
                      SUBMIT<Image className='z-20' src={arrow} height={20} width={20} alt='abstract_mp'/>
                    </div>
                    :
                    <>
                      <AiOutlineLoading 
                        size={isDesktopOrLaptop ? 40 : 40} 
                        className="animate-spin text-brandGreen z-50 
                                  opacity-100 bg-back rounded-full p-2" 
                      />
                    </> 
                  }
                </span>
                <div className="liquid"></div>
              </a>
            { error ? 
              (
                <motion.p 
                  initial={{ opacity:100, y:20, }}
                  animate={{ opacity:0, y:0 }}
                  transition={{
                    duration: 2,
                    delay: 1,
                    transition: "bounce",
                    type: "tween",               
                  }}
                  className={error ? `bg-red-200/10 text-red-600 w-fit py-2 px-3 text-center rounded-full mt-2` : `hidden`}
                >
                  {errorText}
                </motion.p>
              )
              : 
              null
            }
            </motion.div>
          </motion.div>
          </>
        ) 
      }
    </div>
  )
}