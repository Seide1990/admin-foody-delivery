

import React from 'react'
import Image from 'next/image'
import { useState } from "react";



import Logo from '../../../components/header_client/component/logo';
import Link from 'next/link';
import Navbar from '../../../components/header_client/component/navbar';
import Search from '../../../components/header_client/component/search';
import Hamburger_menu from '../../../components/header_client/component/hamburger_menu';

import Hamburger from 'hamburger-react'
import Language from '../../../components/header_client/component/language';
import Basget from '../../../components/basget';
import MR from '../../../components/MR';
export default function ResHeader(){
 
  


  const [IsVisible, setIsVisible] = useState(false);  //hamburgermenu

return(
    <>

<div className='  flex flex-row  items-center justify-between gap-3 lg:gap-10 px-3 lg:px-10 h-14 bg-slate-100'>
<div className=' relative flex lg:hidden' >
<Hamburger onToggle={toggled => {
  if (toggled) {
    setIsVisible(!IsVisible);
  } else {
     setIsVisible(false);
  }
}} />
</div>
{IsVisible && (
       
<Hamburger_menu/>
    )}
<Logo/>
<Navbar></Navbar>
<Search></Search>
<div className='flex flex-row gap-5'>
<Language></Language>
<Basget></Basget>
<MR></MR>
</div>
</div>

  

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