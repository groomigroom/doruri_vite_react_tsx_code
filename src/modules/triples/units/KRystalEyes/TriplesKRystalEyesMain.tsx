import { Link } from 'react-router-dom';

import '../../main/TriplesMain.css';
import './TriplesKRystalEyesMain.css';

import Menu from '../../../Menu';

import TriplesAAA_m_logo from './img/TriplesAcidAngelFromAsia_m_logo.svg';
import MainH2Deco from '../../../img/main_h2_deco.png';
// import Aes_m_img from './img/aespa_m_aespa.jpg';

// import Aes_m_MemKarina_img from './img/aespa_m_mem_Karina.jpg';
// import Aes_m_MemJijell_img from './img/aespa_m_mem_Jijel.jpg';
// import Aes_m_MemWinter_img from './img/aespa_m_mem_Winter.jpg';
// import Aes_m_MemNingning_img from './img/aespa_m_mem_Ningning.jpg';

//DB3475

export default function TriplesKRystalEyesMain() {
    return (
        <div className='tri_kre_m_full'>
            <Menu />
            <img src={TriplesAAA_m_logo} alt="tri_aaa 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="tri_aaa 로고 꾸미기" />Acid Angel from Asia<img src={MainH2Deco} alt="tri_aaa 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;Acid Angel from Asia&apos;와 함께<br />
                여기에서 Together<br />
                무질서한 그대로
            </p>
            <img src="" className='tri_m_img tri_aaa_m_img' alt='tri_aaa' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full tri_aaa_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS2' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="정혜린 이미지" />
                            <h4>정혜린</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS5' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="김유연 이미지" />
                            <h4>김유연</h4>
                        </article>
                    </Link>

                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS7' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="김나경 이미지" />
                            <h4>김나경</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS8' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="공유빈 이미지" />
                            <h4>공유빈</h4>
                        </article>
                    </Link>


                </section>


            </section>


        </div>
    );
};
