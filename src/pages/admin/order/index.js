import Layout from "@/components/Layout"
import { useState } from "react";
import  Styles  from "../../../styles/css/product/product1.module.css"
import Style from "../../../styles/css/category/category.module.css"
import edit from "../../../styles/image/product/edit.png";
import del from "@/styles/image/product/delete_forever.png";
import Img_res from "../../../styles/image/restaurant/Background (2).svg"
import Image from "next/image";

export default function Restaurant(){




    return(
        <>
               <Layout>     
        <div className={Styles.ProductName}> 
           <h1>Order</h1>
        </div>
        {/* ------------------------------ */}
      
        <table className={Style.tableBox} >
          <thead>
            <tr >
              <th >ID</th>
              <th >Custamer ID</th>
              <th>Time</th>
              <th >Delivary Address</th>
              <th >Amount</th>
              <th >Payment Method</th>
              <th >Contact</th> 
          
            </tr>
          </thead>
          <tbody className={Style.tableRow}>
            {/* {people.map((person, index) => { */}
     
                <tr  >
                  <td >9177 </td>
                  <td >02241</td>
                  <td >10 yanvar 2024</td>
                  <td >bnnbjhmbjhjhghg</td>
                  <td >249$</td>
                  <td >Cash of delivary</td>
                  <td>094 051-768-48-03</td>
                
                  <td >
                    
                    <button onClick={() => toggleAdd()}> <Image className={Styles.ProductCard_del}  src={del}></Image> </button>
                   
                  </td>
                </tr>
        
          </tbody>
  
        </table>
        </Layout>
        
        </>
    )
}