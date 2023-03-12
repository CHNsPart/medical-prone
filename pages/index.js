import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from './components/NavBar'
//import bg from "../public/abstract3d.mp4"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Medical Prone</title>
        <meta name="description" content="Medical Prone AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='h-screen grid grid-cols-1'>
        <video
          className="w-full h-full object-cover bg-no-repeat bg-center bg-cover max-h-[60vh] absolute -z-20 m-0 p-0"
          src="https://chnspart.com/JFTL/abstract3d.mp4"
          controls={false}
          muted={true}
          autoPlay={true}
          loop={true}
        />
        <div className='flex justify-center items-start w-full pt-10'>
          <NavBar />
        </div>
        <div className='grid grid-cols-1'>
          
        </div>
        <div className='grid grid-cols-2'>
          <div className='flex flex-col justify-start items-center w-full h-full text-left'>
            <h1>
              Get accurate chest disease
              predictions with our 
              AI-powered app
            </h1>
          </div>
          <h1>
            oka
          </h1>
        </div>
      </main>
    </>
  )
}
