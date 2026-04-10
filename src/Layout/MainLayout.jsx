
import Footer from "@/Components/Footer";
import FooterSecond from "@/Components/FooterSecond";
import Navbar from "@/Components/Navbar";
import ScrollToTop from "@/Components/ScrollToTop";
import { Outlet } from "react-router-dom";


export default function MainLayout(){
    // const location = useLocation();
    return(
        <>
        <ScrollToTop />
         <Navbar />
         <Outlet/>
         <FooterSecond />
         {/* <Footer /> */}
        </>
    )
}