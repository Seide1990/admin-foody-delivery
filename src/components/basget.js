
import React from 'react'
import Image from 'next/image'
import { useState } from "react";


import Link from 'next/link';
import img from '../styles/image/restaurant/Group 347.svg'

export default function Basget(){
 
    const [IsVisibleBasget, setIsVisibleBasget] = useState(false);  //hamburgermenu
    const toggleBasget=(i)=>{
      setIsVisibleBasget(!IsVisibleBasget);
    } 

    
return(
    <>
   
   <button onClick={toggleBasget}> <Image width={50} height={50} src={img}></Image> </button>
    {IsVisibleBasget && (
         <div className=' flex bg-white rounded-xl border-x-green-400 
          w-56 h-56 mt-14   top-0 right-20 absolute z-10'>
       <ul className='flex flex-col gap-4  p-8 '>
<li>salam </li>
<li>sagol</li>
<li>klkjklj </li>
       </ul> 
  
   </div>
    )}
    </>
)
}
