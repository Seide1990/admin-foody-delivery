

import React from 'react'
import Image from 'next/image'
import { useState } from "react";
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import ResBoxItems from './resBoxItms';




export default function ResBox(){
    const router = useRouter()

    const handleClick = (e,a) => {
        e.preventDefault()
       
        router.push('/restaurants/restBlog/a')
      }
  


return(
    <>
<div className='bg-gray-100  flex flex-row gap-5 flex-wrap justify-center  items-center  xl:justify-start mb-10'>
  
 <div onClick={handleClick}> <ResBoxItems></ResBoxItems></div>  
    <ResBoxItems></ResBoxItems>
    <ResBoxItems></ResBoxItems>
    <ResBoxItems></ResBoxItems>
    <ResBoxItems></ResBoxItems>
  

</div>




    </>
)
}
       