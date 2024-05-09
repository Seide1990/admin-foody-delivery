import Layout from "@/components/Layout"
import { useState ,useEffect} from "react"
import  axios  from "axios";
import  Styles  from "../../../styles/css/product/product1.module.css"
import Style from "../../../styles/css/category/category.module.css"
import edit from "@/styles/image/product/edit.png";
import del from "@/styles/image/product/delete_forever.png";
import Img_res from "@/styles/image/restaurant/Background (2).svg"
import Image from "next/image";

export default function Restaurant(){
  const [datafetch,setdatafetch]=useState([ 
    {  
    "id": "BjGhTHwI6P69zPK07pTX",
    "amount": 29.98,
    "delivery_address": "29 Eve Street, 543 Evenue Road, Ny 87876",
    "created": 1704878046904,
    "contact": "9944445566",
    "customer_id": "LNeeaZnGqHcL75jCYmgm9kmNyfO2",
    "payment_method": "0",
    },])
    
        const fetchdata=async()=>{
            const response=await axios.get('http://localhost:3001//api/order');
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
           <h1>Order</h1>
        </div>
        {/* ------------------------------ */}
        <div className={Style.product_box}>
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
          {datafetch.map((product,index)=> <>
          <tbody className={Style.tableRow}>
          
     
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
  </>)}
  
        </table>
        
</div>
        </Layout>
        
        </>
    )
}