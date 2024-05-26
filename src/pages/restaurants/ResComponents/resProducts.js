

import React from 'react'
import Image from 'next/image'
import { useState } from "react";
import { useRouter } from 'next/navigation'
import ResProductsItems from './resProductItems';
import Link from 'next/link';

import image from '../../../styles/image/restaurant/Rectangle 146.png'




export default function ResProducts(){

  


return(
    <>
<div className='text-gray-600 bg-gray-200 mt-8'>
<div className='h-20 border-b-2 border-gray-300 text-center pt-6 font-bold text-2xl'>Products</div>
<ResProductsItems></ResProductsItems>
<ResProductsItems></ResProductsItems>


</div>




    </>
)
}
       