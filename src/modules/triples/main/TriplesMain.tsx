import { Link } from 'react-router-dom';

import './TriplesMain.css';

import Tri_m_logo from './img/tri_m_logo.svg';
import Tri_m_img from './img/tri_m_img.jpg';

import Tri_m_memS1 from './img/tri_m_memS1.jpg';
import Tri_m_memS2 from './img/tri_m_memS2.jpg';
import Tri_m_memS3 from './img/tri_m_memS3.jpg';
import Tri_m_memS4 from './img/tri_m_memS4.jpg';
import Tri_m_memS5 from './img/tri_m_memS5.jpg';
import Tri_m_memS6 from './img/tri_m_memS6.jpg';
import Tri_m_memS7 from './img/tri_m_memS7.jpg';
import Tri_m_memS8 from './img/tri_m_memS8.jpg';
import Tri_m_memS9 from './img/tri_m_memS9.jpg';
import Tri_m_memS10 from './img/tri_m_memS10.jpg';
import Tri_m_memS11 from './img/tri_m_memS11.jpg';
import Tri_m_memS12 from './img/tri_m_memS12.jpg';

export default function TriplesMain() {
    return (
        <div className='tri_m_full'>
            <img src={Tri_m_logo} alt="트리플에스 로고" className='tri_m_logo' />
            <p className='tri_m_intropp'>우리는 하나이자 스물넷입니다.<br />
                상처, 고난, 또 눈물이 길을 막아도<br />
                &apos;트리플에스&apos;와 함께 고개를 들어 보아요.
            </p>
            <h2>tripleS</h2>
            <img src={Tri_m_img} className='tri_m_img' />
            <h3>멤버</h3>
            #####
            display: none;

            display: block;
            transform: rotateX??
            <Link to='/TriplesMemS1'>
                <article className='tri_m_mem'>
                    <img src={Tri_m_memS1} alt="윤서연 이미지" />
                    <h4>윤서연</h4>
                </article>
            </Link>
            <Link to='/TriplesMemS2'>
                <article className='tri_m_mem'>
                    <img src={Tri_m_memS2} alt="정혜린 이미지" />
                    <h4>정혜린</h4>
                </article>
            </Link>

            <Link to='/TriplesMemS3'>
                <article className='tri_m_mem'>
                    <img src={Tri_m_memS3} alt="이지우 이미지" />
                    <h4>이지우</h4>
                </article>
            </Link>

            <Link to='/TriplesMemS4'>
                <article className='tri_m_mem'>
                    <img src={Tri_m_memS4} alt="김채연 이미지" />
                    <h4>김채연</h4>
                </article>
            </Link>

            <Link to='/TriplesMemS5'>
                <article className='tri_m_mem'>
                    <img src={Tri_m_memS5} alt="김유연 이미지" />
                    <h4>김유연</h4>
                </article>
            </Link>

            <Link to='/TriplesMemS6'>
                <article className='tri_m_mem'>
                    <img src={Tri_m_memS6} alt="김수민 이미지" />
                    <h4>김수민</h4>
                </article>
            </Link>

            <Link to='/TriplesMemS7'>
                <article className='tri_m_mem'>
                    <img src={Tri_m_memS7} alt="김나경 이미지" />
                    <h4>김나경</h4>
                </article>
            </Link>

            <article className='tri_m_mem'>
                <img src={Tri_m_memS8} alt="공유빈 이미지" />
                <h4>공유빈</h4>
            </article>
            <article className='tri_m_mem'>
                <img src={Tri_m_memS9} alt="카에데 이미지" />
                <h4>카에데</h4>
            </article>
            <article className='tri_m_mem'>
                <img src={Tri_m_memS10} alt="서다현 이미지" />
                <h4>서다현</h4>
            </article>
            <article className='tri_m_mem'>
                <img src={Tri_m_memS11} alt="코토네 이미지" />
                <h4>코토네</h4>
            </article>
            <article className='tri_m_mem'>
                <img src={Tri_m_memS12} alt="곽연지 이미지" />
                <h4>곽연지</h4>
            </article>
            <article className='tri_m_mem'>
                <img src="" alt="" />
                <h4>니엔</h4>
            </article>
            <article className='tri_m_mem'>
                <img src="" alt="" />
                <h4>박소현</h4>
            </article>
            <article className='tri_m_mem'>
                <img src="" alt="" />
                <h4>신위</h4>
            </article>
            <article className='tri_m_mem'>
                <img src="" alt="" />
                <h4>마유</h4>
            </article>
            <article className='tri_m_mem'>
                <img src="" alt="" />
                <h4>린</h4>
            </article>
            <article className='tri_m_mem'>
                <img src="" alt="" />
                <h4>주빈</h4>
            </article>
            <article className='tri_m_mem'>
                <img src="" alt="" />
                <h4>정하연</h4>
            </article>
            <article className='tri_m_mem'>
                <img src="" alt="" />
                <h4>박시온</h4>
            </article>
            <article className='tri_m_mem'>
                <img src="" alt="" />
                <h4>김채원</h4>
            </article>
            <article className='tri_m_mem'>
                <img src="" alt="" />
                <h4>설린</h4>
            </article>
            <article className='tri_m_mem'>
                <img src="" alt="" />
                <h4>서아</h4>
            </article>
            <article className='tri_m_mem'>
                <img src="" alt="" />
                <h4>지연</h4>
            </article>


            <h3>트리플에스 인스타그램</h3>
            <h3>트리플에스 유튜브</h3>


            <Link to="/TriplesEvent">이벤트</Link>
        </div >
    );
};

