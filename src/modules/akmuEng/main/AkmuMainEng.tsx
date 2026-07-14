import { Link } from 'react-router-dom';

import "../../triples/main/TriplesMain.css";
import "../../akmu/main/AkmuMain.css";

import Akmu_m_logo from '../../akmu/main/img/akmu_m_logo.svg';
import Akmu_m_img from '../../akmu/main/img/aknu_m_akmuimg.jpg';

import Akmu_m_chanhyuk from '../../akmu/main/img/aknu_m_chanhyuk.jpg';
import Akmu_m_suhyun from '../../akmu/main/img/aknu_m_suhyun.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

import MenuEng from '../../HomeEng/MenuEng';

export default function AkmuMainEng() {
    return (
        <div className='akmu_m_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/AkmuMain'>한국어</Link>
                <Link to='/AkmuMainEng' className="on">English</Link>
            </section>
            <img src={Akmu_m_logo} alt="AKMU logo" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="AKMU deco" />AKMU<img src={MainH2Deco} alt="AKMU deco" /></h2>
            <p className='tri_m_intropp'>
                Don't get tired and sick<br />
                With &apos;AKMU&apos;<br />
                I hope you cheer up today!
            </p>
            <img src={Akmu_m_img} className='tri_m_img akmu_m_img' alt='akmu' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ Members ▪</h2>
            <section className='tri_m_mem_tr_full akmu_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/AkmuMemChanhyukEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Akmu_m_chanhyuk} alt="Lee Chanhyuk 이미지" />
                            <div>
                                <h4>Lee Chanhyuk</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/AkmuMemSuhyunEng'>
                        <article className='tri_m_mem'>
                            <img src={Akmu_m_suhyun} alt="Lee Suhyun 이미지" />
                            <div>
                                <h4>Lee Suhyun</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <Link to='/AkmuEvent'>이벤트로 가기</Link>
        </div>
    );
};

