// @flow

import styles from './admin.module.css'
import Image from 'next/image'
import img from "./Group240.svg"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useState } from 'react';


export default function Admin(){
 // const [login,uselogin]=useState(false)
  const router = useRouter();
     
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
              if(values.username=="adminadmin" && values.password=="12345"){
                console.log("product sehifesine kec");
               // uselogin(true);
                router.push('/admin/')
                
              }
         
            }}
            >
           

{/* {({isSubmitting})=>( */}
           <Form className={styles.ad_l_formik} >
             <Field
               type="text"
               name="username"
               placeholder="Username"
             />
             <ErrorMessage className={styles.error} name="username" component="div" />


             <Field type="password" name="password" placeholder="Password"/>
             <ErrorMessage className={styles.error} name="password" component="div" />

           <button type="submit" >  Sign in   </button>
      

           </Form>
         {/* )} */}
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