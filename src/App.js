import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import SingleCard from "./components/SingleCard";
import HomePage from "./components/HomePage";
import Regions from "./components/Regions";

function App() {
  return (
    <div className="App bg-img">
      <MyNavbar />
      {/* <SingleCard cityProp={"Sicily"} /> */}
      <HomePage />
      {/* <Regions /> */}
      <MyFooter />
    </div>
  );
}

export default App;
