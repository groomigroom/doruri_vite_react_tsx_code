import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import TriplesMain from './triples/main/TriplesMain';
import TriplesEvent from "./triples/events/TriplesEvent";
import TxtMain from './txt/main/TxtMain';
import TxtEvent from "./txt/events/TxtEvent";
import AkmuEvent from "./akmu/events/AkmuEvent";

export default function RoutesSetup() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/TriplesMain' element={<TriplesMain />}></Route>
            <Route path='/TriplesEvent' element={<TriplesEvent />}></Route>
            <Route path='/TxtMain' element={<TxtMain />}></Route>
            <Route path='/TxtEvent' element={<TxtEvent />}></Route>
            <Route path='/AkmuEvent' element={<AkmuEvent />}></Route>
        </Routes>
    );
}
