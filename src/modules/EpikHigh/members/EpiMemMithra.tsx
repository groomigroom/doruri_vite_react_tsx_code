import '../../triples/members/TriplesMemS1.css';
import './EpiMemMithra.css';

import Menu from '../../Menu';

// import Txt_mm_Beomgyu_img from '../main/img/txt_m_mem_beomgyu.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function EpiMemMithra() {
    return (
        <div className="epi_mm_mithra_full">
            <Menu />
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="EpikHigh 꾸미기" />미쓰라<img src={MainH2Deco} alt="EpikHigh 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                펜으로 백지 위를<br />
                달리면서<br />
                다양한 생각을 해보아요!</p>
            <img src="" alt="미쓰라 이미지" className='tri_mm_s1_img epi_mm_mithra_img' />
            <table className='tri_mm_s1_intropa_tb epi_mm_mithra_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1983년 1월 6일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>178cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>AB형</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISFP</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>정이 많음</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};
