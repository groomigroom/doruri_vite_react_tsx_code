import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import '../../aespa/main/AespaMain.css';

import MenuEng from '../../HomeEng/MenuEng';

import Aes_m_logo from '../../aespa/main/img/Aes_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
// import Aes_m_img from './img/aespa_m_aespa.jpg';

// import Aes_m_MemKarina_img from './img/aespa_m_mem_Karina.jpg';
// import Aes_m_MemJijell_img from './img/aespa_m_mem_Jijel.jpg';
// import Aes_m_MemWinter_img from './img/aespa_m_mem_Winter.jpg';
// import Aes_m_MemNingning_img from './img/aespa_m_mem_Ningning.jpg';

//191919
//ffffff

export default function AespaMainEng() {
    return (
        <div className='aes_m_full'>
            <MenuEng />
            <img src={Aes_m_logo} alt="aespa 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="aespa deco" />aespa<img src={MainH2Deco} alt="aespa deco" /></h2>
            <p className='tri_m_intropp'>
                Let's make Lemonade<br />
                in a different<br />
                world with &apos;aespa&apos;!
            </p>
            <img src='' className='tri_m_img' alt='aespa' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ Members ▪</h2>
            <section className='tri_m_mem_tr_full aes_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/AesMemKarinaEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="카리나 이미지" />
                            <h4>카리나</h4>
                        </article>
                    </Link>
                    <Link to='/AesMemJijellEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="지젤 이미지" />
                            <h4>지젤</h4>
                        </article>
                    </Link>

                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/AesMemWinterEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="윈터 이미지" />
                            <h4>윈터</h4>
                        </article>
                    </Link>
                    <Link to='/AesMemNingningEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="닝닝 이미지" />
                            <h4>닝닝</h4>
                        </article>
                    </Link>


                </section>


            </section>


        </div>
    );
};


