import Header_client from "../header_client";
import Footr_client from "../footr_client";
export default function Layout_client({children}){


  return(
    <>
    <Header_client/>
      <main>
{children}

      </main>
 
      <Footr_client/> 
   



    </>
  )
}