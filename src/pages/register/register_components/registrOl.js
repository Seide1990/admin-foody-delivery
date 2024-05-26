import Link from 'next/link';
import Image from "next/image";

import React from 'react';

import FormBoxR from './formBoxR';


export default function RegistrOl(){




    return(
        <> 




<div className="m-2 flex flex-col items-center w-1/2">
<div className="flex flex-row items-center w-80 gap-10 h-32 justify-center">
<Link href="/login" className='text-gray-400 font-bold text-2xl'>Login</Link>
<Link href="/register" className=' text-red-500 font-bold text-xl'>Register</Link>
</div>

<div className="  w-1/2 "> 
<FormBoxR></FormBoxR>

</div>
</div>
               </>)
            }