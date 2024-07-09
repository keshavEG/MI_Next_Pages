import Insights from "@/components/Importer/Insights_tabs";
import Tabs_Desc from "@/components/Importer/Tabs_Descriptions";
import Video from "@/components/Importer/Video_Importer";

export default function aboutUs(){
    return(
        <div>
            This is the Importer Page
            <Video />
            <Tabs_Desc />
            <br></br>
            <br></br>
            <div className="flex flex-col px-5 max-w-6xl mx-auto">
                <h1 className="w-full text-4xl font-bold leading-tight text-black uppercase mb-8">
                    Industry-Driven Insights For Up-To-Date Information
                </h1>
            </div>
            {/* <Insights /> */}
        </div>
    );

}