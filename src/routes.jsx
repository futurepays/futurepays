import { createBrowserRouter } from "react-router";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import ProductPage from "./pages/ProductPage";
import NotificationsPage from "./pages/NotificationsPage";
import UserProfile from "./pages/UserProfile";
import Global from "./pages/Global";
import AdminDashboard from "./pages/AdminDashboard";
import AddressPage from "./pages/AddressPage";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },

      {
        element: <ProtectedRoute />,
        children: [
          { path: "/explore", element: <ExplorePage /> },
          { path: "/product/:id", element: <ProductPage /> },
          { path: "/addAddress", element: <AddressPage /> },
          { path: "/notifications", element: <NotificationsPage /> },
          { path: "/userProfile", element: <UserProfile /> },
          { path: "/global", element: <Global /> },
          { path: "/admin", element: <AdminDashboard /> },
        ],
      },
    ],
  },
]);

export default router;
