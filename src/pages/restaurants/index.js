

import React from 'react'
import Image from 'next/image'
import { useState } from "react";

import Link from 'next/link';
import ResHeader from './ResComponents/ResHeader';
import Menu from './ResComponents/menu';

import Footr_client from '../../components/footr_client';

import ResBox from './ResComponents/resBox';
export default function Restaurants(){
 
  


return(
    <>



<ResHeader></ResHeader>
<div className='mt-5  flex flex-col xl:flex-row gap-10 pb-10 '>

<Menu></Menu>
<ResBox></ResBox>

</div>

<Footr_client/> 
    </>
)
}
        /* <select  onChange={handleLocaleChange(this)}>
      {array.map(locale => (
        <option key={locale} value={locale}>
          {locale}
        </option>
      ))}
    </select> */