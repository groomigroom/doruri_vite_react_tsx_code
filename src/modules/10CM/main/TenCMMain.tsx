import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import './TenCMMain.css';

import Menu from '../../Menu';

import Ten_m_logo from './img/TenCM_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
import Ten_m_img from './img/10cm_m_mem_Gwonjungyeol.jpg';

//000000

export default function TenCMMain() {
    return (
        <div className='ten_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/TenCMMain' className="on">한국어</Link>
                <Link to='/TenCMMainEng'>English</Link>
            </section>
            <img src={Ten_m_logo} alt="10CM 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="10CM 꾸미기" />10CM<img src={MainH2Deco} alt="10CM 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                일말의 가능성이 없더라도<br />
                &apos;10CM&apos;와 함께<br />
                오늘도 힘내 보아요!
            </p>
            <img src={Ten_m_img} className='tri_m_img ten_m_img' alt='10CM' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full ten_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TenMemGwonjungyeol' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Ten_m_img} alt="권정열 이미지" />
                            <div>
                                <h4>권정열</h4>
                            </div>
                        </article>
                    </Link>
                </section>


            </section>


        </div>
    );
};



