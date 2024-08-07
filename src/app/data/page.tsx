import Table, { DataAvailabilityTable } from "@/components/data/Data_Table";
import Globe_Data from "@/components/data/Globe_Data";
import Integrations_Tabs_Data from "@/components/data/Integrations_Tabs_Data";
import Maximize_Potential from "@/components/data/Maximize_Potential";
import { BusinessInsights } from "@/components/shared/bussinessImsights/BusinessInsights";
import Slider from "@/components/shared/slider";
import "./data.css"

export default function Data() {
    return (
        <div>


            <Globe_Data />


            <div style={{ marginBlock: '60px' }}>

                <Slider />
            </div>

            <DataAvailabilityTable />

            <Maximize_Potential />

            <br></br>

            <Integrations_Tabs_Data />

            <BusinessInsights backgroundImageSrc={''} />
        </div>
    );
}