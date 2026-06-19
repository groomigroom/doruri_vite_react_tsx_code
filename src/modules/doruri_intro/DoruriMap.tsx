import { Link } from 'react-router-dom';

import './DoruriMap.css';


export default function DoruriMap() {
    return (
        <div className='doruri_map_full'>
            <nav>
                <ul>
                    <li><a href="#">도루리 소개</a>
                        <ul>
                            <li><Link to='/DoruriMap'>도루리 사이트 구성??</Link></li>
                        </ul>
                    </li>
                    <li><a href="#">아이돌 탐색</a>
                        <ul>
                            <li><a href="#">아이돌 목록</a>
                                <ul>
                                    <li><Link to='/TriplesMain'>트리플에스 메인 페이지</Link>
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
                                </ul>
                            </li>
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
