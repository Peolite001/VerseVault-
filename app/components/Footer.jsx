import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




const Footer = () => {
  return (
    <main className='border-t border-gray-500 lg:py-4 px-3 lg:px-8 flex max-lg:flex-col max-lg:justify-center max-lg:gap-4
     justify-between items-center'>
       <Link href={"/"} className='flex items-center gap-1 z-40'>
      
      <Image
      src={"/logo.png"}
      alt="logo"
      width={"800"}
      height={"800"}
      className="w-10 h-10"/>

      <p className="text-lg text-gray-800 max-md:hidden">VerseVault</p>
      </Link>

      <div className="text-sm md:space-x-5 max-md:flex max-md:flex-col max-md:items-center max-md:gap-2">
        <Link href={"/"}>Our Blog</Link>
        <Link href={"/"}>Chat with us</Link>
        <Link href={"/contact"}>Contact Us</Link>
        <Link href={"/about"}>About us</Link>
      </div>
      <div className="flex items-center gap-5 text-xl">
        <FaFacebook />
        <FaInstagram />
        <FaYoutube />
        <FaXTwitter />
      </div>
    </main>
  )
}

export default Footer
