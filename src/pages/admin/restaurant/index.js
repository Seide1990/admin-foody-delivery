import Layout from "@/components/Layout"
import { useState } from "react";
import  Styles  from "../../../styles/css/product/product1.module.css"
import Style from "../../../styles/css/restaurant/restaurant.module.css"
import edit from "../../../styles/image/product/edit.png";
import del from "@/styles/image/product/delete_forever.png";
import Img_res from "../../../styles/image/restaurant/Background (2).svg"
import Image from "next/image";

export default function Restaurant(){




    return(
        <>
               <Layout>     
        <div className={Styles.ProductName}> 
           <h1>Restaurants</h1>
        </div>
        {/* ------------------------------ */}
<div className={Style.restCard}>
    
    <div className={Style.restCard_box1}> 
    <Image   src={Img_res}></Image>
    </div>
    <div className={Style.restCard_box2}> 
   <h2>Papa John’s</h2>
   <p>Pizza</p>
    </div>
    <div className={Style.restCard_box3}>
    <Image  className={Styles.ProductCard_edit} src={edit}></Image>
    <Image className={Styles.ProductCard_del}  src={del}></Image>
    </div>
</div>

        </Layout>
        
        </>
    )
}