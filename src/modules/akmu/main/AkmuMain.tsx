import { Link } from 'react-router-dom';

import "../../triples/main/TriplesMain.css";
import "./AkmuMain.css";

import Akmu_m_logo from './img/akmu_m_logo.svg';
import Akmu_m_img from './img/aknu_m_akmuimg.jpg';

import Akmu_m_chanhyuk from './img/aknu_m_chanhyuk.jpg';
import Akmu_m_suhyun from './img/aknu_m_suhyun.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

import Menu from '../../Menu';

export default function AkmuMain() {
    return (
        <div className='akmu_m_full'>
            <Menu />
            <img src={Akmu_m_logo} alt="AKMU 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="AKMU 로고 꾸미기" />AKMU<img src={MainH2Deco} alt="AKMU 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>지치고 병들지 말고<br />
                &apos;AKMU&apos;와 함께<br />
                오늘도 힘내길 바래요!
            </p>
            <img src={Akmu_m_img} className='tri_m_img akmu_m_img' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full akmu_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/AkmuMemChanhyuk' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Akmu_m_chanhyuk} alt="이찬혁 이미지" />
                            <h4>이찬혁</h4>
                        </article>
                    </Link>
                    <Link to='/AkmuMemSuhyun'>
                        <article className='tri_m_mem'>
                            <img src={Akmu_m_suhyun} alt="이수현 이미지" />
                            <h4>이수현</h4>
                        </article>
                    </Link>
                </section>
            </section>

            <Link to='/AkmuEvent'>이벤트로 가기</Link>
        </div>
    );
};
