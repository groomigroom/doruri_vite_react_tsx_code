import { Link } from 'react-router-dom';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './StrayKidsSKZReplay2026Pt1Album.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import StrayKidsSKZReplay2026Pt1Album_img from './img/StrayKidsSKZReplay2026Pt1Album_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function StrayKidsThisAndThatAlbum() {
    return (
        <div className='str_StrayKidsThisAndThatAlbum_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/StrayKidsThisAndThatAlbum' className="on">한국어</Link>
                <Link to='/StrayKidsThisAndThatAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="Stray Kids 앨범 꾸미기" />THIS & THAT<img src={MainH2deco} alt="Stray Kids 앨범 꾸미기" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                새로운 도전을<br />
                한다는 생각으로<br />
                준비한 앨범이에요!
            </p>
            <img src={StrayKidsSKZReplay2026Pt1Album_img} alt="StrayKidsSKZReplay2026Pt1Album" className='tri_BabyFlowerCityRemixesAlbum_img' />
            <table className='tri_BabyFlowerCityRemixesAlbum_tb1'>
                <tbody>
                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb1_tr1'>
                        <td>
                            <p>
                                발매일
                            </p>
                        </td>
                        <td>
                            <p>
                                2026.08.07.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                장르
                            </p>
                        </td>
                        <td>
                            <p>
                                랩/힙합, 록/메탈, 일렉트로니카
                            </p>
                        </td>
                    </tr>
                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb1_tr3'>
                        <td>
                            <p>
                                기획사
                            </p>
                        </td>
                        <td>
                            <p>
                                JYP엔터테인먼트
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='str_StrayKidsThisAndThatAlbum_tb2'>
                <tbody>
                    <tr className='str_StrayKidsThisAndThatAlbum_intropa_tb2_tr1'>
                        <td>
                            <p>
                                번호
                            </p>
                        </td>
                        <td>
                            <p>
                                제목
                            </p>
                        </td>
                        <td>
                            <p>
                                가수
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                1
                            </p>
                        </td>
                        <td>
                            <p>
                                RUN IT
                            </p>
                        </td>
                        <td>
                            <p>
                                Stray Kids
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                2
                            </p>
                        </td>
                        <td>
                            <p>
                                This & That
                            </p>
                        </td>
                        <td>
                            <p>
                                Stray Kids
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                3
                            </p>
                        </td>
                        <td>
                            <p>
                                After You
                            </p>
                        </td>
                        <td>
                            <p>
                                Stray Kids
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                4
                            </p>
                        </td>
                        <td>
                            <p>
                                FARMING
                            </p>
                        </td>
                        <td>
                            <p>
                                Stray Kids
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                5
                            </p>
                        </td>
                        <td>
                            <p>
                                I Do
                            </p>
                        </td>
                        <td>
                            <p>
                                Stray Kids
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                6
                            </p>
                        </td>
                        <td>
                            <p>
                                Way Out
                            </p>
                        </td>
                        <td>
                            <p>
                                Stray Kids
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                7
                            </p>
                        </td>
                        <td>
                            <p>
                                그날
                            </p>
                        </td>
                        <td>
                            <p>
                                Stray Kids
                            </p>
                        </td>
                    </tr>

                    <tr className='str_StrayKidsThisAndThatAlbum_intropa_tb2_tr9'>
                        <td>
                            <p>
                                8
                            </p>
                        </td>
                        <td>
                            <p>
                                This & That &#40;Festival Version&#41;
                            </p>
                        </td>
                        <td>
                            <p>
                                Stray Kids, Tele
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ JYP엔터테인먼트' />
        </div>
    );
}
