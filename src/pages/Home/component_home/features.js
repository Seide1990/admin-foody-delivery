
import Image from "next/image";
import React from 'react';
import Features_box from './features_box';
import sekil1 from "../../../styles/image/Home/Rectangle 49 (1).svg";
import sekil2 from "../../../styles/image/Home/Rectangle 49.png";
import sekil3 from "../../../styles/image/Home/Rectangle 49.svg"
export default function Features(){




    return(
        <>  
        <div className="gap-8 flex flex-col">
            <div className='flex flex-col justify-center items-center '>
       <h2 className='text-2xl font-bold'>Features</h2>
       <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
       </div>
       <div className="flex flex-col justify-center items-center gap-10 xl:justify-around xl:flex-row">
        <Features_box img={sekil1} name={"Discount Boucher"} description={"Lorem ipsum is placeholder  commonly used in the graphic "}></Features_box>
        <Features_box img={sekil2} name={"Fresh healthy Food"} description={"Lorem ipsum is placeholder  commonly used in the graphic "}></Features_box>
        <Features_box img={sekil3} name={"Fast Home Delivery"} description={"Lorem ipsum is placeholder  commonly used in the graphic "}></Features_box>
       </div>
       </div>
               </>)
}