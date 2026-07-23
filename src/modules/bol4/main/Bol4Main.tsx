import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import '../../10CM/main/TenCMMain.css';
import './Bol4Main.css'

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Bol_m_logo from './img/Bol_m_logo.png';
import MainH2Deco from '../../img/main_h2_deco.png';
import Bol_m_img from './img/bol4_m_mem_Anjiyoung.jpg';

//191919
//ffffff

export default function Bol4Main() {
    return (
        <div className='bol_m_full'>
            <Menu />
            <img src={Bol_m_logo} alt="볼빨간사춘기 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="볼빨간사춘기 꾸미기" />볼빨간사춘기<img src={MainH2Deco} alt="볼빨간사춘기 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;볼빨간사춘기&apos;와 함께<br />
                작고 단단한 마음으로<br />
                어딘가를 찾아 가봐요!</p>
            <img src={Bol_m_img} className='tri_m_img' alt='볼빨간사춘기' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full ten_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/BolMemAnjiyoung' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Bol_m_img} alt="안지영 이미지" />
                            <div>
                                <h4>안지영</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            {/* 모바일 멤버 보기 */}
            <section className="tri_m_mem_tr_full_mobile bol_m_mem_tr_full_mobile">
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr1'>
                        <Link to='/BolMemAnjiyoung' className='tri_m_mem_a'>
                            <img src={Bol_m_img} alt="안지영 이미지" />
                            <h4>안지영</h4>
                        </Link>
                    </section>
                </section>
            </section>
            <FooterPart FooterPartText='ⓒ 켄버스' />
        </div>
    );
};



