import Layout from "@/components/Layout"
import { useEffect, useState } from "react";
import  Styles  from "../../../styles/css/product/product1.module.css"
import Style from "../../../styles/css/restaurant/restaurant.module.css"
import edit from "@/styles/image/product/edit.png";
import del from "@/styles/image/product/delete_forever.png";
import Img_res from "@/styles/image/restaurant/Background (2).svg"
import Image from "next/image";
import axios from 'axios'

export default function Restaurant(){
    // const x=fetch('http://localhost:3001/api/restuarants')
    // x.then(function (cavab){cavab.text().then(function (netice){
    
    //     var obj=JSON.parse(netice);
    //    console.log(obj)
       
    // })
    // })

const [data,setdata]=useState(

{

}
)
const [datafetch,setdatafetch]=useState([   
    { "name": "spagetti",
    "description": "string",
    "img_url": "@/styles/image/product/edit.png",
    "rest_id": "string",
    "price": 1,
    "id":1,
    }])
    
        const fetchdata=async()=>{
            const response=await axios.get('http://localhost:3001/api/restuarants');
            setdatafetch(response.data.result.data)
        
    //   .then((response)=>{
    //   console.log(response)
    // }).catch((error)=>{
    // console.log(error)}
    // )
    }
    
    
    useEffect(()=>{
      fetchdata();
    },[]
    )


    return(
        <>
               <Layout>     
        <div className={Styles.ProductName}> 
           <h1>Restaurants</h1>
        </div>
        {/* ------------------------------ */}
        <div className={Styles.product_box}>
        {datafetch.map((product,index)=><>
<div className={Style.restCard}>
    
    <div className={Style.restCard_box1}> 
    <Image   src={Img_res}></Image>
    </div>
    <div className={Style.restCard_box2}> 
   <h2>{product.name}</h2>
   <p>{product.cuisine}</p>
    </div>
    <div className={Style.restCard_box3}>
    <Image  className={Styles.ProductCard_edit} src={edit}></Image>
    <Image className={Styles.ProductCard_del}  src={del}></Image>
    </div>
</div>

       </> )}
       </div>
        </Layout>
        
        </>
    )
}