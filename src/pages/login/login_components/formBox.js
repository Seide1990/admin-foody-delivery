// @flow


import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import axios from 'axios';


 export default function FormBox(){
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


        <Formik 
            initialValues={{
              username: '',
            password:''
            }} 
            validationSchema={Yup.object({
              username: Yup.string().required('username bos ola bilmez'),
              password: Yup.string().required('password daxil edin'),
         
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
           

           
           <Form  className="flex flex-col xl:w-96  w-72 " >
            <smole className=" text-gray-400 font-bold ">Username</smole>
            <Field className="xl:pl-4 p-4  bg-red-300 mb-2  text-gray-500 font-bold "
               type="text"
               name="username"
               placeholder="bura"
            
             />
              <ErrorMessage className=" text-red-800 mb-4" name="username" component="smool" /> 

             <smole className=" text-gray-400 font-bold ">Password</smole>
             <Field className="p-4  bg-red-300 mb-2 text-gray-500 font-bold "
             type="password" 
             name="password" 
             placeholder="Password"
             />
              <ErrorMessage className=" text-red-800 mb-4" name="password" component="smool" /> 

           <button type="submit" className="p-4 mt-4 bg-red-500  text-gray-300 font-bold " >  Log in   </button>
      

           </Form>
    
       </Formik>
      
        </>
    )
}