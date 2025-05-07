import { MusicWeatherProvider } from "./components/context/MusicWeatherContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./Routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <MusicWeatherProvider>
          <Routes>
            {routes.map((oneRoute) => (
              <Route
                key={oneRoute.path}
                path={oneRoute.path}
                element={oneRoute.element}
              />
            ))}
          </Routes>
        </MusicWeatherProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
