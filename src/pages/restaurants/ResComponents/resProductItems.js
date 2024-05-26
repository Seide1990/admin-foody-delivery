

import React from 'react'
import Image from 'next/image'
import { useState } from "react";
import { useRouter } from 'next/navigation'
import Link from 'next/link';

import image from '../../../styles/image/restaurant/Rectangle 146.png'




export default function ResProductsItems(){
 
    const [IsVisibleAdd, setIsVisibleAdd] = useState(false);  //hamburgermenu
    const ToggleAdd=(i)=>{
        //bura basilan kimi basget ucun olan apiye gedecek
      setIsVisibleAdd(!IsVisibleAdd);
    } 
  


return(
    <>

<div className='flex flex-row h-20 justify-between p-5 border-b-2 border-gray-300 '>
  <div className='flex flex-row gap-10'>
<Image src={image} width={50} height={50}></Image>

<div >
<h2 className='text-xl  font-bold'>Papa John’s Pizza Restaurant</h2>
<p>Prepared with a patty, a slice of cheese and special sauce</p>
</div></div>  
<div className='flex flex-row gap-10'>
 <h2 className='p-3'>From $7.90</h2>
 <button  onClick={ToggleAdd} className='text-white fon w-10 text-2xl text-center  bg-gray-300 h-10 rounded-full  '>
 {IsVisibleAdd && (
    <h3 className=' bg-green-300 h-10 rounded-full'>+</h3>)}
   
 </button>
 
 
 
 </div>
</div>







    </>
)
}
       