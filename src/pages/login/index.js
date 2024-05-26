
import React from 'react';
import Language from "../../components/header_client/component/language"
import LoginImg from './login_components/loginImg';
import Link from 'next/link';
import LoginOl from './login_components/loginOl';
import sekil1 from "../../styles/image/login/Rectangle 79.png";
export default function Login(){




    return(
        <> 

        <div className="h-16 p-4 flex justify-between bg-red-500  ">
 <h1 className='text-white text-2xl   font-serif font-bold'> Foody .</h1>

<Language ></Language>

       </div>    
       <div className="flex  flex-col lg:flex-row  bg-white "> 
       <LoginImg sekil1={sekil1}></LoginImg>
      <LoginOl></LoginOl>
            </div> 
               </>)
}