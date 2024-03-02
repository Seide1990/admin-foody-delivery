import Image from "next/image"
import styles from "@/styles/css/delete/delete.module.css"
import { useState } from "react";



export default function Delete({data,setdelVisible}){


    const toggledel = () => {
    setdelVisible(false);
        };

    const delete_date =()=>{

    }    
console.log(data)
return(
    <>
    <div className={styles.delfix}>
     <div className={styles.divDelete}>
        <div className={styles.questions}> Are you sure it’s deleted ?</div>
        <div className={styles.message}>`Attention! If you delete this {data}, it will not come back...`</div>
<div className={styles.CanDel}>
        <div className={styles.cancel} onClick={toggledel}>Cancel</div>
     <div className={styles.delete} onClick={delete_date}>Delete</div></div>
     </div>
     </div>
    </>
)
}