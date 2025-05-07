import { useContext } from "react";
import { MusicWeatherContext } from "./components/context/MusicWeatherContext";
import Page404 from "./views/Page404";

// this component is used to protect the routes that require authentication

const ProtectedRoute = ({ children }) => {
  const { locationData, weatherData } = useContext(MusicWeatherContext);
  const isAuthenticated =
    Object.keys(locationData).length > 0 && Object.keys(weatherData).length > 0;
  if (!isAuthenticated) {
    return <Page404 />;
  }

  return children;
};

export default ProtectedRoute;
