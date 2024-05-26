

import React from 'react'
import Image from 'next/image'
import { useState } from "react";

import Link from 'next/link';
import img from '../../../styles/image/restaurant/Rectangle 49 (1).png'



export default function ResBoxItems(){
 
  


return(
    <>

    <div   className='bg-white p-5 w-52 flex flex-col items-center xl:items-start gap-1 rounded-sm drop-shadow-lg  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200'>
<Image src={img} width={144} height={131}></Image>
<h2 className='text-lg text-slate-800'> Burger King</h2>
<p className='text-sm text-center xl:text-left'>chinese, sea-food, thai, lebanese, caribbean</p>
<div className='flex flex-col xl:flex-row  gap-10 text-sm'>
    <h2> 5$ Delivery</h2>
    <button className='xl:w-14 h-8  bg-red-700 hover:bg-red-900 rounded-xl'>
    <Link href="/restaurants/restBlog/sss" className='text-white font-bold '>30 min</Link>
         </button>

</div>
   

</div>




    </>
)
}
       