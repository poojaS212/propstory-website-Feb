
import MainLayout from "@/Layout/MainLayout";
import Home from "@/Pages/Home";
import AIChatbots from "@/Pages/Services/AIChatbots";
import CRMImplementations from "@/Pages/Services/CRMImplementations";
import LeadGeneration from "@/Pages/Services/LeadGeneration";
import StrategyAnalyticsHeader from "@/Pages/Services/StrategyAnalyticsHeader";
import { createBrowserRouter } from "react-router-dom";
import OurClientsPage from "@/Pages/Work/OurClientsPage";
import CaseStudiesSection from "@/Pages/Work/CaseStudiesSection";
import TestimonialsSection from "@/Pages/Work/TestimonialsSection";
import AboutUs from "@/Components/AboutUS";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      //  children: [
      //    { path: "/", element: <Home /> },
        
        children : [
            {
                index : true,
                element : <Home />
            },
            {
                path: "/digital-strategy-analytics",
                element: <StrategyAnalyticsHeader />
              },
              {
                path: "/lead-generation",
                element: <LeadGeneration />
              },
              {
                path: "/ai-chatbots",
                element: <AIChatbots />
              },
              {
                path: "crm-implementions",
                element: <CRMImplementations />
              },
              {
                path: "/our-clients",
                element: <OurClientsPage />
              },
               {
                path: "/case-studies",
                element: <CaseStudiesSection />
              },
              {
                path: "/testimonials",
                element: <TestimonialsSection />
              },

        ]
    }
])