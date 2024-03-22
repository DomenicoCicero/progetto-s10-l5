import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import HomePage from "./components/HomePage";
import Regions from "./components/Regions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CityDetails from "./components/CityDetails";
import NotFound from "./components/NotFound";
import Info from "./components/Info";
import News from "./components/News";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-img">
        <MyNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/regions" element={<Regions />} />
          <Route path="/city/:cityName" element={<CityDetails />} />
          <Route path="/info" element={<Info />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
