import Layout from "@/components/Layout"
import { useState } from "react";
import  Styles  from "../../../styles/css/product/product1.module.css"
import Style from "../../../styles/css/category/category.module.css"
import edit from "../../../styles/image/product/edit.png";
import del from "@/styles/image/product/delete_forever.png";
import Img_caty from "../../../styles/image/category/Table Cells.svg"
import Image from "next/image";

export default function Restaurant(){




    return(
        <>
               <Layout>     
        <div className={Styles.ProductName}> 
           <h1>Category</h1>
        </div>
        {/* ------------------------------ */}
      
        <table className={Style.tableBox} >
          <thead>
            <tr >
              <th >ID</th>
              <th >Image</th>
              <th>Name</th>
              <th >Slug</th>
              {/* <th>Edit</th>
              <th >Delete</th> */}
          
            </tr>
          </thead>
          <tbody className={Style.tableRow}>
            {/* {people.map((person, index) => { */}
     
                <tr  >
                  <td >9177 </td>
                  <td ><Image  className={Style.tableimg} src={Img_caty}></Image></td>
                  <td >Pizza</td>
                  <td >yummi-pizza</td>
                  <td >
                  <button onClick={() => toggleAdd()}> <Image  className={Styles.ProductCard_edit} src={edit}></Image> </button>
                   
                  </td>
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