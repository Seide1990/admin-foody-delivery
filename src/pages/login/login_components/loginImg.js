import Image from "next/image";

import React from 'react';




export default function LoginImg({sekil1}){




    return(
        <> 


               <div className="bg-red-500 lg:w-1/2   mt-5">
        <Image   width={500} height={128} src={sekil1}></Image> 
        </div>
 
             
               </>)
}