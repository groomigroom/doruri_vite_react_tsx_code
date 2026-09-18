import { Routes, Route } from 'react-router-dom';

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

            <Route path='/' element={<Home />}></Route>

            <Route path='/Eng' element={<HomeEng />}></Route>

            <Route path='/doruri-map' element={<DoruriMap />}></Route>
            <Route path='/doruri-map/idollist' element={<DoruriMapIdolList />}></Route>
            <Route path='/doruri-map/idollist2' element={<DoruriMapIdolList2 />}></Route>

            <Route path='/doruri-update' element={<DoruriUpdate />}></Route>

            <Route path='/doruri-update-august-5th-2026' element={<DoruriUpdateAugust5th2026 />}></Route>

            <Route path='/idol-list' element={<IdolList />}></Route>
            <Route path='/idol-list-eng' element={<IdolListEng />}></Route>
            <Route path='/idol-list2' element={<IdolList2 />}></Route>
            <Route path='/idol-list2-eng' element={<IdolList2Eng />}></Route>

            <Route path='/login/login-main' element={<LoginMain />}></Route>

            {/* triplesMain */}

            <Route path='/events/triples-love-and-pop-pt1-event' element={<TriplesEvent />}></Route>
            <Route path='/events/triples-assemble25-event' element={<TriplesAssemble25Event />}></Route>

            {/* TxtMain */}

            <Route path='/events/txt-7th-year-event' element={<TxtEvent />}></Route>

            {/* AkmuMain */}

            <Route path='/events/akmu-blooming-event' element={<AkmuEvent />}></Route>

            {/* IoiMain */}

            <Route path='/events/ioi-ioi-loop-event' element={<IoiEvent />}></Route>

            {/* StrayKidsMain */}

            <Route path='/events/stray-kids-skz-replay-2026-pt1-event' element={<StrayKidsEvent />}></Route>

            {/* IllitMain */}

            <Route path='/events/illit-mamihlapinatapai-event' element={<IllitEvent />}></Route>

            {/* TwsMain */}

            <Route path='/events/tws-no-tragedy-event' element={<TwsEvent />}></Route>

            {/* ResceneMain */}

            <Route path='/events/rescene-pretty-girl-special-single-event' element={<ResceneEvent />}></Route>

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
            <Route path='/events/bol4-find-you-event' element={<Bol4FindYouEvent />}></Route>

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
