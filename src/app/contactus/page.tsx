import Contact_Form from "@/components/contactus/Contact_Form";
import Iframe_Container from "@/components/contactus/Iframe_Container";
import Maps from "@/components/contactus/Iframe_Maps";
import styles from '../../components/ui/style.module.css';
import Util_Cards from "@/components/contactus/Util_Cards";

export default function Contact_Us() {
    return (
        <div className={`${styles.container}`}>
            <Contact_Form />
            <Iframe_Container />
            <Maps />
            <Util_Cards />
        </div>
    );
}