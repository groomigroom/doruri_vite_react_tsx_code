import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import '../../aespa/main/AespaMain.css';
import './DAY6Main.css';

import Menu from '../../Menu';

// import Txt_m_logo from './img/txt_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
// import txt_m_img from './img/txt_m_txtimg.jpg';

export default function DAY6Main() {
    return (
        <div className='day_m_full'>
            <Menu />
            <img src="" alt="aespa 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="DAY6 꾸미기" />DAY6<img src={MainH2Deco} alt="DAY6 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                혹시 꿈을 찾고 있나요?<br />
                아니면 접고 있나요?<br />
                &apos;DAY6&apos;와 함께 꿈을 꿔봐요!
            </p>
            <img src="" className='tri_m_img txt_m_img' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full aes_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/DayMemSungjin' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="성진 이미지" />
                            <h4>성진</h4>
                        </article>
                    </Link>
                    <Link to='/DayMemYoungK' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="Young K 이미지" />
                            <h4>Young K</h4>
                        </article>
                    </Link>

                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/DayMemWonpil' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="원필 이미지" />
                            <h4>원필</h4>
                        </article>
                    </Link>
                    <Link to='/DayMemDowoon' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="도운 이미지" />
                            <h4>도운</h4>
                        </article>
                    </Link>


                </section>


            </section>
        </div>
    );
};
