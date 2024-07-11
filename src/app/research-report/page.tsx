import Explore_More from "@/components/research-report/Explore_more";
import Featured_Video from "@/components/research-report/Featured_videos";
import Market_Inside_Blog from "@/components/research-report/Market_Inside_blog";
import Resource_Center from "@/components/research-report/Resource_center";
import Webinar_Cards from "@/components/research-report/Webinar_cards";

export default function ResearchReport(){
    return(
        <div>


            <Resource_Center />

            <br />
            <br />
            <br />
            <br />


            <Webinar_Cards />

            <br />
            <br />


            <Explore_More />


            <Featured_Video />

            <Market_Inside_Blog />

        </div>
        
    );
}