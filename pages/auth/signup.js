import React from 'react'
import Image from 'next/image'
import arrow from '../../public/rightArrow.svg'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion'
import { AiFillHome } from 'react-icons/ai'
import Link from 'next/link'

export default function signup() {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)'
  })
  const inputStyle = "w-full my-2 py-2 px-4 h-12 rounded-lg border-gray-300 focus:outline-none focus:border-2 focus:border-brandGreen"

  return (
    <div className='h-screen w-full grid grid-cols-1 mt-10 xl:m-0 lg:m-0 xl:grid-cols-2 lg:grid-cols-2 justify-center items-center'>
      <Link href={'/'} className='w-auto absolute top-[2%] right-[88%] lg:top-[5%] lg:right-[95%] text-brandGreen bg-slate-800 hover:bg-brandGreen hover:text-white z-10 p-2 rounded-full' 
      >
        <AiFillHome 
          size={20} 
          className='relative z-20'
        />
      </Link>
      {/* Form Left */}
      <div className='h-full w-full flex flex-col justify-center items-center'>
        <h1>Sign-up</h1>
        <p className='w-1/2 text-center'>Kindly provide us with your essential information so that we may better serve and remember you</p>
        <form className='my-10 w-2/3 lg:w-1/3 xl:w-1/3' action="">
          <input type="text" name="username" placeholder='username'
            className={inputStyle}
          />
          {/* <input type="email" name="email" placeholder='e-mail'
            className={inputStyle}
          /> */}
          <input type="password" name="password" placeholder='password'
            className={inputStyle}
          />
          <input type="password" name="conpassword" placeholder='repeat password'
            className={inputStyle}
          />
          <motion.div 
            className='flex flex-row justify-center items-center w-full mt-10'
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring", 
              stiffness: 20,
              duration: 0.9,
              delay: 0.2,
              transition: "easeIn",
            }} 
        >
            <a 
            type='button'
            onClick={()=>alert("Authentication is in testing, you may proceed without any account.")}
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
            <span>Sign up</span>
            <Image
             className='z-20 transition-all' 
             src={arrow} height={20} width={20}
             alt='abstract_mp'
            />
            <div className="liquid"></div>
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity:0, y:80 }}
            animate={{ opacity:100, y:15 }}
            transition={{
              type: "spring", 
              stiffness: 50,
              duration: 0.9,
              delay: 0.8,
              transition: "easeIn",
            }} 
          >
             <Link  className='mt-0 text-center hover:text-gray-500 text-gray-300 w-full text-xs' href="/auth/signin">
              Already got an account ?
             </Link>
          </motion.p>
        </form>
      </div>

      {/* Video Right */}
      <motion.div 
        className='h-full w-full flex flex-col justify-center items-center'
        // initial={{ opacity: 0, scale: 0.5, borderRadius: "500px" }}
        // animate={{ opacity: 1, scale: 1, borderRadius: 0 }}
        // transition={{
        //   duration: 0.8,
        //   delay: 0.5,
        //   transition: "easeInOut",
        //   //ease: [0, 0.71, 0.2, 1.01]
        // }}
      >
        <motion.video 
          initial={ 
            isDesktopOrLaptop ? 
            { opacity: 0, scale: 0.5, x:200, borderRadius: "500px" } 
            : 
            { opacity: 0, scale: 0.5, y:200, borderRadius: "500px" }
          }
          animate={
            isDesktopOrLaptop ? 
            { 
              opacity: 1, 
              scale: 1, 
              x:0, 
              borderTopLeftRadius: "50px", 
              borderBottomLeftRadius: "50px",
              borderTopRightRadius: "0px",
              borderBottomRightRadius: "0px",
            }
            :
            {
              opacity: 1, 
              scale: 1, 
              y:0, 
              borderTopLeftRadius: "50px", 
              borderBottomLeftRadius: "0px",
              borderTopRightRadius: "50px",
              borderBottomRightRadius: "0px",
            }
          }
          transition={{
            duration: 1,
            delay: 0.3,
            transition: "easeInOut",
            //ease: [0, 0.71, 0.2, 1.01]
          }}
          src="https://medical-prone.vercel.app/abstract3d.mp4"
          controls={false}
          muted={true}
          autoPlay={true}
          loop={true}
          className='h-full w-full object-cover rounded rounded-tl-3xl rounded-bl-3xl'
        />
      </motion.div>
    </div>
  )
}