import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import TriplesMain from './triples/main/TriplesMain';
import TriplesMemS1 from './triples/members/TriplesMemS1';
import TriplesMemS2 from './triples/members/TriplesMemS2';
import TriplesMemS3 from './triples/members/TriplesMemS3';
import TriplesMemS4 from './triples/members/TriplesMemS4';
import TriplesMemS5 from './triples/members/TriplesMemS5';
import TriplesMemS6 from './triples/members/TriplesMemS6';
import TriplesEvent from "./triples/events/TriplesEvent";
import TxtMain from './txt/main/TxtMain';
import TxtEvent from "./txt/events/TxtEvent";
import AkmuMain from './akmu/main/AkmuMain';
import AkmuEvent from "./akmu/events/AkmuEvent";

export default function RoutesSetup() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/TriplesMain' element={<TriplesMain />}></Route>
            <Route path='/TriplesMemS1' element={<TriplesMemS1 />}></Route>
            <Route path='/TriplesMemS2' element={<TriplesMemS2 />}></Route>
            <Route path='/TriplesMemS3' element={<TriplesMemS3 />}></Route>
            <Route path='/TriplesMemS4' element={<TriplesMemS4 />}></Route>
            <Route path='/TriplesMemS5' element={<TriplesMemS5 />}></Route>
            <Route path='/TriplesMemS6' element={<TriplesMemS6 />}></Route>
            <Route path='/TriplesEvent' element={<TriplesEvent />}></Route>
            <Route path='/TxtMain' element={<TxtMain />}></Route>
            <Route path='/TxtEvent' element={<TxtEvent />}></Route>
            <Route path='/AkmuMain' element={<AkmuMain />}></Route>
            <Route path='/AkmuEvent' element={<AkmuEvent />}></Route>
        </Routes>
    );
}
