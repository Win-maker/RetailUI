import { SidebarProvider} from "@/components/ui/sidebar";
import AppSidebar from "../components/sidebar/AppSidebar";
import { Outlet } from "react-router-dom";
import AppMenubar from "../components/menubar/AppMenubar";


const DefaultLayout = () => {
  const styles = {
    layoutContainer: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
    },
    appMenubar: {
      zIndex: 10,
      position: 'relative',
      width: '100%',
      backgroundColor: '#f0f4f8',
      padding: '10px',
    },
    appSidebar: {
      zIndex: 5,
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100%',
      width: '250px',
      backgroundColor: '#1a202c',
      paddingTop: '60px',
      transition: 'transform 0.3s ease',
    },
    contentArea: {
      marginTop:'50px',
      padding: '20px',
      flexGrow: 1,
    },
  };
 

  return (
    <>
    
<div className=" bg-sky-100/80 backdrop-blur-lg shadow-lg">
<SidebarProvider>
        <AppMenubar  />
        <AppSidebar/>
        <main style={styles.contentArea}>
          <Outlet />
        </main>
      </SidebarProvider>
      
   
</div>
    </>
  );
};

export default DefaultLayout;
