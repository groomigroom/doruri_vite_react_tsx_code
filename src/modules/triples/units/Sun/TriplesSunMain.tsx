import { Link } from 'react-router-dom';

import '../../main/TriplesMain.css';
import './TriplesSunMain.css';

import Menu from '../../../Menu';

import TriplesSun_m_logo from './img/TriplesSun_m_logo.svg';
import MainH2Deco from '../../../img/main_h2_deco.png';
import TriplesSun_m_img from './img/TriplesSun_m_img.jpg';

import TriplesSun_m_S2_img from '../../main/img/tri_m_memS2.jpg';
import TriplesSun_m_S4_img from '../../main/img/tri_m_memS4.jpg';
import TriplesSun_m_S5_img from '../../main/img/tri_m_memS5.jpg';
import TriplesSun_m_S15_img from '../../main/img/tri_m_memS15.jpg';
import TriplesSun_m_S16_img from '../../main/img/tri_m_memS16.jpg';
import TriplesSun_m_S21_img from '../../main/img/tri_m_memS21.jpg';


//#e3b4c8

export default function TriplesSunMain() {
    return (
        <div className='tri_sun_m_full'>
            <Menu />
            <img src={TriplesSun_m_logo} alt="tri_sun 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="tri_sun 로고 꾸미기" />sun<img src={MainH2Deco} alt="tri_neptune 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;sun&apos;과 함께<br />
                터질지 몰라<br />
                Bubble Gum Bubble Gum!
            </p>
            <img src={TriplesSun_m_img} className='tri_m_img tri_sun_m_img' alt='tri_sun' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full tri_sun_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS2' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesSun_m_S2_img} alt="정혜린 이미지" />
                            <h4>정혜린</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS4' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesSun_m_S4_img} alt="김채연 이미지" />
                            <h4>김채연</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS5' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesSun_m_S5_img} alt="김유연 이미지" />
                            <h4>김유연</h4>
                        </article>
                    </Link>

                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS15' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesSun_m_S15_img} alt="신위 이미지" />
                            <h4>신위</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS16' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesSun_m_S16_img} alt="마유 이미지" />
                            <h4>마유</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS21' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={TriplesSun_m_S21_img} alt="김채원 이미지" />
                            <h4>김채원</h4>
                        </article>
                    </Link>

                </section>


            </section>


        </div>
    );
};









