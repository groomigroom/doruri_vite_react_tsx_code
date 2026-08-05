import { Link } from 'react-router-dom';

import './DoruriMap.css';

import Menu from '../Menu';


export default function DoruriMap() {

    return (
        <div className='doruri_map_full'>
            <Menu />
            <nav className='doruri_map_nav'>
                <ul>
                    <li><a href="#">도루리 소개</a>
                        <ul>
                            <li><Link to='/'>소개</Link></li>
                            <li><Link to='/DoruriMap'>도루리 사이트 구조</Link></li>
                        </ul>
                    </li>
                    <li><a href="#">아이돌 탐색</a>
                        <ul>
                            <li><Link to="/DoruriMapIdolList">목록</Link></li>
                        </ul>
                    </li>
                    <li><a href="#">33</a>

                    </li>
                    <li><a href="#">44</a>

                    </li>

                </ul>

            </nav>
        </div>
    );
};




