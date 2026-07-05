import { Link } from 'react-router-dom';

import './DoruriMapIdolList.css';

import Menu from '../../Menu';

export default function DoruriMapIdolList() {
    return (
        <div className='doruri_map_idollist_full'>
            <Menu />
            <Link to='/DoruriMap' className='doruri_map_idollist_goback'>뒤로가기</Link>
            <Link to='/IdolList' className='doruri_map_idollist_idollist'>목록 보러가기</Link>
            <nav className='doruri_map_idollist_nav'>
                <ul>
                    <li className='doruri_map_triplesmain_li'><Link to='/TriplesMain'>tripleS 메인 페이지</Link>
                        <ul>
                            <li><Link to='/TriplesMemS1'>S1 멤버 페이지</Link></li>
                            <li><Link to='/TriplesMemS2'>S2 멤버 페이지</Link></li>
                            <li><Link to='/TriplesMemS3'>S3 멤버 페이지</Link></li>
                            <li><Link to='/TriplesMemS4'>S4 멤버 페이지</Link></li>
                            <li><Link to='/TriplesMemS5'>S5 멤버 페이지</Link></li>
                            <li><Link to='/TriplesMemS6'>S6 멤버 페이지</Link></li>
                            <li><Link to='/TriplesMemS7'>S7 멤버 페이지</Link></li>
                            <li><Link to='/TriplesMemS8'>S8 멤버 페이지</Link></li>
                            <li><Link to='/TriplesMemS9'>S9 멤버 페이지</Link></li>
                            <li><Link to='/TriplesMemS10'>S10 멤버 페이지</Link></li>
                            <li><Link to='/TriplesMemS11'>S11 멤버 페이지</Link></li>
                            <li><Link to='/TriplesMemS12'>S12 멤버 페이지</Link></li>
                            <li><Link to='/TriplesMemS13'>S13 멤버 페이지</Link></li>
                            <li><Link to='/TriplesMemS14'>S14 멤버 페이지</Link></li>
                            <li><Link to='/TriplesMemS15'>S15 멤버 페이지</Link></li>
                            <li><Link to='/TriplesMemS16'>S16 멤버 페이지</Link></li>
                            <li><Link to='/TriplesMemS17'>S17 멤버 페이지</Link></li>
                            <li><Link to='/TriplesMemS18'>S18 멤버 페이지</Link></li>
                            <li><Link to='/TriplesMemS19'>S19 멤버 페이지</Link></li>
                            <li><Link to='/TriplesMemS20'>S20 멤버 페이지</Link></li>
                            <li><Link to='/TriplesMemS21'>S21 멤버 페이지</Link></li>
                            <li><Link to='/TriplesMemS22'>S22 멤버 페이지</Link></li>
                            <li><Link to='/TriplesMemS23'>S23 멤버 페이지</Link></li>
                            <li><Link to='/TriplesMemS24'>S24 멤버 페이지</Link></li>
                        </ul>
                    </li>
                    <li className='doruri_map_txtmain_li'><Link to='/TxtMain'>투모로우바이투게더 메인 페이지</Link>
                        <ul>
                            <li><Link to='/TxtMemSubin'>수빈 멤버 페이지</Link></li>
                            <li><Link to='/TxtMemYeonjun'>연준 멤버 페이지</Link></li>
                            <li><Link to='/TxtMemBeomgyu'>범규 멤버 페이지</Link></li>
                            <li><Link to='/TxtMemTaehyun'>태현 멤버 페이지</Link></li>
                            <li><Link to='/TxtMemHueningkai'>휴닝카이 멤버 페이지</Link></li>
                        </ul>
                    </li>
                    <li className='doruri_map_akmumain_li'><Link to='/AkmuMain'>AKMU 메인 페이지</Link>
                        <ul>
                            <li><Link to='/AkmuMemChanhyuk'>이찬혁 멤버 페이지</Link></li>
                            <li><Link to='/AkmuMemSuhyun'>이수현 멤버 페이지</Link></li>
                        </ul>
                    </li>
                    <li className='doruri_map_ioimain_li'><Link to='/IoiMain'>아이오아이 메인 페이지</Link>
                        <ul>
                            <li><Link to='/IoiMemImnayoung'>임나영 멤버 페이지</Link></li>
                            <li><Link to='/IoiMemKimchungha'>김청하 멤버 페이지</Link></li>
                            <li><Link to='/IoiMemKimsejung'>김세정 멤버 페이지</Link></li>
                            <li><Link to='/IoiMemJungcheyun'>정채연 멤버 페이지</Link></li>
                            <li><Link to='/IoiMemJugyulgyoung'>주결경 멤버 페이지</Link></li>
                            <li><Link to='/IoiMemKimsohye'>김소혜 멤버 페이지</Link></li>
                            <li><Link to='/IoiMemYuyeonjung'>유연정 멤버 페이지</Link></li>
                            <li><Link to='/IoiMemChoiyujung'>최유정 멤버 페이지</Link></li>
                            <li><Link to='/IoiMemGangmina'>강미나 멤버 페이지</Link></li>
                            <li><Link to='/IoiMemKimdoyeon'>김도연 멤버 페이지</Link></li>
                            <li><Link to='/IoiMemJeonsomi'>전소미 멤버 페이지</Link></li>
                        </ul>
                    </li>
                </ul>

                <ul>
                    <li className='doruri_map_strmain_li'><Link to='/StrayKidsMain'>Stray Kids 메인 페이지</Link>
                        <ul>
                            <li><Link to='/StrayMemBangchan'>방찬 멤버 페이지</Link></li>
                            <li><Link to='/StrayMemLino'>리노 멤버 페이지</Link></li>
                            <li><Link to='/StrayMemChangbin'>창빈 멤버 페이지</Link></li>
                            <li><Link to='/StrayMemHyunjin'>현진 멤버 페이지</Link></li>
                            <li><Link to='/StrayMemHan'>한 멤버 페이지</Link></li>
                            <li><Link to='/StrayMemFilix'>필릭스 멤버 페이지</Link></li>
                            <li><Link to='/StrayMemSeungmin'>승민 멤버 페이지</Link></li>
                            <li><Link to='/StrayMemIn'>아이엔 멤버 페이지</Link></li>
                        </ul>
                    </li>
                    <li className='doruri_map_txtmain_li'><Link to='/IllitMain'>ILLIT 메인 페이지</Link>
                        <ul>
                            <li><Link to='/IllMemYunah'>윤아 멤버 페이지</Link></li>
                            <li><Link to='/IllMemMinju'>민주 멤버 페이지</Link></li>
                            <li><Link to='/IllMemMoka'>모카 멤버 페이지</Link></li>
                            <li><Link to='/IllMemWonhee'>원희 멤버 페이지</Link></li>
                            <li><Link to='/IllMemEroha'>이로하 멤버 페이지</Link></li>
                        </ul>
                    </li>
                    <li className='doruri_map_twsmain_li'><Link to='/TwsMain'>TWS 메인 페이지</Link>
                        <ul>
                            <li><Link to='/TwsMemSinyu'>신유 멤버 페이지</Link></li>
                            <li><Link to='/TwsMemDohun'>도훈 멤버 페이지</Link></li>
                            <li><Link to='/TwsMemYoungjae'>영재 멤버 페이지</Link></li>
                            <li><Link to='/TwsMemHanjin'>한진 멤버 페이지</Link></li>
                            <li><Link to='/TwsMemJihun'>지훈 멤버 페이지</Link></li>
                            <li><Link to='/TwsMemGyungmin'>경민 멤버 페이지</Link></li>
                        </ul>
                    </li>
                    <li className='doruri_map_txtmain_li'><Link to='/ResMain'>RESCENE 메인 페이지</Link>
                        <ul>
                            <li><Link to='/ResMemWoni'>원이 멤버 페이지</Link></li>
                            <li><Link to='/ResMemLiv'>리브 멤버 페이지</Link></li>
                            <li><Link to='/ResMemMinami'>미나미 멤버 페이지</Link></li>
                            <li><Link to='/ResMemMay'>메이 멤버 페이지</Link></li>
                            <li><Link to='/ResMemJena'>제나 멤버 페이지</Link></li>
                        </ul>
                    </li>
                </ul>

                <ul>
                    <li className='doruri_map_tenmain_li'><Link to='/TenCMMain'>10CM 메인 페이지</Link>
                        <ul>
                            <li><Link to='/TenMemGwonjungyeol'>권정열 멤버 페이지</Link></li>
                        </ul>
                    </li>
                    <li className='doruri_map_aesmain_li'><Link to='/AespaMain'>aespa 메인 페이지</Link>
                        <ul>
                            <li><Link to='/AesMemKarina'>카리나 멤버 페이지</Link></li>
                            <li><Link to='/AesMemJijell'>지젤 멤버 페이지</Link></li>
                            <li><Link to='/AesMemWinter'>윈터 멤버 페이지</Link></li>
                            <li><Link to='/AesMemNingning'>닝닝 멤버 페이지</Link></li>
                        </ul>
                    </li>
                    <li className='doruri_map_txtmain_li'><Link to='/ALLDAY_PROJECTMain'>ALLDAY PROJECT 메인 페이지</Link>
                        <ul>
                            <li><Link to='/AllMemAnnie'>애니 멤버 페이지</Link></li>
                            <li><Link to='/AllMemTarzan'>타잔 멤버 페이지</Link></li>
                            <li><Link to='/AllMemBailey'>베일리 멤버 페이지</Link></li>
                            <li><Link to='/AllMemWoochan'>우찬 멤버 페이지</Link></li>
                            <li><Link to='/AllMemYoungseo'>영서 멤버 페이지</Link></li>
                        </ul>
                    </li>
                    <li className='doruri_map_aesmain_li'><Link to='/DAY6Main'>DAY6 메인 페이지</Link>
                        <ul>
                            <li><Link to='/DayMemSungjin'>성진 멤버 페이지</Link></li>
                            <li><Link to='/DayMemYoungK'>Young K 멤버 페이지</Link></li>
                            <li><Link to='/DayMemWonpil'>원필 멤버 페이지</Link></li>
                            <li><Link to='/DayMemDowoon'>도운 멤버 페이지</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div >
    );
}
