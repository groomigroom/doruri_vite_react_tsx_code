import { Link } from 'react-router-dom';

import './DoruriMapIdolList.css';
import './DoruriMapIdolList2.css'

import Menu from '../../Menu';

export default function DoruriMapIdolList2() {
    return (
        <div className='doruri_map_idollist2_full'>
            <Menu />
            <Link to='/DoruriMapIdolList' className='doruri_map_idollist_goback'>뒤로가기</Link>
            <Link to='/IdolList2' className='doruri_map_idollist_idollist'>목록 2 보러가기</Link>
            <nav className='doruri_map_idollist_nav'>
                <ul>
                    <li className='doruri_map_tenmain_li'><Link to='/Bol4Main'>볼빨간사춘기 메인 페이지</Link>
                        <ul>
                            <li><Link to='/BolMemAnjiyoung'>안지영 멤버 페이지</Link></li>
                        </ul>
                    </li>

                </ul>


            </nav>
        </div >
    );
}
