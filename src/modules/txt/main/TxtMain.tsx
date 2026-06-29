import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import './TxtMain.css';

import Menu from '../../Menu';

import Txt_m_logo from './img/txt_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';

export default function TxtMain() {
    return (
        <div className='txt_m_full'>
            <Menu />
            <img src={Txt_m_logo} alt="트리플에스 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="투바투 로고 꾸미기" />투모로우바이투게더<img src={MainH2Deco} alt="투바투 로고 꾸미기" /></h2>
            <p>
                #####
                하루에 하루만 더<br />
                &apos;투모로우바이투게더&apos;와 함께 힘내 보아요.</p>


            <h3>멤버</h3>
            <article className='txt_m_mem'>
                <img src="" alt="" />
                <h4>수빈</h4>
            </article>
            <article className='txt_m_mem'>
                <img src="" alt="" />
                <h4>연준</h4>
            </article>
            <article className='txt_m_mem'>
                <img src="" alt="" />
                <h4>범규</h4>
            </article>
            <article className='txt_m_mem'>
                <img src="" alt="" />
                <h4>태현</h4>
            </article>
            <article className='txt_m_mem'>
                <img src="" alt="" />
                <h4>휴닝카이</h4>
            </article>



            <Link to="/TxtEvent">이벤트</Link>
        </div>
    );
};
