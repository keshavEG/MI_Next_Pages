
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import ResponsiveSlider from "@/components/shared/slider";
import CustomersWorldwide from "@/components/home/customers-worldwide";
import ImportExportData from "@/components/home/import-export-data";
import Services from "@/components/home/services";
import Products from "@/components/home/products";
// import Slider from "@/components/home/slider";
import ScheduleDemo from "@/components/home/scheduleDemo";
import FirstComponent from "@/components/home/first-component";
import { BusinessInsights } from "@/components/shared/bussinessImsights/BusinessInsights";
import Slider from "@/components/shared/slider";



export default function Home() {
  return (
    <div className="home-header">
      <FirstComponent />

      {/* <div className="mt-[10vh] ml-[10vw] w-[80vw] bg-black border border-dashed min-h-[1px]" /> */}

      <ScheduleDemo />

      <div className="main-slider-div"><Slider /></div>


      <CustomersWorldwide />

      <ImportExportData />

      <Services />

      <Products />

      <BusinessInsights backgroundImageSrc={""} />

    </div>
  );
}
