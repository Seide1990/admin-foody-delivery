import Layout from "@/components/Layout"
import { useState } from "react";
import  Styles  from "../../../styles/css/product/product1.module.css"
import Image from "next/image";
import img from "@/styles/image/product/Background.svg";
import edit from "../../../styles/image/product/edit.png";
import Delete from "../../../components/delete/delete";
import del from "@/styles/image/product/delete_forever.png";
import Pagination from "../../../components/pagenation";
import Add from "../../../components/add/add";
import data from "@/styles/data/product/productData.js";



export default function Product(){
    const [delVisible, setdelVisible] = useState(false);  //tooglemenu
    const [editVisible, seteditVisible] = useState(false);  //tooglemenu
    const [startpage,setstartpage]=useState(0);
    const [endpage,setendpage]=useState(5);
    const [IsVisible,setIsVisible]=useState(false);
    const [editProduct, setEditProduct] = useState({
      name: "",
      description:"",
      img_url: "",
      rest_id: "",
      price: "",
    });
  const dataproduct=[
    "spagetti",
   " pizza",
    "dolma",
    "as",
    "bozbas",
    "yemek1",
    "yemek2","yemek3","yemek4","yemek5","yemek6","yemek7","yemek8","yemek9","yemek10","yemek11","yemek12","yemek13","yemek14"
  ] 
console.log(data[0].img_url);//bu datadan gelir


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
    {comp:"input",
    id:"img",
  type:"text",
val:editProduct.img_url},
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
         name: data[i].name,
         description: data[i].description,
        img_url: data[i].img_url,
        rest_id: data[i].rest_id,
         price:data[i].price,
       });
  
     
  
  
    }; 
   


    return(
        <>
        <Layout>     
        <div className={Styles.ProductName}> 
           <h1>Products</h1>
        </div>
        <div className={Styles.product_box}>
            
        {data.map((product,index)=><>
 <div className={Styles.ProductCard} >
  <Image  className={Styles.ProductCardImg} src={img}></Image> 
    {/*image datadan gelmedi buna bax  */}
 <h2>{product.name}</h2>
 <p>papa_jons</p>
 <div className={Styles.ProductCard_update}>
    <p> {product.price} </p> 
   <button onClick={() => toggleAdd(index)}> <Image  className={Styles.ProductCard_edit} src={edit}></Image> </button>
    {IsVisible && (
       <Add setIsVisible={setIsVisible} data={array_add} secim={"edit"}  setEditProduct={setEditProduct}> </Add>   //add product componenti

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

