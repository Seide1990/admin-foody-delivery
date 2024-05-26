import React from 'react'
import Image from 'next/image'
import { useState } from "react";


import Link from 'next/link';
import img from '../styles/image/restaurant/Group 303.svg'

export default function MR(){
 

    const [IsVisibleMR, setIsVisibleMR] = useState(false);  //hamburgermenu
    const toggleMR=(i)=>{
      setIsVisibleMR(!IsVisibleMR);
    } 


    
return(
    <>
   
   <button onClick={toggleMR}> <Image width={50} height={50} src={img}></Image> </button>
    {IsVisibleMR && (
         <div className=' flex bg-white rounded-xl border-x-green-400 
         fixed w-56 h-56 mt-14   top-0 right-0 z-10'>
       <ul className='flex flex-col gap-4  p-8 '>
       <li className='border-b-4'>Profile </li>
<li className='border-b-4'>Your Basket</li>
<li>Your Orders </li>
<li>Checkout</li>
<li>Logout </li>
       
       </ul> 
  
   </div>
    )}
    </>
)
}