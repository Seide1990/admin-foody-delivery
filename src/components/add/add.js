import Image from "next/image"
import { useState } from "react";
import styles from "@/styles/css/product/add.module.css"
import img from "@/styles/image/product/Vector_up.png"

export default function Add({setIsVisible,data}){
    // const [form, setForm] = useState({
    //     Name: "",
    //     Description: "",
    //     price: "",
    //     Reastaurants: "",
    //   });

    console.log(data.input)
    const toggleMenu = () => {
        setIsVisible(false);
        };
    const  toggleCreate =()=>{
//burda create product yazaciq
    }  
    return(
        <>
<div className={styles.addfix}>
<div className={styles.toggleMenu}> 
          <h1>{data.title}</h1>
            <p>{data.uploade}</p>
            <div  className={styles.divDownload}>  
            <Image src={img} width={60} height={40}alt="" />
            </div>
            <p>{data.information}</p>
            <div className={styles.addProductInput}>

      
<form action="/login" method="POST">

{data.input.map(inp=><>
<label for={inp.id}>{inp.id}</label>
    <input id={inp.id} type={inp.type} name={inp.id} /></>
    )}

    {/* <label for="description">Description</label>
    <textarea id="description" type="textarea" name="description" />
    <label for="price">Price</label>
    <input id="price" type="number" name="price" />
    <label for="restaurants">Restaurants</label>
    <input id="restaurants" type="text" name="restaurants" /> */}


</form>





                
            </div>
            <div className={styles.toggleMenuButton}>
            <button className={styles.toggleMenuCancel} onClick={toggleMenu}>Cancel</button>
                <button className={styles.toggleMenuCreate} onClick={toggleCreate}>Create Product</button>
            </div>
            
          </div>
          </div>
        </>
    )
}
