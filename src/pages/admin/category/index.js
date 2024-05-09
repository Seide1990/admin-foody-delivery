import Layout from "@/components/Layout"
import { useState ,useEffect} from "react";
import axios from "axios";
import  Styles  from "../../../styles/css/product/product1.module.css"
import Style from "../../../styles/css/category/category.module.css"
import edit from "@/styles/image/product/edit.png";
import del from "@/styles/image/product/delete_forever.png";
import Img_caty from "@/styles/image/category/Table Cells.svg"
import Image from "next/image";

export default function Restaurant(){

  const [datafetch,setdatafetch]=useState([   
    {
      "id": "YiVJvca0Ir0ovyRlLsQb",
      "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJRxKZ4zYMS-NBSAO7MQAm5gEsWa72382tkKO_vXP_mEuL5TVqxWcm1KKGjtWQa7oAZI&usqp=CAU",
      "name": "Fast Food",
      "slug": "fast-food"
    },])
    
        const fetchdata=async()=>{
            const response=await axios.get('http://localhost:3001/api/category');
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
    console.log(datafetch)


    return(
        <>
               <Layout>     
        <div className={Styles.ProductName}> 
           <h1>Category</h1>
        </div>
        {/* ------------------------------ */}
        <div className={Style.product_box}>
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
        
          {datafetch.map((product,index)=> <>
          <tbody className={Style.tableRow}>
          
     
                <tr  >
                  <td >{index} </td>
                  <td ><Image  className={Style.tableimg} src={Img_caty}></Image></td>
                  <td >{product.name}</td>
                  <td >{product.slug}</td>
                  <td >
                  <button onClick={() => toggleAdd()}> <Image  className={Styles.ProductCard_edit} src={edit}></Image> </button>
                   
                  </td>
                  <td >
                    
                    <button onClick={() => toggleAdd()}> <Image className={Styles.ProductCard_del}  src={del}></Image> </button>
                   
                  </td>
                </tr>
        
          </tbody>
      
          </>
           
          )
}   
  
        </table>
        </div>
        </Layout>
        
        </>
    )
}