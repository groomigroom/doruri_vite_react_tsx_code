import { Routes, Route } from 'react-router-dom';

//수정하기
import TriplesSunEventSuntekArray from './triples/units/Sun/events/TriplesSunEventSuntekArray';

import Home from './Home';

import HomeEng from './HomeEng/HomeEng';

import DoruriMap from './doruri_intro/DoruriMap';
import DoruriMapIdolList from './doruri_intro/DoruriMapModules/DoruriMapIdolList';
import DoruriMapIdolList2 from './doruri_intro/DoruriMapModules/DoruriMapIdolList2';

import DoruriUpdate from './updates/DoruriUpdate';

import DoruriUpdateAugust5th2026 from './updates/2026August/DoruriUpdateAugust5th2026';

import IdolList from './idol_search/IdolList';
import IdolListEng from './idol_searchEng/IdolListEng';
import IdolList2 from './idol_search/IdolList2';
import IdolList2Eng from './idol_searchEng/IdolList2Eng';

//login

import LoginMain from './login/LoginMain';

//TriplesMain

import TriplesEvent from "./triples/events/TriplesEvent";
import TriplesAssemble25Event from './triples/events/TriplesAssemble25Event/TriplesAssemble25Event';

import TriplesSunEvent20260901 from './triples/units/Sun/events/TriplesSunEvent20260901';

//TxtMain

import TxtEvent from "./txt/events/TxtEvent";

//AkmuMain

import AkmuEvent from "./akmu/events/AkmuEvent";

//IoiMain

import IoiEvent from './ioi/events/IoiEvent';

//StrayKidsMain

import StrayKidsEvent from './Stray_Kids/events/StrayKidsEvent';

//IllitMain

import IllitEvent from './illit/events/IllitEvent';

//TwsMain

import TwsEvent from './tws/events/TwsEvent';

//ResMain

import ResceneEvent from './RESCENE/events/ResceneEvent';

//TenCMMain

import TenCMEvent from './10CM/events/TenCMEvent';

//AespaMain

import AespaEvent from './aespa/events/AespaEvent';

//ALLDAY_PROJECTMain

import AlldayProjectEvent from './ALLDAY_PROJECT/events/AlldayProjectEvent';

//DAY6Main

import Day6Event from './DAY6/events/Day6Event';

//Bol4Main

import Bol4Event from './bol4/events/Bol4Event';

import Bol4FindYouEvent from './bol4/events/Bol4FindYouEvent';

//EpikHighMain

import EpikHighEvent from './EpikHigh/events/EpikHighEvent';

//YenaMain

import YenaEvent from './Yena/events/YenaEvent';

//IdnttMain

import IdnttEvent from './idntt/events/IdnttEvent';

//ARTMSMain

import ArtmsEvent from './ARTMS/events/ArtmsEvent';

//BTOBMain

import BtobEvent from './BTOB/events/BtobEvent';

//HanroroMain

import HanroroEvent from './Hanroro/events/HanroroEvent';

//BTSMain

import BtsEvent from './BTS/events/BtsEvent';

//RedVelvetMain

export default function RoutesSetup() {
    return (
        <Routes>
            <Route path='/triples=sun-event-suntek-array' element={<TriplesSunEventSuntekArray />}></Route>

            <Route path='/' element={<Home />}></Route>

            <Route path='/Eng' element={<HomeEng />}></Route>

            <Route path='/DoruriMap' element={<DoruriMap />}></Route>
            <Route path='/DoruriMapIdolList' element={<DoruriMapIdolList />}></Route>
            <Route path='/DoruriMapIdolList2' element={<DoruriMapIdolList2 />}></Route>

            <Route path='/DoruriUpdate' element={<DoruriUpdate />}></Route>

            <Route path='/DoruriUpdateAugust5th2026' element={<DoruriUpdateAugust5th2026 />}></Route>

            <Route path='/IdolList' element={<IdolList />}></Route>
            <Route path='/IdolListEng' element={<IdolListEng />}></Route>
            <Route path='/IdolList2' element={<IdolList2 />}></Route>
            <Route path='/IdolList2Eng' element={<IdolList2Eng />}></Route>

            <Route path='/LoginMain' element={<LoginMain />}></Route>

            {/* triplesMain */}

            <Route path='/TriplesEvent' element={<TriplesEvent />}></Route>
            <Route path='/TriplesAssemble25Event' element={<TriplesAssemble25Event />}></Route>

            <Route path='/triples-sun-event-20260901' element={<TriplesSunEvent20260901 />}></Route>

            {/* TxtMain */}

            <Route path='/TxtEvent' element={<TxtEvent />}></Route>

            {/* AkmuMain */}

            <Route path='/AkmuEvent' element={<AkmuEvent />}></Route>

            {/* IoiMain */}

            <Route path='/IoiEvent' element={<IoiEvent />}></Route>

            {/* StrayKidsMain */}

            <Route path='/StrayKidsEvent' element={<StrayKidsEvent />}></Route>

            {/* IllitMain */}

            <Route path='/IllitEvent' element={<IllitEvent />}></Route>

            {/* TwsMain */}

            <Route path='/TwsEvent' element={<TwsEvent />}></Route>

            {/* ResceneMain */}

            <Route path='/ResceneEvent' element={<ResceneEvent />}></Route>

            {/* TenCMMain */}

            <Route path='/TenCMEvent' element={<TenCMEvent />}></Route>

            {/* AespaMain */}

            <Route path='/AespaEvent' element={<AespaEvent />}></Route>

            {/* ALLDAY_PROJECTMain */}

            <Route path='/AlldayProjectEvent' element={<AlldayProjectEvent />}></Route>

            {/* Day6Main */}

            <Route path='/Day6Event' element={<Day6Event />}></Route>

            {/* Bol4Main */}

            <Route path='/Bol4Event' element={<Bol4Event />}></Route>

            {/* EpikHighMain */}

            <Route path='/EpikHighEvent' element={<EpikHighEvent />}></Route>

            {/* YenaMain */}

            <Route path='/YenaEvent' element={<YenaEvent />}></Route>

            {/* IdnttMain */}

            <Route path='/IdnttEvent' element={<IdnttEvent />}></Route>

            {/* ARTMSMain */}

            <Route path='/ArtmsEvent' element={<ArtmsEvent />}></Route>

            {/* BTOBMain */}
 
            <Route path='/BtobEvent' element={<BtobEvent />}></Route>

            {/* HanroroMain */}
 
            <Route path='/HanroroEvent' element={<HanroroEvent />}></Route>

            {/* BTSMain */}

            <Route path='/BtsEvent' element={<BtsEvent />}></Route>

            {/* RedVelvetMain */}

        </Routes>
    );
}
