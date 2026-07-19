import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import './EpikHighMain.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import EpikHigh_m_logo from './img/EpikHigh_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
// import Tws_m_img from './img/tws_m_tws.jpg';


//#000000

export default function EpikHighMain() {
    return (
        <div className='epi_m_full'>
            <Menu />
            <img src={EpikHigh_m_logo} alt="EpikHigh 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="EpikHigh 로고 꾸미기" />에픽하이<img src={MainH2Deco} alt="EpikHigh 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;에픽하이&apos;와 함께<br />
                아무도 내 맘을 몰라도<br />
                Can't stop!</p>
            <img src="" className='tri_m_img epi_m_img' alt='EpikHigh' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full epi_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/EpiMemTablo' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="타블로 이미지" />
                            <div>
                                <h4>타블로</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/EpiMemTwokutz' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="투컷 이미지" />
                            <div>
                                <h4>투컷</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/EpiMemMithra' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="미쓰라 이미지" />
                            <div>
                                <h4>미쓰라</h4>
                            </div>
                        </article>
                    </Link>
                </section>


            </section>

            <FooterPart />
        </div>
    );
};


