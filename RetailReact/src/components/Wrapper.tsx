import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DefaultLayout from "../layouts/DefaultLayout";
import ViewItems from "../modules/Viewers/ViewItems";
import { SaleReport } from "../modules/Viewers/SaleReport";
import { store } from "../store";
import { Provider } from "react-redux";
import ViewVoucher from "../modules/Viewers/ViewVoucher";

const Wrapper = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        { path: "home", element: <h1>This is home</h1> },

        { path: "viewitems", element: <ViewItems /> },

        { path: "about", element: <h1>This is About</h1> },

        { path: "contact", element: <h1>This is contact</h1> },
      ],
    },
    {
      path: "/saleReport",
      element: <SaleReport />,
    },
    {
      path: "/voucher",
      element: <ViewVoucher/>,
    },
  ]);

  const queryClient = new QueryClient();

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
      </Provider>
    </>
  );
};

export default Wrapper;
