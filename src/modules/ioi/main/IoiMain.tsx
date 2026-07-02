import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css';
import './IoiMain.css';

// import Tri_m_logo
// import Tri_m_img from './img/tri_m_img.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

import Menu from '../../Menu';

export default function IoiMain() {
    return (
        <div className='ioi_m_full'>
            <Menu />
            <img src="" alt="아이오아이 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="아이오아이 로고 꾸미기" />아이오아이<img src={MainH2Deco} alt="아이오아이 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>우리는 하나이자 스물넷입니다.<br />
                상처, 고난, 또 눈물이 길을 막아도<br />
                &apos;트리플에스&apos;와 함께 고개를 들어 보아요.
            </p>
            <img src="" className='tri_m_img' alt='아이오아이 이미지' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='ioi_m_mem_tr_full'>

                <section className='ioi_m_mem_tr4'>
                    <Link to='/TriplesMemS1' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="임나영 이미지" />
                            <h4>임나영</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS2'>
                        <article className='tri_m_mem'>
                            <img src="" alt="김청하 이미지" />
                            <h4>김청하</h4>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS3'>
                        <article className='tri_m_mem'>
                            <img src="" alt="김세정 이미지" />
                            <h4>김세정</h4>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS4'>
                        <article className='tri_m_mem'>
                            <img src="" alt="정채연 이미지" />
                            <h4>정채연</h4>
                        </article>
                    </Link>
                </section>

                <section className='ioi_m_mem_tr4'>
                    <Link to='/TriplesMemS5'>
                        <article className='tri_m_mem'>
                            <img src="" alt="주결경 이미지" />
                            <h4>주결경</h4>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS6'>
                        <article className='tri_m_mem'>
                            <img src="" alt="김소혜 이미지" />
                            <h4>김소혜</h4>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS7'>
                        <article className='tri_m_mem'>
                            <img src="" alt="유연정 이미지" />
                            <h4>유연정</h4>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS8'>
                        <article className='tri_m_mem'>
                            <img src="" alt="최유정 이미지" />
                            <h4>최유정</h4>
                        </article>
                    </Link>
                </section>

                <section className='ioi_m_mem_tr3'>
                    <Link to='/TriplesMemS5'>
                        <article className='tri_m_mem'>
                            <img src="" alt="강미나 이미지" />
                            <h4>강미나</h4>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS6'>
                        <article className='tri_m_mem'>
                            <img src="" alt="김도연 이미지" />
                            <h4>김도연</h4>
                        </article>
                    </Link>

                    <Link to='/TriplesMemS7'>
                        <article className='tri_m_mem'>
                            <img src="" alt="전소미 이미지" />
                            <h4>전소미</h4>
                        </article>
                    </Link>

                </section>

            </section>
        </div>
    );
};
