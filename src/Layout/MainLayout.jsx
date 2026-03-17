
import Footer from "@/Components/Footer";
import FooterSecond from "@/Components/FooterSecond";
import Navbar from "@/Components/Navbar";
import { Outlet } from "react-router-dom";


export default function MainLayout(){
    // const location = useLocation();
    return(
        <>
         <Navbar />
         <Outlet/>
         <FooterSecond />
         <Footer />
        </>
    )
}