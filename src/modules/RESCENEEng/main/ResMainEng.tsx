import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import '../../RESCENE/main/ResMain.css';

import MenuEng from '../../HomeEng/MenuEng';

import Res_m_logo from '../../RESCENE/main/img/Res_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
// import Res_m_img from './img/rescene_m_rescene.jpg';

// import Res_m_MemWoni_img from './img/rescene_m_mem_Woni.jpg';
// import Res_m_MemLiv_img from './img/rescene_m_mem_Liv.jpg';
// import Res_m_MemMinami_img from './img/rescene_m_mem_Minami.jpg';
// import Res_m_MemMay_img from './img/rescene_m_mem_May.jpg';
// import Res_m_MemJena_img from './img/rescene_m_mem_Jena.jpg';

//191919
//ffffff

export default function ResMainEng() {
    return (
        <div className='res_m_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/ResMain'>한국어</Link>
                <Link to='/ResMainEng' className="on">English</Link>
            </section>
            <img src={Res_m_logo} alt="RESCENE logo" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="RESCENE deco" />RESCENE<img src={MainH2Deco} alt="RESCENE deco" /></h2>
            <p className='tri_m_intropp'>
                Go to good place<br />
                with &apos;RESCENE&apos;<br />
                Runaway!
            </p>
            <img src='' className='tri_m_img' alt="rescene" />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ Members ▪</h2>
            <section className='tri_m_mem_tr_full res_m_mem_tr_full'>
                <section className='res_m_mem_tr3'>
                    <Link to='/ResMemWoniEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Woni" />
                            <h4>Woni</h4>
                        </article>
                    </Link>
                    <Link to='/ResMemLivEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Liv" />
                            <h4>Liv</h4>
                        </article>
                    </Link>
                    <Link to='/ResMemMinamiEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Minami" />
                            <h4>Minami</h4>
                        </article>
                    </Link>
                </section>

                <section className='res_m_mem_tr2'>
                    <Link to='/ResMemMayEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="May" />
                            <h4>May</h4>
                        </article>
                    </Link>
                    <Link to='/ResMemJenaEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Zena" />
                            <h4>Zena</h4>
                        </article>
                    </Link>

                </section>


            </section>


        </div>
    );
};



