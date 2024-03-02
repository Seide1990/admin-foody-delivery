import Layout from "@/components/Layout"
import { useState } from "react";
import  Styles  from "../../../styles/css/product/product1.module.css"
import Image from "next/image";
import img from "../../../styles/image/product/Background.svg";
import edit from "../../../styles/image/product/edit.png";
import Delete from "../../../components/delete/delete";
import del from "@/styles/image/product/delete_forever.png";



export default function Product(){
    const [delVisible, setdelVisible] = useState(false);  //tooglemenu
    const [startpage,setstartpage]=useState(0);
    const [endpage,setendpage]=useState(10);
    const [st_next_pr,usest_next_pr]=useState(0);
    const [end_next_pr,useend_next_pr]=useState(3);
    const [id_but,useid_but]=useState(0)


  const dataproduct=[
    "spagetti",
   " pizza",
    "dolma",
    "as",
    "bozbas",
    "yemek1",
    "yemek2","yemek3","yemek4","yemek5","yemek6","yemek7","yemek8","yemek9","yemek10","yemek11","yemek12","yemek13","yemek14"
  ] 
  const length_data=dataproduct.length;
  const button_arr=[]
  console.log(length_data);
  for (var i=0;i<2;i++){
button_arr.push(i)
  }
  console.log(button_arr)

    const toggleDelete = () => {
        setdelVisible(!delVisible);
        };

        const onPageChange = (id) => {
       useid_but(id)
          setstartpage(id*10);
           setendpage((id+1)*10);
          };
          const onClickPrew=()=>{
            if(st_next_pr!=0){
                usest_next_pr(st_next_pr-1);
                useend_next_pr(end_next_pr-1);
                 setstartpage(id_but*5);
           setendpage((id_but+1)*5);
            }
          }
             const onClickNext=()=>{
            
                usest_next_pr(st_next_pr+1);
                useend_next_pr(end_next_pr+1);
           
          }

    return(

        <>
        <Layout>
     
        <div className={Styles.ProductName}> 
           <h1>Products</h1>
        </div>
        <div className={Styles.product_box}>
            
    {dataproduct.map(product=><>
 <div className={Styles.ProductCard} >
 <Image  className={Styles.ProductCardImg} src={img}></Image>
 <h2>{product}</h2>
 <p>Papa John’s</p>
 <div className={Styles.ProductCard_update}>
    <p> $16 </p> 
    {/* <Image  className={Styles.ProductCard_edit} src={edit}></Image> */}
    <button onClick={toggleDelete}> <Image className={Styles.ProductCard_del}  src={del}></Image> </button>
    {delVisible && (
       <Delete setdelVisible={setdelVisible} data={"product"}></Delete>
 //
    )}
  
  
    </div>
    </div> 
    </>
    ).slice(startpage,endpage)}

</div>
<div className={Styles.pagination}>
    <div onClick={() => onClickPrew()}>prew</div>
    {button_arr.map(but=><>
      <div  onClick={() => onPageChange(but)}>{but+1}</div>
    </>).slice(st_next_pr,end_next_pr)}
  <div onClick={() => onClickNext()}>next</div>
</div>
        </Layout>
        </>
    )
}

