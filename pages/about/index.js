import React from 'react'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Image from 'next/image'

export default function About() {
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
        <main className='grid lg:grid-cols-2 xl:grid-cols-[200px_minmax(900px,_1fr)_100px] justify-center h-[80vh] w-full gap-0 scrollbar-hide px-40'>
            <div className='flex flex-rowl gap-10'>
                <div className='h-48 w-48 bg-brandGreen rounded-full object-cover overflow-hidden'>
                    <Image
                        src='/next.svg'
                        alt='Picture of the author'
                        width={200}
                        height={200}
                        className='object-contain'
                    />
                </div>
                <div className='h-48 w-48 bg-brandGreen rounded-full object-cover overflow-hidden'>
                    <Image
                        src='/next.svg'
                        alt='Picture of the author'
                        width={200}
                        height={200}
                        className='object-contain'
                    />
                </div>
            </div>
            <div className='border-2'>sc</div>
        </main>
    </>
  )
}
