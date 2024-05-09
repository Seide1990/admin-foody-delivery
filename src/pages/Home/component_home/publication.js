
import Image from "next/image";
import React from 'react';

import sekil1 from "../../../styles/image/Home/Group 309 (1).svg";
import sekil3 from "../../../styles/image/Home/Group 309 (2).svg";
import sekil2 from "../../../styles/image/Home/Group 310.svg";
import Publication_box from "./publication_box";
export default function Publication(){




    return(
        <>  
       
     
       <div className=" p-10 gap-10 flex flex-col justify-center items-center">
       <div className='flex flex-col-reverse gap-40 xl:flex-row'>
        <Publication_box img={sekil1} name={"Menu That AlwaysMake You Fall In Love"} description={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. "}></Publication_box>
        </div>
        <div className='flex flex-col-reverse gap-20 xl:flex-row-reverse'>
            <Publication_box img={sekil2}  name={"Yummy Always Papa John’s Pizza.Agree?"} description={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. "}></Publication_box>
            </div>
            <div className='flex flex-col-reverse gap-20 xl:flex-row'>
        <Publication_box img={sekil3}  name={"Do You Like French Fries?"} description={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. "}></Publication_box>
        </div>
       </div>
               </>)
}