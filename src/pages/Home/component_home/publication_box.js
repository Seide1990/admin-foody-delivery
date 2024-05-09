import React from 'react';
import Image from "next/image";

export default function Publication_box({img,name,description}){




    return(
        <>  
            
   
          <div>
           {/* <Image  width={200} height={200} src={img}></Image>  */}
       
            <Image  className=" rotate-0 rounded-lg left-4 top-0" width={450} height={450} src={img}></Image> 
             </div>
      <div className='flex flex-col h-60 w-96 justify-start items-center pt-20 ' >
        <h3 className=' text-xl pb-10 font-bold'>{name}</h3>
        <p className='text-center'>{description}</p>
        </div>
               
             
               </>)
}