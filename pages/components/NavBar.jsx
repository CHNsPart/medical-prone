import React from 'react'
import logo from "../../public/logo.svg"
import Image from 'next/image'

const NavBar = () => {
  return (
    <div className='bg-clip-padding backdrop-filter backdrop-blur-xl backdrop-brightness-50 bg-opacity-30 gap-10 xl:gap-0 lg:gap-0 md:gap-0 fixed flex justify-between items-center h-[80px] w-w-full xl:w-1/2 lg:w-1/2 md:w-3/4 rounded-full px-2 xl:px-10 lg:px-10 md:px-10'>
        <Image className='w-base pl-5 xl:p-0 lg:p-0 md:p-0' src={logo} height={80} width={80} alt='logo'/>
        <div 
          className='flex justify-center items-center gap-5
                    xl:gap-10 lg:gap-10 md:gap-10'
        >
            <p>HOME</p>
            <p>ABOUT US</p>
            <button className='bg-gradient-to-t from-brandGreen to-darkBrandGreen py-2 px-4 rounded-full mr-2 lg:m-0 xl:m-0 md:m-0 z-50'>SIGN IN</button>
        </div>
    </div>
  )
}

export default NavBar