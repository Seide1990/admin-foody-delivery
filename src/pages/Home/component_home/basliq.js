import React from 'react';
import Image from "next/image";
import sekil1 from "../../../styles/image/Home/Rectangle 45.svg"
import SmYummyBox from './sm_yummy_box';
import sekil2 from "../../../styles/image/Home/Rectangle 47.png"
export default function Basliq(){




    return(
        <>  
            
        <div className='flex  flex-col justify-center items-center gap-8  p-20  bg-slate-100 border-t-2 border-gray-300 lg:flex-row-reverse '>
           <div>  
             <Image  className="lg:bg-black rounded-3xl justify-end" width={457} height={359} src={sekil1}></Image>
             </div>
        
             <div className='absolute right-10 top-40 shadow-lg shadow-gray-700  bg-white  rounded-3xl '>
             <SmYummyBox img={sekil2} name={"pizza"} description={"yummy"}></SmYummyBox>
             </div>
             <div className='absolute right-8 top-96 shadow-lg shadow-gray-700  bg-white  rounded-full lg:flex hidden'>
             <SmYummyBox img={sekil2} name={"french free"} description={"yummy"}></SmYummyBox>
             </div>
             <div className='absolute right-96 top-80 shadow-lg shadow-gray-700  bg-white  rounded-full lg:flex hidden'>
             <SmYummyBox img={sekil2} name={"pizza"} description={"yummy"}></SmYummyBox>
             </div>

       <div className='flex flex-col gap-5 justify-start'>
        <h2 className='text-3xl font-bold'>Our Food site makes it easy to find local food</h2>
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          <div className='flex flex-row gap-9'>
          <button className='w-28 h-12 bg-red-900 rounded-2xl' > Rgister</button>
              <button className='w-28 h-12 rounded-2xl border-2 border-gray-600 '> Order now</button></div>
         </div>  
   
               
             </div>
               </>)
}