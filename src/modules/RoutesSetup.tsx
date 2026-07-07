import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import DoruriMap from './doruri_intro/DoruriMap';
import DoruriMapIdolList from './doruri_intro/DoruriMapModules/DoruriMapIdolList';
import DoruriMapIdolList2 from './doruri_intro/DoruriMapModules/DoruriMapIdolList2';

import IdolList from './idol_search/IdolList';
import IdolList2 from './idol_search/IdolList2';

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

import TriplesAcidAngelFromAsiaMain from './triples/units/AcidAngel_fromAsia/TriplesAcidAngelFromAsiaMain';
import TriplesKRystalEyesMain from './triples/units/KRystalEyes/TriplesKRystalEyesMain';
import TriplesAcidEyesMain from './triples/units/AcidEyes/TriplesAcidEyesMain';
import TriplesLOVElutionMain from './triples/units/LOVElution/TriplesLOVElutionMain';

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

//StrayKidsMain

import StrayKidsMain from './Stray_Kids/main/StrayKidsMain';

import StrayMemBangchan from './Stray_Kids/members/StrayMemBangchan';
import StrayMemLino from './Stray_Kids/members/StrayMemLino';
import StrayMemChangbin from './Stray_Kids/members/StrayMemChangbin';
import StrayMemHyunjin from './Stray_Kids/members/StrayMemHyunjin';
import StrayMemHan from './Stray_Kids/members/StrayMemHan';
import StrayMemFilix from './Stray_Kids/members/StrayMemFilix';
import StrayMemSeungmin from './Stray_Kids/members/StrayMemSeungmin';
import StrayMemIn from './Stray_Kids/members/StrayMemIn';

//IllitMain

import IllitMain from './illit/main/IllitMain';

import IllMemYunah from './illit/members/IllMemYunah';
import IllMemMinju from './illit/members/IllMemMinju';
import IllMemMoka from './illit/members/IllMemMoka';
import IllMemWonhee from './illit/members/IllMemWonhee';
import IllMemEroha from './illit/members/IllMemEroha';

//TwsMain

import TwsMain from './tws/main/TwsMain';

import TwsMemSinyu from './tws/members/TwsMemSinyu';
import TwsMemDohun from './tws/members/TwsMemDohun';
import TwsMemYoungjae from './tws/members/TwsMemYoungjae';
import TwsMemHanjin from './tws/members/TwsMemHanjin';
import TwsMemJihun from './tws/members/TwsMemJihun';
import TwsMemGyungmin from './tws/members/TwsMemGyungmin';

//ResMain

import ResMain from './RESCENE/main/ResMain';

import ResMemWoni from './RESCENE/members/ResMemWoni';
import ResMemLiv from './RESCENE/members/ResMemLiv';
import ResMemMinami from './RESCENE/members/ResMemMinami';
import ResMemMay from './RESCENE/members/ResMemMay';
import ResMemJena from './RESCENE/members/ResMemJena';

//TenCMMain

import TenCMMain from './10CM/main/TenCMMain';

import TenMemGwonjungyeol from './10CM/members/TenMemGwonjungyeol';

//AespaMain

import AespaMain from './aespa/main/AespaMain';

import AesMemKarina from './aespa/members/AesMemKarina';
import AesMemJijell from './aespa/members/AesMemJijell';
import AesMemWinter from './aespa/members/AesMemWinter';
import AesMemNingning from './aespa/members/AesMemNingning';

//ALLDAY_PROJECTMain

import ALLDAY_PROJECTMain from './ALLDAY_PROJECT/main/ALLDAY_PROJECTMain';

import AllMemAnnie from './ALLDAY_PROJECT/members/AllMemAnnie';
import AllMemTarzan from './ALLDAY_PROJECT/members/AllMemTarzan';
import AllMemBailey from './ALLDAY_PROJECT/members/AllMemBailey';
import AllMemWoochan from './ALLDAY_PROJECT/members/AllMemWoochan';
import AllMemYoungseo from './ALLDAY_PROJECT/members/AllMemYoungseo';

//DAY6Main

import DAY6Main from './DAY6/main/DAY6Main';

import DayMemSungjin from './DAY6/members/DayMemSungjin';
import DayMemYoungK from './DAY6/members/DayMemYoungK';
import DayMemWonpil from './DAY6/members/DayMemWonpil';
import DayMemDowoon from './DAY6/members/DayMemDowoon';

//Bol4Main

import Bol4Main from './bol4/main/Bol4Main';

import BolMemAnjiyoung from './bol4/members/BolMemAnjiyoung';

export default function RoutesSetup() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>

            <Route path='/DoruriMap' element={<DoruriMap />}></Route>
            <Route path='/DoruriMapIdolList' element={<DoruriMapIdolList />}></Route>
            <Route path='/DoruriMapIdolList2' element={<DoruriMapIdolList2 />}></Route>

            <Route path='/IdolList' element={<IdolList />}></Route>
            <Route path='/IdolList2' element={<IdolList2 />}></Route>


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

            <Route path='/TriplesAcidAngelFromAsiaMain' element={<TriplesAcidAngelFromAsiaMain />}></Route>
            <Route path='/TriplesKRystalEyesMain' element={<TriplesKRystalEyesMain />}></Route>
            <Route path='/TriplesAcidEyesMain' element={<TriplesAcidEyesMain />}></Route>
            <Route path='/TriplesLOVElutionMain' element={<TriplesLOVElutionMain />}></Route>

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

            <Route path='/StrayKidsMain' element={<StrayKidsMain />}></Route>

            <Route path='/StrayMemBangchan' element={<StrayMemBangchan />}></Route>
            <Route path='/StrayMemLino' element={<StrayMemLino />}></Route>
            <Route path='/StrayMemChangbin' element={<StrayMemChangbin />}></Route>
            <Route path='/StrayMemHyunjin' element={<StrayMemHyunjin />}></Route>
            <Route path='/StrayMemHan' element={<StrayMemHan />}></Route>
            <Route path='/StrayMemFilix' element={<StrayMemFilix />}></Route>
            <Route path='/StrayMemSeungmin' element={<StrayMemSeungmin />}></Route>
            <Route path='/StrayMemIn' element={<StrayMemIn />}></Route>

            <Route path='/IllitMain' element={<IllitMain />}></Route>

            <Route path='/IllMemYunah' element={<IllMemYunah />}></Route>
            <Route path='/IllMemMinju' element={<IllMemMinju />}></Route>
            <Route path='/IllMemMoka' element={<IllMemMoka />}></Route>
            <Route path='/IllMemWonhee' element={<IllMemWonhee />}></Route>
            <Route path='/IllMemEroha' element={<IllMemEroha />}></Route>

            <Route path='/TwsMain' element={<TwsMain />}></Route>

            <Route path='/TwsMemSinyu' element={<TwsMemSinyu />}></Route>
            <Route path='/TwsMemDohun' element={<TwsMemDohun />}></Route>
            <Route path='/TwsMemYoungjae' element={<TwsMemYoungjae />}></Route>
            <Route path='/TwsMemHanjin' element={<TwsMemHanjin />}></Route>
            <Route path='/TwsMemJihun' element={<TwsMemJihun />}></Route>
            <Route path='/TwsMemGyungmin' element={<TwsMemGyungmin />}></Route>

            <Route path='/ResMain' element={<ResMain />}></Route>

            <Route path='/ResMemWoni' element={<ResMemWoni />}></Route>
            <Route path='/ResMemLiv' element={<ResMemLiv />}></Route>
            <Route path='/ResMemMinami' element={<ResMemMinami />}></Route>
            <Route path='/ResMemMay' element={<ResMemMay />}></Route>
            <Route path='/ResMemJena' element={<ResMemJena />}></Route>

            <Route path='/TenCMMain' element={<TenCMMain />}></Route>

            <Route path='/TenMemGwonjungyeol' element={<TenMemGwonjungyeol />}></Route>

            <Route path='/AespaMain' element={<AespaMain />}></Route>

            <Route path='/AesMemKarina' element={<AesMemKarina />}></Route>
            <Route path='/AesMemJijell' element={<AesMemJijell />}></Route>
            <Route path='/AesMemWinter' element={<AesMemWinter />}></Route>
            <Route path='/AesMemNingning' element={<AesMemNingning />}></Route>

            <Route path='/ALLDAY_PROJECTMain' element={<ALLDAY_PROJECTMain />}></Route>

            <Route path='/AllMemAnnie' element={<AllMemAnnie />}></Route>
            <Route path='/AllMemTarzan' element={<AllMemTarzan />}></Route>
            <Route path='/AllMemBailey' element={<AllMemBailey />}></Route>
            <Route path='/AllMemWoochan' element={<AllMemWoochan />}></Route>
            <Route path='/AllMemYoungseo' element={<AllMemYoungseo />}></Route>

            <Route path='/DAY6Main' element={<DAY6Main />}></Route>

            <Route path='/DayMemSungjin' element={<DayMemSungjin />}></Route>
            <Route path='/DayMemYoungK' element={<DayMemYoungK />}></Route>
            <Route path='/DayMemWonpil' element={<DayMemWonpil />}></Route>
            <Route path='/DayMemDowoon' element={<DayMemDowoon />}></Route>

            <Route path='/Bol4Main' element={<Bol4Main />}></Route>

            <Route path='/BolMemAnjiyoung' element={<BolMemAnjiyoung />}></Route>

        </Routes>
    );
}
