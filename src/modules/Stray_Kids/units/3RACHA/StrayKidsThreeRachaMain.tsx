import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../../DoruriDocumentTitle';

import '../../../triples/main/TriplesMain.css'
import './StrayKidsThreeRachaMain.css';

import Menu from '../../../Menu';
import FooterPart from '../../../FooterPart';

import StrayKids3Racha_m_logo from './img/StrayKids3Racha_m_logo.png';
import MainH2Deco from '../../../img/main_h2_deco.png';
import StrayKids3Racha_m_img from './img/StrayKids3Racha_m_img.jpg';

import StrayMemBangchan_img from '../../main/img/stray_m_mem_Bangchan.jpg';
import StrayMemChangbin_img from '../../main/img/stray_m_mem_Changbin.jpg';
import StrayMemHan_img from '../../main/img/stray_m_mem_Han.jpg';


//#191919

export default function StrayKidsThreeRachaMain() {
    DoruriDocumentTitle('3RACHA');

    return (
        <div className='str_3racha_m_full'>
            <Menu />
            <img src={StrayKids3Racha_m_logo} alt="3RACHA 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="3RACHA 꾸미기" />3RACHA<img src={MainH2Deco} alt="3RACHA 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;Stray Kids&apos;의 핵심적인<br />
                존재로서 열심히<br />
                활동해 볼게요!
            </p>
            <img src={StrayKids3Racha_m_img} className='tri_m_img' alt='3RACHA' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full str_3racha_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/StrayMemBangchan' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={StrayMemBangchan_img} alt="방찬 이미지" />
                            <div>
                                <h4>방찬</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/StrayMemChangbin' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={StrayMemChangbin_img} alt="창빈 이미지" />
                            <div>
                                <h4>창빈</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/StrayMemHan' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={StrayMemHan_img} alt="한 이미지" />
                            <div>
                                <h4>한</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            {/* 모바일 보기용 */}
            {/* <section className="tri_m_mem_tr_full_mobile epi_m_mem_tr_full_mobile">
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/EpiMemTablo' className='tri_m_mem_a'>
                            <img src="" alt="타블로 이미지" />
                            <h4>타블로</h4>
                        </Link>
                        <Link to='/EpiMemTwokutz' className='tri_m_mem_a'>
                            <img src="" alt="투컷 이미지" />
                            <h4>투컷</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr1'>
                        <Link to='/EpiMemMithra' className='tri_m_mem_a'>
                            <img src="" alt="미쓰라 이미지" />
                            <h4>미쓰라</h4>
                        </Link>
                    </section>
                </section>

            </section> */}
            <FooterPart FooterPartText='ⓒ JYP엔터테인먼트' />
        </div >
    );
};
