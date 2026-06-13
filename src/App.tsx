import "./App.css";
import Home from "./modules/home";
import TriplesEvent from "./modules/triples/events/TriplesEvent";

function App() {


  return (
    <div className="app_full">
      <TriplesEvent />
      <Home />
    </div>
  )
}

export default App
