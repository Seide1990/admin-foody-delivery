
import React from 'react'
import Navbar from './navbar'
import Link from 'next/link'
export default function Hamburger_menu(){
 
    
return(
    <>
   
   <div className=' flex bg-white rounded-xl border-x-green-400 
 fixed w-56 h-56 mt-14   top-0 left-0'>
    <ul  className='flex flex-col gap-4  p-8 '>
    <Link href="/Home" ><li className='text-red-600  '>Home</li></Link>
    <Link href="/restaurants" > <li className='text-gray-600 '>Restaurant</li></Link>
    <Link href="/login" > <li className='text-gray-600  '>About us</li></Link>
    <Link href="/login" >  <li className='text-gray-600  '> How it works</li></Link>
    <Link href="/login" >  <li className='text-gray-600  '> FAQs</li></Link>
    </ul>
    
    </div>
    
   
    </>
    



)}