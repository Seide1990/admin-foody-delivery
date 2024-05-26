
import React from 'react';
import LoginImg from '../login/login_components/loginImg';
import RegistrOl from './register_components/registrOl';
import Language from '../../components/header_client/component/language';

import Link from 'next/link';

import sekil1 from "../../styles/image/login/register.png";
export default function Register(){




    return(
        <> 

        <div className="h-16 p-4 flex justify-between bg-red-500  ">
 <h1 className='text-white text-2xl   font-serif font-bold'> Foody .</h1>

<Language ></Language>

       </div>    
       <div className="flex flex-col lg:flex-row   bg-white"> 
      
       <LoginImg sekil1={sekil1}></LoginImg>
      <RegistrOl></RegistrOl>
            </div> 
               </>)
}