import Layout_client from "@/components/Layout_client"
import Footr_client from "../../components/footr_client"
import Basliq from "./component_home/basliq"
import Features from "./component_home/features";
import Publication from "./component_home/publication"; 
import PopularFood from "./component_home/popularFood";
import Discover from "./component_home/discover";

export default function Home(){




    return(
        <> <Layout_client> 
            <div className="bg-slate-100 pt-10 ">
            <Basliq></Basliq>
            </div> 
             
             
            <div className="bg-white pb-8">
            <Features></Features>  
            </div>
            <div className="bg-white pb-8   ">
<Publication></Publication>
            </div>
            <div className="bg-white pb-40   ">
<PopularFood></PopularFood>
            </div>   
         <div className="bg-white pb-44   "> 
<Discover></Discover>
                      </div>         
               </Layout_client> 
               
             
               </>)
}