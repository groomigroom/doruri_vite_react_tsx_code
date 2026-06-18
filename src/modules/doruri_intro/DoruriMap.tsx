import { Link } from 'react-router-dom';



export default function DoruriMap() {
    return (
        <div>
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
        </div>
    );
};