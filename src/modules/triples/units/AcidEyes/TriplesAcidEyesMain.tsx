import { Link } from 'react-router-dom';

import '../../main/TriplesMain.css';
import './TriplesAcidEyesMain.css';

import Menu from '../../../Menu';

import TriplesAci_m_logo from './img/TriplesAci_m_logo.svg';
import MainH2Deco from '../../../img/main_h2_deco.png';
// import Aes_m_img from './img/aespa_m_aespa.jpg';

// import Aes_m_MemKarina_img from './img/aespa_m_mem_Karina.jpg';
// import Aes_m_MemJijell_img from './img/aespa_m_mem_Jijel.jpg';
// import Aes_m_MemWinter_img from './img/aespa_m_mem_Winter.jpg';
// import Aes_m_MemNingning_img from './img/aespa_m_mem_Ningning.jpg';

//#ff00fe

export default function TriplesAcidEyesMain() {
    return (
        <div className='tri_aci_m_full'>
            <Menu />
            <img src={TriplesAci_m_logo} alt="tri_aci 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="tri_aaa 로고 꾸미기" />+&#40;KR&#41;ystal Eyes<img src={MainH2Deco} alt="tri_aaa 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;+&#40;KR&#41;ystal Eyes&apos;와 함께<br />
                더 빠른 하루로<br />
                Boom cherry talk!
            </p>
            <img src="" className='tri_m_img tri_kre_m_img' alt='tri_kre' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full tri_kre_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS1' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="윤서연 이미지" />
                            <h4>윤서연</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS3' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="이지우 이미지" />
                            <h4>이지우</h4>
                        </article>
                    </Link>

                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS4' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="김채연 이미지" />
                            <h4>김채연</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS6' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="김수민 이미지" />
                            <h4>김수민</h4>
                        </article>
                    </Link>


                </section>


            </section>


        </div>
    );
};
