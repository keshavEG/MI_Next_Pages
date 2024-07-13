import Globe_Data from "@/components/data/Globe_Data";
import Integrations_Tabs_Data from "@/components/data/Integrations_Tabs_Data";
import Maximize_Potential from "@/components/data/Maximize_Potential";
import Slider from "@/components/shared/slider";

export default function Data(){
    return(
        <div>
            

            <Globe_Data /> 


            <Slider />


            <Maximize_Potential />

            <br></br>

            <Integrations_Tabs_Data />
        </div>
    );
}