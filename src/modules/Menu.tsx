import { useState } from 'react';

import { Link } from 'react-router-dom';

import './Menu.css';

export default function Menu() {
    const [MenuMOn, MenuMIsOn] = useState<boolean>(false);

    const MenuOnToggle = () => {
        MenuMIsOn(true);
    };

    const MenuOffToggle = () => {
        MenuMIsOn(false);
    };

    // const [MenuLiOn, MenuLiIsOn] = useState<boolean>(false);



    return (
        <div className="Menu_full">
            <header>
                <Link to='/' className='menu_logo' >
                    <img src="" alt="" />
                </Link>
                <div className="menu_mobile_button" onClick={MenuOnToggle}>보기</div>
                <nav className={`menu_nav ${MenuMOn ? 'on' : ''}`}>
                    <div className="menu_mobile_off" onClick={MenuOffToggle}>닫기</div>
                    <ul>
                        <li><a href="#">도루리는?</a><button className='menu_nav_li_btn1'>메뉴 버튼1</button>
                            <ul>
                                <li><a href="#">소개</a></li>
                                <li><a href="/DoruriMap">도루리 사이트 구조</a></li>
                                <li><a href="#">세부3</a></li>
                                <li><a href="#">세부4</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href='#'>아이돌 탐색</a>
                            <ul>
                                <li><Link to='/IdolList' onClick={MenuOffToggle}>목록</Link></li>
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
