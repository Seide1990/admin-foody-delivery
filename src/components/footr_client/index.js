
import React from 'react'
import Image from 'next/image'
import { useState } from "react";
import styles from "../../styles/css/client/clientheader.module.css";
import Link from 'next/link';
import Logo from '../header_client/component/logo';
import face from "../../styles/image/footr_client/facebook.png"
import tvitter from "../../styles/image/footr_client/Group (1).png"
import instagram from "../../styles/image/footr_client/Group.png"
import Footr_liler from './component/footr_liler';

export default function Footr_client(){
 



    
return(
    <>

    <div className='flex flex-col justify-center items-center gap-10 pt-10'>
    <div className=' flex flex-row gap-3 justify-center xl:justify-start'>
 <div className=' w-80 m-8  '>

<div className=" w-26 h-26 "   >
<div className='flex flex-row justify-center xl:justify-start'>
 <h1 className='text-white text-2xl   font-serif font-bold'> Foody</h1>
 <h2 className='text-yellow-500 text-3xl font-serif'>.</h2>
    
    </div>
    <h2 className='text-gray-600 flex text-center xl:text-left '>
    Lorem ipsum is placeholder text commonly used in the graphic,
    </h2>
    <div>
       
<div className=' flex flex-row gap-3 p-8 justify-center xl:justify-start'>
<div className='flex justify-center items-center rounded-full border-white border-2 w-12 h-12 '><Image className="w-8 h-8 "  src={face}></Image></div>
<div className=' flex justify-center items-center rounded-full border-white border-2 w-12 h-12 '><Image className="w-8 h-8 "  src={instagram}></Image> </div>
<div className=' flex justify-center items-center rounded-full border-white border-2 w-12 h-12 '><Image className="w-8 h-8 " src={tvitter}></Image>
</div>
</div>
<div>

</div>
</div>
    </div>
</div >
<div className='flex-row gap-8 hidden  lg:flex m-8  w-80'>  
<Footr_liler></Footr_liler>
</div>

</div>
<p className='text-white'>All rights reserved © 2003-2022 Foody TERMS OF USE | Privacy Policy</p>
</div>

</>
)}
