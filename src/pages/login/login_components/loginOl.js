import Link from 'next/link';
import Image from "next/image";

import React from 'react';

import FormBox from './formBox';


export default function LoginOl(){




    return(
        <> 




<div className=" xl:m-5 flex flex-col  items-center w-1/2">
<div className="flex flex-row items-center  gap-10 xl:h-40  h-32 justify-center ">
<Link href="/login" className='text-red-500 font-bold text-2xl'>Login</Link>
<Link href="/register" className=' text-gray-400 font-bold text-xl'>Register</Link>
</div>

<div className="  w-1/2"> 
<FormBox></FormBox>

</div>
</div>
               </>)
            }