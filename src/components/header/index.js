
import React from 'react'
import Image from 'next/image'
import { useState } from "react";
import styles from "./header.module.css";
import img from "@/styles/image/header/admin.png"
import Link from 'next/link';
import dashboard from "@/styles/image/header/dashboard1.png"
import products from "@/styles/image/header/storefront.png"
import restaurant from "@/styles/image/header/assignment.png"
import category from "@/styles/image/header/calendar.png"
import orders from "@/styles/image/header/local_offer.png"
import offer from "@/styles/image/header/storefront.png"
import logout from "@/styles/image/header/logout.png"
import logoEcamp from "@/styles/image/header/image 2.png"

import Add from '../add/add.js'; 

export default function Header(){
  const [isVisible, setIsVisible] = useState(false);  //tooglemenu
    const [selectedValue, setSelectedValue] = useState(null);
    
    const array=[
        "az",
        "en",
        "rus"
    ]
    const [editProduct, setEditProduct] = useState({
      name: "",
      description:"",
      img_url: "",
      rest_id: "",
      price: "",
    });
    const array_add={
      title:"Edit product",
      uploade:"Upload your product image",
      information:"Edit your Product description and necessary information",
      input:[
        {comp:"input",
          id:"name",
        type:"text",
      val:editProduct.name},
        {comp:"textarea",
          id:"description",
        type:"textarea",
      val:editProduct.description},
      {comp:"imput",
      id:"img",
    type:"text",
  val:editProduct.img_url},
        {
          comp:"input",
          id:"price",
        type:"number",
      val:editProduct.price},
        {comp:"input",
        id:"restaurants",
      type:"text",
    val:editProduct.rest_id}]
     
      }

 
      const handleChange = (event) => {
        const value = event.target.value
        setSelectedValue(value);
     console.log(value)
      }
      const toggleMenu = () => {
        setIsVisible(!isVisible);
        };




    
return(
    <>
   
    <div className={styles.Header_main}>
    <div className={styles.ad_header}>
      <h1>Foody</h1>
      <p>.</p>
      </div>
   
        <div className={styles.opt_header}>
        <button className={styles.opt_header_button} onClick={toggleMenu} >
+ ADD PRODUCT
        </button>
        {isVisible && (
      <Add setIsVisible={setIsVisible} data={array_add} secim={"add"}  setEditProduct={setEditProduct}></Add>
 //
    )}
     
    <select onChange={handleChange} >
  <option value="option1" >

  </option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
<Image src={img} width={58.54} height={40}alt="" />
       < div className={styles.admin_img}>Admin</div>
    </div>
    </div>
    <div className={styles.nav}>
    <div className={styles.admin_dashboard}>
    <ul>
      <li>
       <Image  className={ styles.dashboard_image}src={dashboard}></Image>
        <Link href="admin/" className={styles.dashboard_link}>Dashboard</Link>
      </li>
      <li>
      <Image  className={ styles.dashboard_image}src={products}></Image>
        <Link href="/admin/products"className={styles.dashboard_link}>Products</Link>
      </li>
      <li>
      <Image  className={ styles.dashboard_image}src={restaurant}></Image>
        <Link href="/admin/restaurant"className={styles.dashboard_link}>Restaurant</Link>
      </li>
      <li>
      <Image  className={ styles.dashboard_image}src={category}></Image>
        <Link href="/admin/category"className={styles.dashboard_link}>Category</Link>
      </li>
      <li>
      <Image  className={ styles.dashboard_image}src={orders}></Image>
        <Link href="/admin/order"className={styles.dashboard_link}>Orders</Link>
      </li>
      <li>
      <Image  className={ styles.dashboard_image}src={offer}></Image>
        <Link href="/admin"className={styles.dashboard_link}>Offer</Link>
      </li>
      <li>
      <Image  className={ styles.dashboard_image} src={logout}></Image>
        <Link href="/admin"className={styles.dashboard_link}>Logout</Link>
      </li>
    </ul>

    </div>
    
    <div className={styles.footr}    >
<div >

<Image src={logoEcamp} width={25} height={25} alt="" />

<h3>EACAMP</h3>
    </div>
<h4>Version: 1.0.</h4>
<h5>2024</h5>
</div >  
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