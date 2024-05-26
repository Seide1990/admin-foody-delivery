

import React from 'react'
import Image from 'next/image'
import { useState } from "react";

import Link from 'next/link';
import ResProducts from '../../ResComponents/resProducts';
import { useRouter } from 'next/router'
import ResHeader from '../../ResComponents/ResHeader';
import img from '../../../../styles/image/restaurant/Rectangle 49 (2).svg'
import Basget from '../../../../components/basget';

 
export default function ResPage() {
  const router = useRouter()
  return (
  <> 
  <ResHeader></ResHeader>
  <div className='ml-10 mr-10'>
<Image width={1380} height={437} src={img}></Image>
<div className='flex flex-row justify-between bg-white text-gray-600  border-b-4 border-gray-300 pb-3'>
  <div >
<h2 className='text-2xl mb-2 font-bold'>Papa John’s Pizza Restaurant</h2>
<p>19 Nizami street, Sabail, Baku</p>
</div>
<div className='flex flex-row justify-between gap-10'>
<div>
<h3 className='text-xl mb-2'>Cuisine</h3>
<p>pizza, drink, hotdog, sendvich, roll</p>
</div>
<button className='border-2 border-red-500 p-3 text-red-500 rounded-md'> 5$ Delivery</button>
<button className='border-2 rounded-md text-white bg-red-500 p-5 border-red-500'>Go back</button>
</div>

</div>
<div className='flex flex-row gap-10'>
<ResProducts></ResProducts>
<div className='h-24 bg-red-200 '>basget olacaq</div>
</div>
  </div>
  
  </>
  
  )

}







       