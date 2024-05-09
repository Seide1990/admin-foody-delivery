// @flow

import styles from './admin.module.css'
import Image from 'next/image'
import img from "./Group240.svg"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import axios from 'axios';


 export default function Admin(){
  const[data,setdata]=useState();
 // const [login,uselogin]=useState(false)
  const router = useRouter();
  const fetchdata=async(payload)=>{
    console.log(payload)
    const response=await axios.post('http://localhost:3001/api/auth/signin',{
      "email":payload.username,
      "password":payload.password
    })   .then((response)=>{
      console.log(response)
      setdata(response.data)
    }).catch((error)=>{
    console.log(error)})
  
  };
  


     
    return(
        <>
 <div className={styles.head}>
        <div className={styles.ad_l_esas}>
            <div className={styles.ad_l_welcome}>
                <h1 className={styles.ad_l_h1}> Welcome Admin</h1>
                
        <Formik 
            initialValues={{
              username: '',
            password:''
            }} 
            validationSchema={Yup.object({
              username: Yup.string().required('username bos ola bilmez'),
              password: Yup.string().required('password'),
         
            })} 
            onSubmit={(values,) => {
              console.log(values);  //daxil edilen username ve password burdadir
          //    if(values.username=="adminadmin" && values.password=="12345"){
                console.log("product sehifesine kec");
               // uselogin(true);

   fetchdata(values);
   console.log(data)
             //   router.push('/admin/products/')
                
          //    }
         
            }}
            >
           


           <Form className={styles.ad_l_formik} >
             <Field
               type="text"
               name="username"
               placeholder="bura"
            
             />
             <ErrorMessage className={styles.error} name="username" component="smool" />


             <Field 
             type="password" 
             name="password" 
             placeholder="Password"
             />
             <ErrorMessage className={styles.error} name="password" component="smool" />

           <button type="submit" >  Sign in   </button>
      

           </Form>
    
       </Formik>
            
            </div>
            <div className={styles.ad_l_img}>
            <Image
      src={img}
      width={405}
      height={411.41}
      alt=""




    />

            </div>
        </div>
        </div>
        </>
    )
}