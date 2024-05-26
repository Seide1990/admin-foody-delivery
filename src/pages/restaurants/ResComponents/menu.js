

import React from 'react'
import Image from 'next/image'
import { useState } from "react";

import Link from 'next/link';
import img from '../../../styles/image/restaurant/Rectangle 146.png'
import filter_img from '../../../styles/image/restaurant/filter_list.png'



export default function Menu(){
    const [IsVisiblefilter, setIsVisiblefilter] = useState(false);  //hamburgermenu
    const togglefilter=(i)=>{
      setIsVisiblefilter(!IsVisiblefilter);
    } 
  


return(
    <>
    <div className=' flex xl:hidden justify-center items-center '>
<button  onClick={togglefilter} className='bg-gray-200 justify-center items-center  flex  w-60 h-10 drop-shadow-lg  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 '> 
<Image src={filter_img} width={30} height={30}></Image>
Filters</button>

</div>
{IsVisiblefilter && (
         <div className=' flex bg-white rounded-xl border-x-green-400 xl:hidden
          w-60 h-56 mt-32 right-24  top-0  absolute z-10'>
       <ul className='flex flex-col gap-4  p-8 '>
<li className='border-b-4'>Profile </li>
<li className='border-b-4'>Your Basket</li>
<li>Your Orders </li>
<li>Checkout</li>
<li>Logout </li>
       </ul> 
  
   </div>
     )}


<div className='bg-gray-200 w-1/5 p-5 xl:flex hidden '>
    <ul className='flex flex-col gap-5'>
<li className='flex flex-row gap-3 hover:text-red-400 '> <Image  width={20} height={20} src={img}></Image>
<p> name1</p>
</li>
<li className='flex flex-row gap-3  hover:text-red-400  '> <Image  width={20} height={20} src={img}></Image>
<p> name2</p>
</li>
<li className='flex flex-row gap-3  hover:text-red-400  '> <Image  width={20} height={20} src={img}></Image>
<p> name3</p>
</li>
<li className='flex flex-row gap-3  hover:text-red-400  '> <Image  width={20} height={20} src={img}></Image>
<p> name4</p>
</li>



</ul>
</div>




    </>
)
}
       