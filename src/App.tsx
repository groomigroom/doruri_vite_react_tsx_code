import { BrowserRouter } from "react-router-dom";
import RoutesSetup from './modules/RoutesSetup';

import "./App.css";

// import TxtEvent from "./modules/txt/events/TxtEvent";

function App() {


  return (
    <BrowserRouter>
      <RoutesSetup />
    </BrowserRouter>
  )
}

export default App
