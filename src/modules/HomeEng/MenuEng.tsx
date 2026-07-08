import { useState } from 'react';

import { Link } from 'react-router-dom';

import '../Menu.css';

export default function MenuEng() {
    const [MenuEngMOn, MenuEngMIsOn] = useState<boolean>(false);

    const MenuEngOnToggle = () => {
        MenuEngMIsOn(true);
    };

    const MenuEngOffToggle = () => {
        MenuEngMIsOn(false);
    };

    // const [MenuLiOn, MenuLiIsOn] = useState<boolean>(false);



    return (
        <div className="Menu_full">
            <header>
                <Link to='/' className='menu_logo' >
                    <img src="" alt="" />
                </Link>
                <div className="menu_mobile_button" onClick={MenuEngOnToggle}>보기</div>
                <nav className={`menu_nav ${MenuEngMOn ? 'on' : ''}`}>
                    <div className="menu_mobile_off" onClick={MenuEngOffToggle}>닫기</div>
                    <ul>
                        <li><a href="#">Doruri?</a><button className='menu_nav_li_btn1'>메뉴 버튼1</button>
                            <ul>
                                <li><a href="#">Introduce</a></li>
                                <li><a href="/DoruriMap">Site structure</a></li>
                                <li><a href="#">세부3</a></li>
                                <li><a href="#">세부4</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href='#'>Idol search</a>
                            <ul>
                                <li><Link to='/IdolList' onClick={MenuEngOffToggle}>Idol list</Link></li>
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

