import '../../triples/members/TriplesMemS1.css';
import './BolMemAnjiyoung.css';

import Menu from '../../Menu';

import Bol_mm_Anjiyoung_img from '../main/img/bol4_m_mem_Anjiyoung.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function BolMemAnjiyoung() {
    return (
        <div className="bol_mm_anjiyoung_full">
            <Menu />
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="볼빨간사춘기 꾸미기" />안지영<img src={MainH2Deco} alt="볼빨간사춘기 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                제 감수성을 담은<br />
                노래들을 가지고<br />
                여러분을 찾아 갈게요!</p>
            <img src={Bol_mm_Anjiyoung_img} alt="안지영 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb bol_mm_anjiyoung_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1995년 9월 14일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>165cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>메인 보컬</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>졍</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>감수성이 풍부함</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

};

