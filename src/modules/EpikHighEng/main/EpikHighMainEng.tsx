import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import '../../EpikHigh/main/EpikHighMain.css';

import MenuEng from '../../HomeEng/MenuEng';

import EpikHigh_m_logo from '../../EpikHigh/main/img/EpikHigh_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
// import Tws_m_img from './img/tws_m_tws.jpg';


//#000000

export default function EpikHighMainEng() {
    return (
        <div className='epi_m_full'>
            <MenuEng />
            <img src={EpikHigh_m_logo} alt="EpikHigh logo" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="EpikHigh deco" />EPIK HIGH<img src={MainH2Deco} alt="EpikHigh deco" /></h2>
            <p className='tri_m_intropp'>
                #####Twenty four seven<br />
                &apos;TWS&apos;와 함께<br />
                새로운 가능성을 찾아 봐요!</p>
            <img src="" className='tri_m_img epi_m_img' alt='EPIK HIGH' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ Members ▪</h2>
            <section className='tri_m_mem_tr_full epi_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/EpiMemTabloEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="Tablo" />
                            <h4>Tablo</h4>
                        </article>
                    </Link>
                    <Link to='/EpiMemTwokutzEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="Tukutz" />
                            <h4>Tukutz</h4>
                        </article>
                    </Link>
                    <Link to='/EpiMemMithraEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="Mithra" />
                            <h4>Mithra</h4>
                        </article>
                    </Link>
                </section>


            </section>


        </div>
    );
};




