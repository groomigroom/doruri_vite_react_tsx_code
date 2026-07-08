import { BrowserRouter } from "react-router-dom";
import RoutesSetup from './modules/RoutesSetup';
import ScrollToTop from "./modules/ScrollToTop";

import "./App.css";

// import TxtEvent from "./modules/txt/events/TxtEvent";

function App() {


  return (
    <BrowserRouter>
      <ScrollToTop />
      <RoutesSetup />
    </BrowserRouter>
  )
}

export default App
