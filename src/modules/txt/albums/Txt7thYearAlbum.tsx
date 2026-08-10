import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './Txt7thYearAlbum.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Txt7thYearAlbum_img from './img/Txt7thYearAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function Txt7thYearAlbum() {
    DoruriDocumentTitle('7TH YEAR');

    return (
        <div className='txt_Txt7thYearAlbum_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/Txt7thYearAlbum' className="on">한국어</Link>
                <Link to='/Txt7thYearAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="투바투 앨범 꾸미기" />7TH YEAR: 가시덤불에 잠시 바람이 멈췄을 때<img src={MainH2deco} alt="투바투 앨범 꾸미기" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                불안과 미래를<br />
                잘 생각해 보며<br />
                앨범을 준비했어요!
            </p>
            <img src={Txt7thYearAlbum_img} alt="7TH YEAR: 가시덤불에 잠시 바람이 멈췄을 때" className='tri_BabyFlowerCityRemixesAlbum_img txt_Txt7thYearAlbum_img' />
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
                                2026.04.13.
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
                                댄스, R&B/Soul, 록/메탈
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
                                BIGHIT MUSIC
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 txt_Txt7thYearAlbum_tb2'>
                <tbody>
                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb2_tr1'>
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
                    </tr>
                    <tr>
                        <td>
                            <p>
                                1
                            </p>
                        </td>
                        <td>
                            <p>
                                Bed of Thorns
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
                                하루에 하루만 더 &#40;Stick With You&#41;
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
                                Take Me to Nirvana &#40;feat. 万妮达Vinida Weng&#41;
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
                                So What
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
                                21st Century Romance
                            </p>
                        </td>
                    </tr>


                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb2_tr9'>
                        <td>
                            <p>
                                6
                            </p>
                        </td>
                        <td>
                            <p>
                                다음의 다음
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 빅히트 뮤직' />
        </div>
    );
}






