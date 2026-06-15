import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import TriplesEvent from "./triples/events/TriplesEvent";
import TxtEvent from "./txt/events/TxtEvent";
import AkmuEvent from "./akmu/events/AkmuEvent";

export default function RoutesSetup() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/TriplesEvent' element={<TriplesEvent />}></Route>
            <Route path='/TxtEvent' element={<TxtEvent />}></Route>
            <Route path='/AkmuEvent' element={<AkmuEvent />}></Route>
        </Routes>
    );
}
