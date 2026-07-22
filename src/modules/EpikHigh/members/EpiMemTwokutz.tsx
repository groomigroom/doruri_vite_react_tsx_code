import '../../triples/members/TriplesMemS1.css';
import './EpiMemTwokutz.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

// import Txt_mm_Beomgyu_img from '../main/img/txt_m_mem_beomgyu.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function EpiMemTwokutz() {
    return (
        <div className="epi_mm_twokutz_full">
            <Menu />
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="EpikHigh 꾸미기" />투컷<img src={MainH2Deco} alt="EpikHigh 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                &apos;투컷&apos;과 함께<br />
                좋은 것을 보고<br />
                안 좋은 건 피해 가봐요!</p>
            <img src="" alt="투컷 이미지" className='tri_mm_s1_img epi_mm_twokutz_img' />
            <table className='tri_mm_s1_intropa_tb epi_mm_twokutz_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1981년 11월 19일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>174cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ESTJ</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>정이 많음</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />
        </div>
    );
};
