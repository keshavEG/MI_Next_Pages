import Tabs_Desc_alt from "@/components/solutions_altdesign/Tabs_Desc_alt";
import Video_Alt from "@/components/solutions_altdesign/Video_Solutions_alt";
import styles from '../../components/ui/style.module.css';
import Insights_Cards from "@/components/solutions_altdesign/Insights_Cards_alt";
import More_Solutions_alt from "@/components/solutions_altdesign/More_Solutions";

export default function Solutions_Alt(){
    return(
        <div style={{ paddingInline: '30px'}}>
            <Video_Alt />

            <Tabs_Desc_alt />

            <Insights_Cards />

            <More_Solutions_alt />
            
        </div>
    )
}