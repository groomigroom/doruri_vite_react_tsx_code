// import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import './StrayKidsMain.css';

import Menu from '../../Menu';

// import Txt_m_logo from './img/txt_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
// import txt_m_img from './img/txt_m_txtimg.jpg';

// import Txt_m_memSubin from './img/txt_m_mem_subin.jpg';
// import Txt_m_memYeonjun from './img/txt_m_mem_yeonjun.jpg';
// import Txt_m_memBeomgyu from './img/txt_m_mem_beomgyu.jpg';
// import Txt_m_memTaehyun from './img/txt_m_mem_taehyun.jpg';
// import Txt_m_memHueningkai from './img/txt_m_mem_hueningkai.jpg';

export default function StrayKidsMain() {
    <div className='txt_m_full'>
        <Menu />
        <img src="" alt="스트레이 키즈 로고" className='tri_m_logo' />
        <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="스트레이 키즈 로고 꾸미기" />투모로우바이투게더<img src={MainH2Deco} alt="스트레이 키즈 로고 꾸미기" /></h2>
        <p className='tri_m_intropp'>
            #####<br />
            하루에 하루만 더<br />
            &apos;투모로우바이투게더&apos;와 함께 힘내 보아요.</p>
        <img src="" className='tri_m_img txt_m_img' />
        <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
    </div>
};
