import Globe_Data from "@/components/data/Globe_Data";
import Integrations_Tabs_Data from "@/components/data/Integrations_Tabs_Data";
import Maximize_Potential from "@/components/data/Maximize_Potential";
import { BusinessInsights } from "@/components/shared/bussinessImsights/BusinessInsights";
import Slider from "@/components/shared/slider";
import "./data.css"

export default function Data(){
    return(
        <div>
            

            <Globe_Data /> 


            <div style={{ marginTop: '80px'}}><Slider /></div>



            <br></br>

            <Integrations_Tabs_Data />
            <Maximize_Potential />

            <BusinessInsights backgroundImageSrc={''} />
        </div>
    );
}