import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import '../../Hanroro/main/HanroroMain.css';

import MenuEng from '../../HomeEng/MenuEng';

//import Han_m_logo from './img/TenCM_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
//import Ten_m_img from './img/10cm_m_mem_Gwonjungyeol.jpg';

//color code

export default function HanroroMainEng() {
    return (
        <div className='han_m_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/HanroroMain'>한국어</Link>
                <Link to='/HanroroMainEng' className="on">English</Link>
            </section>
            <img src='' alt="한로로 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="Hanroro" />Hanroro<img src={MainH2Deco} alt="Hanroro" /></h2>
            <p className='tri_m_intropp'>
                Let's go around with &apos;Hanroro&apos;<br />
                and have good thoughts<br />
                in the world!
            </p>
            <img src='' className='tri_m_img ten_m_img' alt='Hanroro' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 소개 ▪</h2>
            <section className='tri_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/HanMemHanroro' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="한로로 이미지" />
                            <div>
                                <h4>한로로</h4>
                            </div>
                        </article>
                    </Link>
                </section>


            </section>


        </div>
    );
};
