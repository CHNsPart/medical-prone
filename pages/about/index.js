import React, { useState } from 'react'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Image from 'next/image'

export default function About() {
  const [chn, setChn] = useState(false)
  const handleChn = () => {
    setChn(!chn)
    console.log(chn)
  }
  const selected = " border-8 border-brandGreen"
  return (
    <>    
        <Head>
            <title>Medical Prone</title>
            <meta name="description" content="Medical Prone AI" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Author: Touhidul Islam Chayan,
    Medical Prone is a Artificial Intelligence or Machine Learning app for medical purpose. This app helps doctors to analyze and predict diseases from radiology or x-ray image input to an output where every possible disease from 0 to 100%"/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='flex justify-center col-span-2 items-start w-full pt-10 h-[10rem] px-40 z-50'>
            <NavBar />
        </div>
        <main className='grid lg:grid-cols-2 xl:grid-cols-[200px_minmax(900px,_1fr)_100px] justify-center h-[80vh] w-full gap-0 lg:gap-0 xl:gap-0 scrollbar-hide px-40'>
            <div className='flex flex-row lg:flex-col scale-90 md:scale-90 lg:scale-90 xl:scale-90 gap-2 md:gap-10 lg:gap-10 -z-20'>
                <div onClick={handleChn} className={`h-48 w-48 bg-brandGreen rounded-full object-cover overflow-hidden ${chn ? selected : null}`}>
                    <Image
                        src='/chn.png'
                        alt='Picture of the author'
                        width={200}
                        height={200}
                        className='object-contain'
                    />
                </div>
                <div onClick={handleChn} className={`h-48 w-48 bg-white rounded-full object-cover overflow-hidden flex justify-center items-center ${!chn ? selected : null}`}>
                    {/* <Image
                        src='/next.svg'
                        alt='Picture of the author'
                        width={200}
                        height={200}
                        className='object-contain'
                    /> */}
                    <h1 className='px-16 py-12 text-back bg-gray-200 rounded-full'>
                        R
                    </h1>
                </div>
            </div>
            <div className='p-5 lg:px-10 lg:py-5 flex flex-col'>
                
                <h1 className='text-4xl font-bold text-left text-brandGreen'>About Me</h1>
                { chn ? 
                    (
                        <>
                            <p className='text-white text-justify text-lg mt-5'>
                        I'm Touhidul Islam Chayan, a skilled software engineer specializing in front-end development, UI/UX design, and machine learning projects. I have years of experience working with international clients as well as full-time jobs, giving me a diverse range of skills and experience.
                            </p>
                            <p className='text-white text-justify text-lg mt-5'>
                        My primary focus is on front-end development, and I specialize in JavaScript, including Next.JS and Vite with Sass or Tailwind CSS. On the back-end, I use Node.JS and its frameworks, such as Express.JS and Nest.JS, to build robust and scalable applications. In addition, I'm a skilled UI/UX designer with a keen eye for creating visually appealing and user-friendly interfaces. checkout : <a href='https://chnspart.com' className='w-full text-center text-brandGreen tracking-widest' target='_blank'>
                            www.chnspart.com
                       </a>
                            </p>
                        </>
                    ) 
                    : 
                    (
                        <>
                            <p className='text-white text-justify text-lg mt-5'>
                        I am Rozin Hasan, a software developer with a focus on Android development and back-end programming. My skills include proficiency in Flutter and Java for creating visually appealing and functional mobile applications. In addition to mobile development, I have experience in back-end programming. I specialize in using Nest.js, Python Flask, and Fast API to create efficient, secure, and robust server-side applications.
                            </p>
                            <p className='text-white text-justify text-lg mt-5'>
                        I have a passion for learning and constantly strive to stay up-to-date with the latest technologies and best practices in software development. As a self-motivated team player, I enjoy working both independently and collaboratively to achieve project goals.
                            </p>
                        </>

                    )
                
                }
                
               

            </div>
        </main>
    </>
  )
}
