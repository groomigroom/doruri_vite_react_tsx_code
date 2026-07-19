import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './RedMemWendy.css';

import Menu from '../../Menu';

// import Red_mm_Wendy_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function RedMemWendy() {
    return (
        <div className="red_mm_wendy_full">
            <Menu />
            <section className="home_translate">
                <Link to='/RedMemWendy' className="on">한국어</Link>
                <Link to='/RedMemWendyEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="Red Velvet 꾸미기" />웬디<img src={MainH2Deco} alt="Red Velvet 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                #####
                &apos;슬기&apos;와 함께<br />
                눈 깜짝 놀랄만한<br />
                것을 찾아 봐요!
            </p>
            <img src='' alt="웬디 이미지" className='tri_mm_s1_img' />
            #####
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1994년 2월 10일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>161cm</p></td>
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
                        <td><p>메인댄서, 리드보컬</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISFP</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>곰돌이</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>순함</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};




