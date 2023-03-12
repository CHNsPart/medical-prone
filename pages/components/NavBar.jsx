import React from 'react'
import logo from "../../public/logo.svg"
import Image from 'next/image'

const NavBar = () => {
  return (
    <div className='bg-clip-padding backdrop-filter backdrop-blur-xl backdrop-brightness-50 bg-opacity-30 fixed flex justify-between items-center h-[80px] w-1/2 rounded-full px-10'>
        <Image src={logo} height={80} width={80}/>
        <div className='flex justify-center items-center gap-10'>
            <p>HOME</p>
            <p>ABOUT US</p>
            <button className='bg-gradient-to-t from-brandGreen to-darkBrandGreen py-2 px-4 z-10 rounded-full'>SIGN IN</button>
        </div>
    </div>
  )
}

export default NavBar