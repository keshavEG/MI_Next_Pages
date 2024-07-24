import Description_Cards from "@/components/it-consulting/Description_cards_it";
import Transform_Services from "@/components/it-consulting/Transform_services";
import Video from "@/components/it-consulting/Video_itconsulting";
import { BusinessInsights } from "@/components/shared/bussinessImsights/BusinessInsights";

export default function ItConsulting(){
    return (
        <div>
            

            <Video />

            <br></br>

            <Transform_Services />
            
            <br></br>

            <Description_Cards />
            
            <BusinessInsights backgroundImageSrc={''} />
        </div>
    );
}