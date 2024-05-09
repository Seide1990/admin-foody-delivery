import axios from "axios";
import { useState,useEffect } from "react";
import Image from "next/image"

import styles from "@/styles/css/product/add.module.css"
import img_1 from "@/styles/image/product/Vector_up.png"

export default function Add({setIsVisible,data,secim,editProduct,setEditProduct,editimg,seteditimg}){

console.log(editimg)
    const toggleMenu = () => {
        setIsVisible(false);
        };

    const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditProduct((prevForm) => ({ ...prevForm, [name]: value }));
  }
//seteditimg(img)

const [update,setupdate]=useState([
  {
    "name":  editProduct.name,
    "description": editProduct.description,
    "img_url": editProduct.img_url,
    "rest_id": editProduct.rest_id,
    "price": editProduct.price
  
}
])

    const handleSubmit = (e) => {
        //burada inputlara yazilanlari add edecik ip lere
        e.preventDefault();

    
  const name1 = e.target.name.value;
  setupdate({
    "name":  e.target.name.value,
    "description": e.target.description.value,
    "img_url": "string",
    "rest_id": "string",
    "price": e.target.price.value
  
})
console.log(editimg.id)
fetchdata(editimg.id)
      }
     
       

        //   useEffect(()=>{
        //   fetchdata();
        // },[]
        // )
        const fetchdata=async(id)=>{
      
          const response=await axios.put(`http://localhost:3001/api/products/${id}`,
            {
              "name":  "yemek",
              "description": "icmek",
              "img_url": "string",
              "rest_id": "string",
              "price": 1
            
          })
        .then((response)=>{
          console.log(response)
        }).catch((error)=>{
        console.log(error)})}
    return(
        <>
<div className={styles.addfix}>
<div className={styles.toggleMenu}> 
          <h1>{data.title}</h1>
            <p>{data.uploade}</p>
            <div className={styles.uplimage}>
             <Image  width={150} height={50}alt="" src={editimg.img_url} /> 
            <div  className={styles.divDownload}>  
            
             <Image src={img_1} width={60} height={40}alt="" /> 
            </div>
            </div>
            <p>{data.information}</p>
            <div className={styles.addProductInput}>

      
<form onSubmit={handleSubmit}>

{data.input.map((inp,index)=><>
 <label for={inp.id}>{inp.id}</label>
    <input id={inp.id} type={inp.type} name={inp.id} value={inp.val} onChange={handleChange} /> </>
    )} 
{/* <label for="name">Name</label>
    <textarea id="name" type="name" name="name" onChange={handleChange} value={data}/>
 <label for="description">Description</label>
    <textarea id="description" type="textarea" name="description" onChange={handleChange} value={EditProduct.description}/>
    <label for="price">Price</label>
    <input id="price" type="number" name="price" onChange={handleChange}value={EditProduct.price}/>
    <label for="restaurants">Restaurants</label>
    <input id="restaurants" type="text" name="restaurants" onChange={handleChange} value={EditProduct.rest_id}/>  */}
  <div className={styles.toggleMenuButton}>
            <button className={styles.toggleMenuCancel} onClick={toggleMenu}>Cancel</button> 
                <button  type="submit " className={styles.toggleMenuCreate}  >Create Product</button> 
            </div>  

            </form>  



                
            </div>
           
          </div>
         
          </div>
       
        </>
    )
}
