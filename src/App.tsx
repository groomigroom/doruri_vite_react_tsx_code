import "./App.css";
import Home from "./modules/home";
import TxtEvent from "./modules/txt/events/TxtEvent";
// import TriplesEvent from "./modules/triples/events/TriplesEvent";

function App() {


  return (
    <div className="app_full">
      <TxtEvent />
      {/* <TriplesEvent /> */}
      <Home />
    </div>
  )
}

export default App
