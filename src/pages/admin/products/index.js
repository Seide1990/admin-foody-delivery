import Layout from "@/components/Layout"
import { useState,useEffect } from "react";
import axios from "axios";
import  Styles  from "../../../styles/css/product/product1.module.css"
import Image from "next/image";
 import img from "../../../styles/image/product/Background.svg";
import edit from "@/styles/image/product/edit.png";
import Delete from "../../../components/delete/delete";
import del from "@/styles/image/product/delete_forever.png";
import Pagination from "../../../components/pagenation";
import Add from "../../../components/add/add";
import data from "@/styles/data/product/productData.js";

// export const getStaticProps=async()=>{
//   const URL='http://localhost:3001/api/products'
//   const response=  await axios.get(URL);
 

// // .then((response)=>{
// // console.log(response)
// // }).catch((error)=>{
// // console.log(error)})

// return{
//   props:{axiosData:response.data.result.data}
// }

// }

export default function Product({axiosData}){
    const [delVisible, setdelVisible] = useState(false);  //tooglemenu
    const [editVisible, seteditVisible] = useState(false);  //tooglemenu
    const [startpage,setstartpage]=useState(0);
    const [endpage,setendpage]=useState(5);
    const [IsVisible,setIsVisible]=useState(false);
    const [editProduct, setEditProduct] = useState({
      name: "",
      description:"",
    
      rest_id: "",
      price: "",
    });
//api test edirik
console.log(axiosData)
const [datafetch,setdatafetch]=useState([   
{ "name": "spagetti",
"description": "string",
"img_url": "@/styles/image/product/edit.png",
"rest_id": "string",
"price": 1,
"id":1,
}])

    const fetchdata=async()=>{
        const response=await axios.get('http://localhost:3001/api/products');
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

//bura kimi

// setdatafetch(axiosData)
    const [editimg,seteditimg]=useState({
      "img_url":img,
    "id":"1"}
    )
  const dataproduct=[
    "spagetti",
   " pizza",
    "dolma",
    "as",
    "bozbas",
    "yemek1",
    "yemek2","yemek3","yemek4","yemek5","yemek6","yemek7","yemek8","yemek9","yemek10","yemek11","yemek12","yemek13","yemek14"
  ] 



  const count_visit=5;
  const length_data=Math.ceil(dataproduct.length/count_visit);
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
//     {comp:"input",
//     id:"img",
//   type:"text",
// val:editProduct.img_url},
      {
        comp:"input",
        id:"price",
      type:"number",
    value:editProduct.price},
      {comp:"input",
      id:"restaurants",
    type:"text",
  val:editProduct.rest_id}]
   
    }
      
      
       //burada ip den gelen product arrayi olacaq bu arrayi product cartina verecik ve edit ucun propsla add componentine oturecik


    const toggleDelete = () => {
        setdelVisible(!delVisible);
        };
    const toggleAdd=(i)=>{
      setIsVisible(!IsVisible);
      console.log(i)
       setEditProduct({
         name: datafetch[i].name,
         description: datafetch[i].description,
        

        rest_id: datafetch[i].rest_id,
         price:datafetch[i].price,
         
       });
  
 //    seteditimg( datafetch[i].img_url)
 seteditimg({
  img_url:img,
  id:datafetch[i].id}
 )
     
  
 // seteditimg(img)
    }; 
   


    return(
        <>
        <Layout>     
        <div className={Styles.ProductName}> 
           <h1>Products</h1>
        </div>
        <div className={Styles.product_box}>
            
        {datafetch.map((product,index)=><>
 <div className={Styles.ProductCard} >
  <Image  className={Styles.ProductCardImg} height={ 158} width={160.33} src={img}></Image> 
    {/*image datadan gelmedi buna bax  */}
 <h2>{product.name}</h2>
 <p>papa_jons</p>
 <div className={Styles.ProductCard_update}>
    <p> {product.price} </p> 
   <button onClick={() => toggleAdd(index)}> <Image  className={Styles.ProductCard_edit} src={edit}></Image> </button>
    {IsVisible && (
       <Add setIsVisible={setIsVisible} data={array_add} secim={"edit"}  setEditProduct={setEditProduct} seteditimg={seteditimg} editimg={editimg} editProduct={editProduct}> </Add>   //add product componenti

    )}
    <button onClick={toggleDelete}> <Image className={Styles.ProductCard_del}  src={del}></Image> </button>
    {delVisible && (
       <Delete setdelVisible={setdelVisible} data={"product"}></Delete>  //delete componeneti
 //
    )}
    </div>
    </div> 
    </>
    ).slice(startpage,endpage)}

</div>
<Pagination length_data={length_data} setstartpage={setstartpage} setendpage={setendpage} count_visit={count_visit}></Pagination>  // siralma componenti

        </Layout>
        </>
    )
}

