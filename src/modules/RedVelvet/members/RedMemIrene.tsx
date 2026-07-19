import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';

import Menu from '../../Menu';

// import Red_mm_Irene_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function RedMemIrene() {
    return (
        <div className="red_mm_irene_full">
            <Menu />
            <section className="home_translate">
                <Link to='/RedMemIrene' className="on">한국어</Link>
                <Link to='/RedMemIreneEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="Red Velvet 꾸미기" />아이린<img src={MainH2Deco} alt="Red Velvet 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                &apos;아이린&apos;과 함께<br />
                모든 순간을 더<br />
                빛내 보아요!
            </p>
            <img src='' alt="아이린 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1991년 3월 29일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>158cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td><p>레드벨벳-아이린&슬기</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>리더, 센터, 메인래퍼, 서브보컬, 리드댄서</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>배추</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>??</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};
