import { Link } from 'react-router-dom';

import './DoruriMapIdolList.css';

import Menu from '../../Menu';

export default function DoruriMapIdolList2() {
    return (
        <div className='doruri_map_idollist_full'>
            <Menu />
            <Link to='/DoruriMap' className='doruri_map_idollist_goback'>뒤로가기</Link>
            <Link to='/IdolList' className='doruri_map_idollist_idollist'>목록 보러가기</Link>
            <nav className='doruri_map_idollist_nav'>
                <ul>
                    <li className='doruri_map_triplesmain_li'><Link to='/TriplesMain'>tripleS 메인 페이지</Link>
                        <ul>

                        </ul>
                    </li>

                </ul>


            </nav>
        </div >
    );
}
