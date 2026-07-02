import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import DoruriMap from './doruri_intro/DoruriMap';
import DoruriMapIdolList from './doruri_intro/DoruriMapModules/DoruriMapIdolList';

import IdolList from './idol_search/IdolList';

//TriplesMain

import TriplesMain from './triples/main/TriplesMain';
import TriplesMemS1 from './triples/members/TriplesMemS1';
import TriplesMemS2 from './triples/members/TriplesMemS2';
import TriplesMemS3 from './triples/members/TriplesMemS3';
import TriplesMemS4 from './triples/members/TriplesMemS4';
import TriplesMemS5 from './triples/members/TriplesMemS5';
import TriplesMemS6 from './triples/members/TriplesMemS6';
import TriplesMemS7 from './triples/members/TriplesMemS7';
import TriplesMemS8 from './triples/members/TriplesMemS8';
import TriplesMemS9 from './triples/members/TriplesMemS9';
import TriplesMemS10 from './triples/members/TriplesMemS10';
import TriplesMemS11 from './triples/members/TriplesMemS11';
import TriplesMemS12 from './triples/members/TriplesMemS12';
import TriplesMemS13 from './triples/members/TriplesMemS13';
import TriplesMemS14 from './triples/members/TriplesMemS14';
import TriplesMemS15 from './triples/members/TriplesMemS15';
import TriplesMemS16 from './triples/members/TriplesMemS16';
import TriplesMemS17 from './triples/members/TriplesMemS17';
import TriplesMemS18 from './triples/members/TriplesMemS18';
import TriplesMemS19 from './triples/members/TriplesMemS19';
import TriplesMemS20 from './triples/members/TriplesMemS20';
import TriplesMemS21 from './triples/members/TriplesMemS21';
import TriplesMemS22 from './triples/members/TriplesMemS22';
import TriplesMemS23 from './triples/members/TriplesMemS23';
import TriplesMemS24 from './triples/members/TriplesMemS24';

import TriplesEvent from "./triples/events/TriplesEvent";

//TxtMain

import TxtMain from './txt/main/TxtMain';
import TxtMemBeomgyu from './txt/members/TxtMemBeomgyu';
import TxtMemHueningkai from './txt/members/TxtMemHueningkai';
import TxtMemSubin from './txt/members/TxtMemSubin';
import TxtMemTaehyun from './txt/members/TxtMemTaehyun';
import TxtMemYeonjun from './txt/members/TxtMemYeonjun';

import TxtEvent from "./txt/events/TxtEvent";

//AkmuMain

import AkmuMain from './akmu/main/AkmuMain';
import AkmuMemChanhyuk from './akmu/members/AkmuMemChanhyuk';
import AkmuMemSuhyun from './akmu/members/AkmuMemSuhyun';

import AkmuEvent from "./akmu/events/AkmuEvent";

//IoiMain

import IoiMain from "./ioi/main/IoiMain";

import IoiMemImnayoung from './ioi/members/IoiMemImnayoung';
import IoiMemKimchungha from './ioi/members/IoiMemKimchungha';
import IoiMemKimsejung from './ioi/members/IoiMemKimsejung';
import IoiMemJungcheyun from './ioi/members/IoiMemJungcheyun';
import IoiMemJugyulgyoung from './ioi/members/IoiMemJugyulgyoung';
import IoiMemKimsohye from './ioi/members/IoiMemKimsohye';
import IoiMemYuyeonjung from './ioi/members/IoiMemYuyeonjung';
import IoiMemChoiyujung from './ioi/members/IoiMemChoiyujung';
import IoiMemGangmina from './ioi/members/IoiMemGangmina';
import IoiMemKimdoyeon from './ioi/members/IoiMemKimdoyeon';
import IoiMemJeonsomi from './ioi/members/IoiMemJeonsomi';

export default function RoutesSetup() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>

            <Route path='/DoruriMap' element={<DoruriMap />}></Route>
            <Route path='/DoruriMapIdolList' element={<DoruriMapIdolList />}></Route>

            <Route path='/IdolList' element={<IdolList />}></Route>


            <Route path='/TriplesMain' element={<TriplesMain />}></Route>
            <Route path='/TriplesMemS1' element={<TriplesMemS1 />}></Route>
            <Route path='/TriplesMemS2' element={<TriplesMemS2 />}></Route>
            <Route path='/TriplesMemS3' element={<TriplesMemS3 />}></Route>
            <Route path='/TriplesMemS4' element={<TriplesMemS4 />}></Route>
            <Route path='/TriplesMemS5' element={<TriplesMemS5 />}></Route>
            <Route path='/TriplesMemS6' element={<TriplesMemS6 />}></Route>
            <Route path='/TriplesMemS7' element={<TriplesMemS7 />}></Route>
            <Route path='/TriplesMemS8' element={<TriplesMemS8 />}></Route>
            <Route path='/TriplesMemS9' element={<TriplesMemS9 />}></Route>
            <Route path='/TriplesMemS10' element={<TriplesMemS10 />}></Route>
            <Route path='/TriplesMemS11' element={<TriplesMemS11 />}></Route>
            <Route path='/TriplesMemS12' element={<TriplesMemS12 />}></Route>
            <Route path='/TriplesMemS13' element={<TriplesMemS13 />}></Route>
            <Route path='/TriplesMemS14' element={<TriplesMemS14 />}></Route>
            <Route path='/TriplesMemS15' element={<TriplesMemS15 />}></Route>
            <Route path='/TriplesMemS16' element={<TriplesMemS16 />}></Route>
            <Route path='/TriplesMemS17' element={<TriplesMemS17 />}></Route>
            <Route path='/TriplesMemS18' element={<TriplesMemS18 />}></Route>
            <Route path='/TriplesMemS19' element={<TriplesMemS19 />}></Route>
            <Route path='/TriplesMemS20' element={<TriplesMemS20 />}></Route>
            <Route path='/TriplesMemS21' element={<TriplesMemS21 />}></Route>
            <Route path='/TriplesMemS22' element={<TriplesMemS22 />}></Route>
            <Route path='/TriplesMemS23' element={<TriplesMemS23 />}></Route>
            <Route path='/TriplesMemS24' element={<TriplesMemS24 />}></Route>

            <Route path='/TriplesEvent' element={<TriplesEvent />}></Route>

            {/* TxtMain */}

            <Route path='/TxtMain' element={<TxtMain />}></Route>
            <Route path='/TxtMemBeomgyu' element={<TxtMemBeomgyu />}></Route>
            <Route path='/TxtMemHueningkai' element={<TxtMemHueningkai />}></Route>
            <Route path='/TxtMemSubin' element={<TxtMemSubin />}></Route>
            <Route path='/TxtMemTaehyun' element={<TxtMemTaehyun />}></Route>
            <Route path='/TxtMemYeonjun' element={<TxtMemYeonjun />}></Route>

            <Route path='/TxtEvent' element={<TxtEvent />}></Route>

            <Route path='/AkmuMain' element={<AkmuMain />}></Route>
            <Route path='/AkmuMemChanhyuk' element={<AkmuMemChanhyuk />}></Route>
            <Route path='/AkmuMemSuhyun' element={<AkmuMemSuhyun />}></Route>

            <Route path='/AkmuEvent' element={<AkmuEvent />}></Route>

            <Route path='/IoiMain' element={<IoiMain />}></Route>

            <Route path='/IoiMemImnayoung' element={<IoiMemImnayoung />}></Route>
            <Route path='/IoiMemKimchungha' element={<IoiMemKimchungha />}></Route>
            <Route path='/IoiMemKimsejung' element={<IoiMemKimsejung />}></Route>
            <Route path='/IoiMemJungcheyun' element={<IoiMemJungcheyun />}></Route>
            <Route path='/IoiMemJugyulgyoung' element={<IoiMemJugyulgyoung />}></Route>
            <Route path='/IoiMemKimsohye' element={<IoiMemKimsohye />}></Route>
            <Route path='/IoiMemYuyeonjung' element={<IoiMemYuyeonjung />}></Route>
            <Route path='/IoiMemChoiyujung' element={<IoiMemChoiyujung />}></Route>
            <Route path='/IoiMemGangmina' element={<IoiMemGangmina />}></Route>
            <Route path='/IoiMemKimdoyeon' element={<IoiMemKimdoyeon />}></Route>
            <Route path='/IoiMemJeonsomi' element={<IoiMemJeonsomi />}></Route>

        </Routes>
    );
}
