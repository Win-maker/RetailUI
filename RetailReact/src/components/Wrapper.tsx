import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DefaultLayout from "../layouts/DefaultLayout";
import ViewItems from "../modules/Viewers/ViewItems";

const Wrapper = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        { path: "home",
           element: <h1>This is home</h1> },

        { path: "viewitems",
           element: <ViewItems/> },

        { path: "about", 
          element: <h1>This is About</h1> },

        { path: "contact",
           element: <h1>This is Contact</h1> },
      ],
    },
  ]);


    const queryClient = new QueryClient();
  
    return (
      <>

          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}></RouterProvider>
          </QueryClientProvider>
  
      </>
    )

};

export default Wrapper;
