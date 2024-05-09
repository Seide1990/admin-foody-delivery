import React from 'react';
import Image from "next/image";
import sekil2 from "../../../styles/image/Home/Rectangle 47.png"
export default function SmYummyBox({img,name,description}){




    return(
        <>  
            
        <div className='  flex  flex-row w-40 h-12  gap-4 '>
           <div className=" flex justify-center items-center m-2"  >
             <Image  className=" rounded-lg " width={40} height={40} src={img}></Image>
             </div>
       <div className='flex flex-col'>
        <h3>{name}</h3>
        <p>{description}</p>
       </div>
               
             </div>
               </>)
}