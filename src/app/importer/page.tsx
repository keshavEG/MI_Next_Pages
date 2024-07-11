import Insights from "@/components/importer/Insights_tabs";
import Tabs_Desc from "@/components/importer/Tabs_Descriptions";
import Video from "@/components/importer/Video_Importer";

export default function Importer(){
    return(
        <div>
            <Video />
            <Tabs_Desc />
            <br></br>
            <br></br>
            <div className="flex flex-col px-5 max-w-6xl mx-auto">
                <h1 className="w-full text-4xl font-bold leading-tight text-black uppercase mb-8">
                    Industry-Driven Insights For Up-To-Date Information
                </h1>
            </div>
            <Insights />
        </div>
    );

}