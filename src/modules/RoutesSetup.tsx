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

            <Route path='/ARTMSMain' element={<ARTMSMain />}></Route>
            <Route path='/ARTMSMain_7_23End' element={<ARTMSMain_7_23End />}></Route>
            <Route path='/ARTMSMainEng' element={<ARTMSMainEng />}></Route>

            <Route path='/ArtmsEvent' element={<ArtmsEvent />}></Route>

            <Route path='/ArtmsOddEyeCircleMain' element={<ArtmsOddEyeCircleMain />}></Route>
            <Route path='/ArtmsOddEyeCircleMainEng' element={<ArtmsOddEyeCircleMainEng />}></Route>

            <Route path='/ArtMemHeejin' element={<ArtMemHeejin />}></Route>
            <Route path='/ArtMemHeejinEng' element={<ArtMemHeejinEng />}></Route>
            <Route path='/ArtMemHaseul' element={<ArtMemHaseul />}></Route>
            <Route path='/ArtMemHaseulEng' element={<ArtMemHaseulEng />}></Route>
            <Route path='/ArtMemKimlip' element={<ArtMemKimlip />}></Route>
            <Route path='/ArtMemKimlipEng' element={<ArtMemKimlipEng />}></Route>
            <Route path='/ArtMemJinsoul' element={<ArtMemJinsoul />}></Route>
            <Route path='/ArtMemJinsoulEng' element={<ArtMemJinsoulEng />}></Route>
            <Route path='/ArtMemChoerry' element={<ArtMemChoerry />}></Route>
            <Route path='/ArtMemChoerryEng' element={<ArtMemChoerryEng />}></Route>

            {/* BTOBMain */}
            <Route path='/BTOBMain' element={<BTOBMain />}></Route>
            <Route path='/BTOBMainEng' element={<BTOBMainEng />}></Route>

            <Route path='/BtobEvent' element={<BtobEvent />}></Route>

            <Route path='/BtobWeAgainAlbum' element={<BtobWeAgainAlbum />}></Route>
            <Route path='/BtobWeAgainAlbumEng' element={<BtobWeAgainAlbumEng />}></Route>

            <Route path='/BtobBtobBlueMain' element={<BtobBtobBlueMain />}></Route>
            <Route path='/BtobBtobBlueMainEng' element={<BtobBtobBlueMainEng />}></Route>
            <Route path='/BtobBtob4uMain' element={<BtobBtob4uMain />}></Route>
            <Route path='/BtobBtob4uMainEng' element={<BtobBtob4uMainEng />}></Route>
            <Route path='/Btob90TanMain' element={<Btob90TanMain />}></Route>
            <Route path='/Btob90TanMainEng' element={<Btob90TanMainEng />}></Route>

            <Route path='/BtoMemPeniel' element={<BtoMemPeniel />}></Route>
            <Route path='/BtoMemPenielEng' element={<BtoMemPenielEng />}></Route>
            <Route path='/BtoMemLeeChangsub' element={<BtoMemLeeChangsub />}></Route>
            <Route path='/BtoMemLeeChangsubEng' element={<BtoMemLeeChangsubEng />}></Route>
            <Route path='/BtoMemLeeMinhyuk' element={<BtoMemLeeMinhyuk />}></Route>
            <Route path='/BtoMemLeeMinhyukEng' element={<BtoMemLeeMinhyukEng />}></Route>
            <Route path='/BtoMemLimHyunsik' element={<BtoMemLimHyunsik />}></Route>
            <Route path='/BtoMemLimHyunsikEng' element={<BtoMemLimHyunsikEng />}></Route>
            <Route path='/BtoMemYookSungjae' element={<BtoMemYookSungjae />}></Route>
            <Route path='/BtoMemYookSungjaeEng' element={<BtoMemYookSungjaeEng />}></Route>
            <Route path='/BtoMemSeoEunkwang' element={<BtoMemSeoEunkwang />}></Route>
            <Route path='/BtoMemSeoEunkwangEng' element={<BtoMemSeoEunkwangEng />}></Route>

            <Route path='/SeoEunkwangOurYouthAlbum' element={<SeoEunkwangOurYouthAlbum />}></Route>

            {/* HanroroMain */}
            <Route path='/HanroroMain' element={<HanroroMain />}></Route>
            <Route path='/HanroroMainEng' element={<HanroroMainEng />}></Route>

            <Route path='/HanroroEvent' element={<HanroroEvent />}></Route>

            <Route path='/HanroroJpopRemakeVol2Album' element={<HanroroJpopRemakeVol2Album />}></Route>
            <Route path='/HanroroJpopRemakeVol2AlbumEng' element={<HanroroJpopRemakeVol2AlbumEng />}></Route>
            <Route path='/HanroroLoveAndHatredAlbum' element={<HanroroLoveAndHatredAlbum />}></Route>

            <Route path='/HanMemHanroro' element={<HanMemHanroro />}></Route>
            <Route path='/HanMemHanroroEng' element={<HanMemHanroroEng />}></Route>

            {/* BTSMain */}
            <Route path='/BTSMain' element={<BTSMain />}></Route>
            <Route path='/BTSMainEng' element={<BTSMainEng />}></Route>

            <Route path='/BtsEvent' element={<BtsEvent />}></Route>

            <Route path='/BtsNormalAlbum' element={<BtsNormalAlbum />}></Route>
            <Route path='/BtsNormalAlbumEng' element={<BtsNormalAlbumEng />}></Route>

            <Route path='/BTSMemJhope' element={<BTSMemJhope />}></Route>
            <Route path='/BTSMemJhopeEng' element={<BTSMemJhopeEng />}></Route>
            <Route path='/BTSMemJimin' element={<BTSMemJimin />}></Route>
            <Route path='/BTSMemJiminEng' element={<BTSMemJiminEng />}></Route>
            <Route path='/BTSMemJin' element={<BTSMemJin />}></Route>
            <Route path='/BTSMemJinEng' element={<BTSMemJinEng />}></Route>
            <Route path='/BTSMemJungKook' element={<BTSMemJungKook />}></Route>
            <Route path='/BTSMemJungKookEng' element={<BTSMemJungKookEng />}></Route>
            <Route path='/BTSMemRM' element={<BTSMemRM />}></Route>
            <Route path='/BTSMemRMEng' element={<BTSMemRMEng />}></Route>
            <Route path='/BTSMemSUGA' element={<BTSMemSUGA />}></Route>
            <Route path='/BTSMemSUGAEng' element={<BTSMemSUGAEng />}></Route>
            <Route path='/BTSMemV' element={<BTSMemV />}></Route>
            <Route path='/BTSMemVEng' element={<BTSMemVEng />}></Route>

            {/* RedVelvetMain */}
            <Route path='/RedVelvetMain' element={<RedVelvetMain />}></Route>
            <Route path='/RedVelvetMainEng' element={<RedVelvetMainEng />}></Route>

            <Route path='/RedVelvetVelvetSummerAlbum' element={<RedVelvetVelvetSummerAlbum />}></Route>
            <Route path='/RedVelvetVelvetSummerAlbumEng' element={<RedVelvetVelvetSummerAlbumEng />}></Route>

        </Routes>
    );
}
