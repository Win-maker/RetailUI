import { SidebarProvider} from "@/components/ui/sidebar";
import AppSidebar from "../components/sidebar/AppSidebar";
import { Outlet } from "react-router-dom";
import AppMenubar from "../components/menubar/AppMenubar";
const DefaultLayout = () => {
  return (
    <>
    <AppMenubar /> 
      <SidebarProvider>
        <AppSidebar />
        <main>
       
          <Outlet />
        </main>
      </SidebarProvider>
      
   
    </>
  );
};

export default DefaultLayout;
