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
                    <li className='doruri_map_akmumain_li'><Link to='/IoiMain'>아이오아이 메인 페이지</Link>
                        <ul>
                            <li><Link to='/AkmuMemChanhyuk'>이찬혁 멤버 페이지</Link></li>
                            <li><Link to='/AkmuMemSuhyun'>이수현 멤버 페이지</Link></li>
                        </ul>
                    </li>
                    <li className='doruri_map_akmumain_li'><Link to='/IoiMain'>아이오아이 메인 페이지</Link>
                        <ul>
                            <li><Link to='/AkmuMemChanhyuk'>이찬혁 멤버 페이지</Link></li>
                            <li><Link to='/AkmuMemSuhyun'>이수현 멤버 페이지</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
