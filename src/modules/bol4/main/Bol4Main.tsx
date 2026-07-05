import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import '../../10CM/main/TenCMMain.css';
import './Bol4Main.css'

import Menu from '../../Menu';

// import Txt_m_logo from './img/txt_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
// import txt_m_img from './img/txt_m_txtimg.jpg';

export default function Bol4Main() {
    return (
        <div className='bol_m_full'>
            <Menu />
            <img src="" alt="10CM 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="볼빨간사춘기 꾸미기" />볼빨간사춘기<img src={MainH2Deco} alt="볼빨간사춘기 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                #####<br />
                하루에 하루만 더<br />
                &apos;투모로우바이투게더&apos;와 함께 힘내 보아요.</p>
            <img src="" className='tri_m_img txt_m_img' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full ten_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TenMemGwonjungyeol' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="안지영 이미지" />
                            <h4>안지영</h4>
                        </article>
                    </Link>
                </section>


            </section>


        </div>
    );
};



