import { useEffect, useState } from "react";
import  Styles  from "../../styles/css/pagenation/pagenation.module.css"
export default function Pagination({length_data,setstartpage,setendpage,count_visit}){
   
    const [st_next_pr,usest_next_pr]=useState(0);
    const [end_next_pr,useend_next_pr]=useState(2);
    const [id_but,useid_but]=useState(0)
    const button_arr=[]

    for (var i=0;i<length_data;i++){
        button_arr.push(i)
          }
          const onClickPrew=()=>{
            
            console.log(id_but)
             if(st_next_pr!=0){
 useid_but(id_but-1);
                
                usest_next_pr(st_next_pr-1);
                useend_next_pr(end_next_pr-1);
                 setstartpage(id_but*count_visit);
           setendpage((id_but+1)*count_visit);
             }
          }
             const onClickNext=()=>{
              
              console.log(id_but)
             if(end_next_pr!=length_data){
       useid_but(id_but+1);
              
                usest_next_pr(st_next_pr+1);
                useend_next_pr(end_next_pr+1);
                setstartpage(id_but*count_visit);
                 setendpage((id_but+1)*count_visit);
              }
          }
          const onPageChange = (id) => {
            console.log(id_but)
            useid_but(id);
            console.log(id_but)
 console.log(id)
               setstartpage(id*count_visit);
                setendpage((id+1)*count_visit);
               };
            //    useEffect(() => {
              
            //     return () => {
            //       connection.disconnect();
            //     };
            //   }, [serverUrl, roomId]);
            //   // ...
            // }

return(
    <>
<div className={Styles.pagination}>
    <div onClick={() => onClickPrew()}>prew</div>
    {button_arr.map(id=><>
      <div  onClick={() => onPageChange(id)}>{id+1}</div>
    </>).slice(st_next_pr,end_next_pr)}
  <div onClick={() => onClickNext()}>next</div>
</div>
</>
    
)
}