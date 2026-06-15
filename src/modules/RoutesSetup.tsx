import { Routes, Route } from 'react-router-dom';

import Home from './home';
import TriplesEvent from "./triples/events/TriplesEvent";
import TxtEvent from "./txt/events/TxtEvent";

export default function RoutesSetup() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/TriplesEvent' element={<TriplesEvent />}></Route>
            <Route path='/TxtEvent' element={<TxtEvent />}></Route>
        </Routes>
    );
}
