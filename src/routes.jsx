import ProtectedRoute from "./ProtectedRoute";
import FavoriteCities from "./views/FavoriteCities";
import Home from "./views/Home";
import InfoView from "./views/InfoView";
import Landing from "./views/Landing";
import Page404 from "./views/Page404";

const routes = [
  { path: "/", element: <Landing /> },
  { path: "/home", element: <Home /> },

  {
    path: "/info",
    element: (
      <ProtectedRoute>
        <InfoView />
      </ProtectedRoute>
    ),
  },
  {
    path: "/favorite",
    element: (
      <ProtectedRoute>
        <FavoriteCities />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: (
      <ProtectedRoute>
        <Page404 />
      </ProtectedRoute>
    ),
  },
];

export default routes;
