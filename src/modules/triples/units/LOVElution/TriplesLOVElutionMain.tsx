import { Link } from 'react-router-dom';

import '../../main/TriplesMain.css';
import './TriplesLOVElutionMain.css';

import Menu from '../../../Menu';

import TriplesLov_m_logo from './img/TriplesLov_m_logo.svg';
import MainH2Deco from '../../../img/main_h2_deco.png';
// import Aes_m_img from './img/aespa_m_aespa.jpg';

// import Aes_m_MemKarina_img from './img/aespa_m_mem_Karina.jpg';
// import Aes_m_MemJijell_img from './img/aespa_m_mem_Jijel.jpg';
// import Aes_m_MemWinter_img from './img/aespa_m_mem_Winter.jpg';
// import Aes_m_MemNingning_img from './img/aespa_m_mem_Ningning.jpg';

//#000000

export default function TriplesLOVElutionMain() {
    return (
        <div className='tri_lov_m_full'>
            <Menu />
            <img src={TriplesLov_m_logo} alt="tri_aci 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="tri_aci 로고 꾸미기" />LOVElution<img src={MainH2Deco} alt="tri_aci 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;LOVElution&apos;과 함께<br />
                지금 내가 자신 있게<br />
                반짝일 수 있게!
            </p>
            <img src="" className='tri_m_img tri_lov_m_img' alt='tri_aci' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full tri_lov_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS1' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="윤서연 이미지" />
                            <h4>윤서연</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS2' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="정혜린 이미지" />
                            <h4>정혜린</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS8' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="공유빈 이미지" />
                            <h4>공유빈</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS9' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="카에데 이미지" />
                            <h4>카에데</h4>
                        </article>
                    </Link>

                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS10' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="서다현 이미지" />
                            <h4>서다현</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS13' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="니엔 이미지" />
                            <h4>니엔</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS14' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="박소현 이미지" />
                            <h4>박소현</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS15' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="신위 이미지" />
                            <h4>신위</h4>
                        </article>
                    </Link>


                </section>


            </section>


        </div>
    );
};


