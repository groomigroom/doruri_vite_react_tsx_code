import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './IllMemYunah.css';

import Menu from '../../Menu';

import ill_mm_yunah_img from '../main/img/illit_m_mem_Yunah.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IllMemYunah() {
    return (
        <div className="ill_mm_yunah_full">
            <Menu />
            <section className="home_translate">
                <Link to='/IllMemYunah' className="on">한국어</Link>
                <Link to='/IllMemYunahEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="illit 로고 꾸미기" />윤아<img src={MainH2Deco} alt="illit 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                진지하고<br />
                자신감 넘치게<br />
                여러분을 만나러 갈게요!</p>
            <img src={ill_mm_yunah_img} alt="윤아 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2004년 1월 15일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>168cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>캐릭터</p></td>
                        <td><p>치티</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENFP</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>노츄리</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>동요 부르기</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td>
                            <p>모델 워킹</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>감성적임</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

