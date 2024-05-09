import React from 'react';
import Image from "next/image";

export default function Features_box({img,name,description}){




    return(
        <>  
            
        <div className=' p-4 flex  flex-col shadow-lg shadow-gray-700  justify-center items-center w-72 h-72  gap-2 border-2 border-gray-300'>
           <div className=" flex justify-center items-center m-2"  >
            <Image  className=" rounded-lg " width={150} height={150} src={img}></Image> 
             </div>
      
        <h3 className='font-bold'>{name}</h3>
        <p className='text-center'>{description}</p>
    
               
             </div>
               </>)
}