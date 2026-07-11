import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import '../../illit/main/IllitMain.css';

import MenuEng from '../../HomeEng/MenuEng';

import Ill_m_logo from '../../illit/main/img/Ill_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
// import Ill_m_img from './img/illit_m_illit.jpg';

// import Ill_m_MemYunah_img from './img/illit_m_mem_Yunah.jpg';
// import Ill_m_MemMinju_img from './img/illit_m_mem_Minju.jpg';
// import Ill_m_MemMoka_img from './img/illit_m_mem_Moka.jpg';
// import Ill_m_MemWonhee_img from './img/illit_m_mem_Wonhee.jpg';
// import Ill_m_MemEroha_img from './img/illit_m_mem_Iroha.jpg';

//191919
//FFFFFF

export default function IllitMainEng() {
    return (
        <div className='ill_m_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/IllitMain'>한국어</Link>
                <Link to='/IllitMainEng' className="on">English</Link>
            </section>
            <img src={Ill_m_logo} alt="illit logo" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="illit deco" />ILLIT<img src={MainH2Deco} alt="illit deco" /></h2>
            <p className='tri_m_intropp'>
                &apos;ILLIT&apos;과 함께<br />
                Who's your bias?<br />
                I'm your bias!
            </p>
            <img src='' className='tri_m_img' alt='illit' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ Members ▪</h2>
            <section className='tri_m_mem_tr_full ill_m_mem_tr_full'>
                <section className='ill_m_mem_tr3'>
                    <Link to='/IllMemYunahEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Yunah" className='ill_m_mem_img' />
                            <h4>Yunah</h4>
                        </article>
                    </Link>
                    <Link to='/IllMemMinjuEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Minju" />
                            <h4>Minju</h4>
                        </article>
                    </Link>
                    <Link to='/IllMemMokaEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Moka" />
                            <h4>Moka</h4>
                        </article>
                    </Link>
                </section>

                <section className='ill_m_mem_tr2'>
                    <Link to='/IllMemWonheeEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Wonhee" />
                            <h4>Wonhee</h4>
                        </article>
                    </Link>
                    <Link to='/IllMemErohaEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Iroha" />
                            <h4>Iroha</h4>
                        </article>
                    </Link>

                </section>


            </section>

        </div>
    );
};



