
import Image from "next/image";
import React from 'react';

import sekil2 from "../../../styles/image/Home/Rectangle 45.svg"

import sekil1 from "../../../styles/image/Home/Rectangle 51 (1).svg";
import Publication_box from "./publication_box";
export default function Discover(){




    return(
        <>  
       <div className="bg-slate-800 ml-20 xl:left-32 mr-20 absolute rounded-3xl  flex p-10 pl-24 pr-24 gap-10 ">
       <Image  className=" rounded-lg hidden xl:flex" width={150} height={150} src={sekil1}></Image>
        <div className="flex flex-col justify-center items-center gap-10">
<h2 className="text-2xl font-bold text-white">Discover RestaurantsNear From you</h2>
<button className="bg-orange-500 p-5 pl-10 pr-10 text-white  rounded-3xl"> Explore now</button>
        </div>
        <Image  className=" hidden xl:flex rounded-lg " width={150} height={150} src={sekil2}></Image>
       </div>
     
    
    
               </>)
}