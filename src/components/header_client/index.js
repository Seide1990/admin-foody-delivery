

import React from 'react'
import Image from 'next/image'
import { useState } from "react";
import styles from "../../styles/css/client/clientheader.module.css";


import Logo from './component/logo';
import Link from 'next/link';
import Navbar from './component/navbar';
import Search from './component/search';
import Hamburger_menu from './component/hamburger_menu';
import Sign from './component/sign';
import Hamburger from 'hamburger-react'
import Language from './component/language';
export default function Header_client(){
 
  


  const [IsVisible, setIsVisible] = useState(false);  //hamburgermenu
  const toggleAdd=(i)=>{
    setIsVisible(!IsVisible);
  } 
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
<Language></Language>
<Sign></Sign>
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