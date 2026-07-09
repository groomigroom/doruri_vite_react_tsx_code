import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css';
import '../../ioi/main/IoiMain.css';

import Ioi_m_logo from '../../ioi/main/img/Ioi_m_logo.png';
// import Ioi_m_img from './img/ioi_m_ioi.jpg';

// import Ioi_m_MemImnayoung_img from './img/ioi_m_mem_Imnayoung.jpg';
// import Ioi_m_MemKimchungha_img from './img/ioi_m_mem_Kimchungha.jpg';
// import Ioi_m_MemKimsejung_img from './img/ioi_m_mem_Kimsejung.jpg';
// import Ioi_m_MemJungcheyun_img from './img/ioi_m_mem_Jungchaeyun.jpg';
// import Ioi_m_MemJugyulgyoung_img from './img/ioi_m_mem_Jugyulgyung.jpg';
// import Ioi_m_MemKimsohye_img from './img/ioi_m_mem_Kimsohye.jpg';
// import Ioi_m_MemYuyeonjung_img from './img/ioi_m_mem_Yuyunjung.jpg';
// import Ioi_m_MemChoiyujung_img from './img/ioi_m_mem_Choiyujung.jpg';
// import Ioi_m_MemGangmina_img from './img/ioi_m_mem_Gangmina.jpg';
// import Ioi_m_MemKimdoyeon_img from './img/ioi_m_mem_Kimdoyeon.jpg';
// import Ioi_m_MemJeonsomi_img from './img/ioi_m_mem_Jeonsomi.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

import MenuEng from '../../HomeEng/MenuEng';

//#F4CE9D


export default function IoiMainEng() {
    return (
        <div className='ioi_m_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/IoiMain'>한국어</Link>
                <Link to='/IoiMainEng' className="on">English</Link>
            </section>
            <img src={Ioi_m_logo} alt="I.O.I logo" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="I.O.I deco" />I.O.I<img src={MainH2Deco} alt="I.O.I deco" /></h2>
            <p className='tri_m_intropp'>
                I came here out of the blue<br />
                with &apos;I.O.I&apos;<br />
                Let's have a good day!
            </p>
            <img src='' className='tri_m_img ioi_m_img' alt='I.O.I' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ Members ▪</h2>
            <section className='ioi_m_mem_tr_full'>

                <section className='ioi_m_mem_tr4'>
                    <Link to='/IoiMemImnayoungEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Lim Na Young" />
                            <h4>Lim Na Young</h4>
                        </article>
                    </Link>
                    <Link to='/IoiMemKimchunghaEng'>
                        <article className='tri_m_mem'>
                            <img src='' alt="CHUNG HA" />
                            <h4>CHUNG HA</h4>
                        </article>
                    </Link>

                    <Link to='/IoiMemKimsejungEng'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Kim Sejeong" />
                            <h4>Kim Sejeong</h4>
                        </article>
                    </Link>

                    <Link to='/IoiMemJungcheyunEng'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Jung Chaeyeon" />
                            <h4>Jung Chaeyeon</h4>
                        </article>
                    </Link>
                </section>

                <section className='ioi_m_mem_tr4'>
                    <Link to='/IoiMemJugyulgyoungEng'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Zhou Jieqiong" />
                            <h4>Zhou Jieqiong</h4>
                        </article>
                    </Link>

                    <Link to='/IoiMemKimsohyeEng'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Kim So Hye" />
                            <h4>Kim So Hye</h4>
                        </article>
                    </Link>

                    <Link to='/IoiMemYuyeonjungEng'>
                        <article className='tri_m_mem'>
                            <img src='' alt="YEONJUNG" />
                            <h4>YEONJUNG</h4>
                        </article>
                    </Link>

                    <Link to='/IoiMemChoiyujungEng'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Choi Yoojung" />
                            <h4>Choi Yoojung</h4>
                        </article>
                    </Link>
                </section>

                <section className='ioi_m_mem_tr3'>
                    <Link to='/IoiMemGangminaEng'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Kang Mina" />
                            <h4>Kang Mina</h4>
                        </article>
                    </Link>

                    <Link to='/IoiMemKimdoyeonEng'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Kim Doyeon" />
                            <h4>Kim Doyeon</h4>
                        </article>
                    </Link>

                    <Link to='/IoiMemJeonsomiEng'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Jeon Somi" />
                            <h4>Jeon Somi</h4>
                        </article>
                    </Link>

                </section>

            </section>
        </div>
    );
};

