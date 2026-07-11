import '../../triples/members/TriplesMemS1.css';
import './IoiMemKimsohye.css';

import Menu from '../../Menu';

// import Txt_mm_Beomgyu_img from '../main/img/txt_m_mem_beomgyu.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IoiMemKimsohye() {
    return (
        <div className="ioi_mm_kimsohye_full">
            <Menu />
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="아이오아이 로고 꾸미기" />김소혜<img src={MainH2Deco} alt="아이오아이 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                다양한 생각과<br />
                제 개성을 담아서<br />
                여러분을 찾아 갈게요!</p>
            <img src="" alt="김소혜 이미지" className='tri_mm_s1_img txt_mm_beomgyu_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2003년 8월 6일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>161cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>B형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>햄햄</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>좋아하는 영화 여러번 보기</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>셀카찍기</p></td>
                    </tr>
                    <tr>
                        <td><p>좋아하는 음식</p></td>
                        <td><p>아이스크림</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td>
                            <p>+&#40;KR&#41;ystal Eyes, Acid Eyes, <br />
                                LOVElution, neptune</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>좋음</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};
