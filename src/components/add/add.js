import Image from "next/image"
import { useState } from "react";
import styles from "@/styles/css/product/add.module.css"
import img from "@/styles/image/product/Vector_up.png"

export default function Add({setIsVisible,data,secim,EditProduct,setEditProduct}){

console.log(data)
    const toggleMenu = () => {
        setIsVisible(false);
        };

    const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditProduct((prevForm) => ({ ...prevForm, [name]: value }));
  }




    const handleSubmit = (e) => {
        //burada inputlara yazilanlari add edecik ip lere
        e.preventDefault();
        const name1 = e.target.description.value;
        console.log(name1);
    }
    console.log(secim)
    return(
        <>
<div className={styles.addfix}>
<div className={styles.toggleMenu}> 
          <h1>{data.title}</h1>
            <p>{data.uploade}</p>
            <div className={styles.uplimage}>
            <Image src={img} width={150} height={50}alt="" />
            <div  className={styles.divDownload}>  
            
            <Image src={img} width={60} height={40}alt="" />
            </div>
            </div>
            <p>{data.information}</p>
            <div className={styles.addProductInput}>

      
<form onSubmit={handleSubmit}>

{data.input.map((inp,index)=><>
 <label for={inp.id}>{inp.id}</label>
    <input id={inp.id} type={inp.type} name={inp.id} val={inp.val} onChange={handleChange} /> </>
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
