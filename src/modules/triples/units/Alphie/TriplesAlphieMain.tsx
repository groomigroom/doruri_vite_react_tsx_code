import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../../DoruriDocumentTitle';

import '../../main/TriplesMain.css';
import './TriplesAlphieMain.css';

import Menu from '../../../Menu';
import FooterPart from '../../../FooterPart';

import TriplesAlphie_m_logo from './img/TriplesAlphie_m_logo.svg';
import MainH2Deco from '../../../img/main_h2_deco.png';
import TriplesAlphie_m_img from './img/TriplesAlphie_m_img.jpg';

import TriplesAlphie_s5_img from './img/TriplesAlphie_s5_img.jpg';
import TriplesAlphie_s11_img from './img/TriplesAlphie_s11_img.jpg';
import TriplesAlphie_s13_img from './img/TriplesAlphie_s13_img.jpg';
import TriplesAlphie_s17_img from './img/TriplesAlphie_s17_img.jpg';
import TriplesAlphie_s19_img from './img/TriplesAlphie_s19_img.jpg';
import TriplesAlphie_s20_img from './img/TriplesAlphie_s20_img.jpg';
import TriplesAlphie_s21_img from './img/TriplesAlphie_s21_img.jpg';
import TriplesAlphie_s24_img from './img/TriplesAlphie_s24_img.jpg';

//#191919

export default function TriplesAlphieMain() {
    DoruriDocumentTitle('Alphie');

    return (
        <div className='tri_alp_m_full'>
            <Menu />
            <img src={TriplesAlphie_m_logo} alt="tri_alp 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="tri_alp 로고 꾸미기" />Alphie<img src={MainH2Deco} alt="tri_aci 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;Alphie&apos;와 함께<br />
                좋아하는 것을<br />
                함께 찾아 가봐요!
            </p>
            <img src={TriplesAlphie_m_img} className='tri_m_img' alt='tri_alp' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full tri_alp_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS5' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesAlphie_s5_img} alt="김유연 이미지" />
                            <div>
                                <h4>김유연</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS11' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesAlphie_s11_img} alt="코토네 이미지" />
                            <div>
                                <h4>코토네</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS13' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesAlphie_s13_img} alt="니엔 이미지" />
                            <div>
                                <h4>니엔</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS17' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesAlphie_s17_img} alt="린 이미지" />
                            <div>
                                <h4>린</h4>
                            </div>
                        </article>
                    </Link>

                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS19' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesAlphie_s19_img} alt="정하연 이미지" />
                            <div>
                                <h4>정하연</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS20' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesAlphie_s20_img} alt="박시온 이미지" />
                            <div>
                                <h4>박시온</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS21' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesAlphie_s21_img} alt="김채원 이미지" />
                            <div>
                                <h4>김채원</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS24' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesAlphie_s24_img} alt="지연 이미지" />
                            <div>
                                <h4>지연</h4>
                            </div>
                        </article>
                    </Link>

                </section>

            </section>
            <FooterPart FooterPartText='ⓒ ㈜모드하우스' />
        </div>
    );
};


