import { Link } from 'react-router-dom';

import './Menu.css';

export default function Menu() {
    return (
        <div className="Menu_full">
            <header>
                <nav className='menu_nav'>
                    <ul>
                        <li><a href="#">도루리는?</a>
                            <ul>
                                <li><a href="#">소개</a></li>
                                <li><a href="#">세부2</a></li>
                                <li><a href="#">세부3</a></li>
                                <li><a href="#">세부4</a></li>
                            </ul>
                        </li>
                        <li><a href="#">아이돌 탐색</a>
                            <ul>
                                <li><Link to='/IdolList'>목록</Link></li>
                                <li><a href="#">세부2</a></li>
                                <li><a href="#">세부3</a></li>
                                <li><a href="#">세부4</a></li>
                            </ul>
                        </li>
                        <li><a href="#">메뉴1</a>
                            <ul>
                                <li><a href="#">세부1</a></li>
                                <li><a href="#">세부2</a></li>
                                <li><a href="#">세부3</a></li>
                                <li><a href="#">세부4</a></li>
                            </ul>
                        </li>
                        <li><a href="#">메뉴1</a>
                            <ul>
                                <li><a href="#">세부1</a></li>
                                <li><a href="#">세부2</a></li>
                                <li><a href="#">세부3</a></li>
                                <li><a href="#">세부4</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
