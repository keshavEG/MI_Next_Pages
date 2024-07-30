import Explore_Through from "@/components/product-platform/Explore_Through";
import Frequent_Questions from "@/components/product-platform/Frequently_AskedQuestion";
import Platform_Globe from "@/components/product-platform/Platform_Globe";
import Platform_Tabs1 from "@/components/product-platform/Platform_Tabs1";
import SoftwareSprawlComponent from "@/components/product-platform/Software_Sprawls";
import "./platform.css"
import { BusinessInsights } from "@/components/shared/bussinessImsights/BusinessInsights";

export default function Product_Platform(){
    return(
      <div>

        <Explore_Through />

        <Platform_Tabs1 />

        <br></br>
        <br></br>

        <SoftwareSprawlComponent />

        <Platform_Globe />

        <Frequent_Questions />
        
        <BusinessInsights backgroundImageSrc={""} />
        
      </div>  
    );
}