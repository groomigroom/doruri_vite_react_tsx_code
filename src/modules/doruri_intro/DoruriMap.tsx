import { Link } from 'react-router-dom';

import { useState } from 'react';

import './DoruriMap.css';

import Menu from '../Menu';


export default function DoruriMap() {
    const [DoruriIntroduce, SetDoruriIntroduce] = useState<boolean>(false);
    const DoruriIntroduceToggle = () => {
        SetDoruriIntroduce((DoruriIntroducePrev) => !DoruriIntroducePrev);
    };

    return (
        <div className='doruri_map_full'>
            <Menu />
            <nav className='doruri_map_nav'>
                <ul className='doruri_map_na_main'>
                    <li onClick={DoruriIntroduceToggle} className={`${DoruriIntroduce ? 'on' : ''}`}><a href="#">도루리 소개</a>
                        <ul className={`${DoruriIntroduce ? 'on' : ''}`}>
                            <li><Link to='/'>소개</Link></li>
                            <li><Link to='/DoruriMap'>도루리 사이트 구조</Link></li>
                        </ul>
                    </li>
                    <li><a href="#">아이돌 탐색</a>
                        <ul>
                            <li><Link to="/IdolList">목록</Link></li>
                        </ul>
                    </li>
                    <li><a href="#">33</a>

                    </li>
                    <li><a href="#">44</a>

                    </li>

                </ul>
                {/* 아이돌 탐색 -- 목록 */}
                {/* <ul className='doruri_map_IdolList'>
                    <li className='doruri_map_TriplesMain'><Link to='/TriplesMain'>트리플에스 메인 페이지</Link>
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
                        </ul>
                    </li>
                </ul> */}
            </nav>
        </div>
    );
};


// 이거 참고하기
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import './DoruriMap.css';
// import Menu from '../Menu';

// export default function DoruriMap() {
//     // 마우스가 nav 위에 올라가 있는지 여부를 관리하는 상태
//     const [isNavHovered, setIsNavHovered] = useState<boolean>(false);

//     return (
//         <div className='doruri_map_full'>
//             <Menu />

//             {/* 1. nav 영역 전체에 마우스 오버/아웃 이벤트 부여 */}
//             <nav
//                 className='doruri_map_nav'
//                 onMouseEnter={() => setIsNavHovered(true)}
//                 onMouseLeave={() => setIsNavHovered(false)}
//             >
//                 {/* 메인 메뉴 영역 */}
//                 <ul className='doruri_map_na_main'>
//                     <li><a href="#">도루리 소개</a></li>
//                     <li><a href="#">아이돌 탐색</a></li>
//                     <li><a href="#">33</a></li>
//                     <li><a href="#">44</a></li>
//                 </ul>

//                 {/* 2. 메인 메뉴와 완전히 분리되어 nav 내부에 존재하는 서브메뉴 영역 */}
//                 {/* nav에 마우스가 올라가면 'on' 클래스가 붙습니다 */}
//                 <div className={`doruri_sub_menu_container ${isNavHovered ? 'on' : ''}`}>
//                     {/* 도루리 소개의 서브메뉴 */}
//                     <ul className='sub_introduce'>
//                         <li><Link to='/'>소개</Link></li>
//                         <li><Link to='/DoruriMap'>도루리 사이트 구조</Link></li>
//                     </ul>

//                     {/* 아이돌 탐색의 서브메뉴 */}
//                     <ul className='sub_search'>
//                         <li><Link to="/IdolList">목록</Link></li>
//                     </ul>

//                     {/* 주석 처리하셨던 트리플에스 등 다른 서브메뉴들을 여기에 배치하세요 */}
//                 </div>
//             </nav>
//         </div >
//     );
// }

