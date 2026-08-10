import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './TxtStarsChapterTogetherAlbum.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import TxtStarsChapterTogetherAlbum_img from './img/TxtStarsChapterTogetherAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function TxtStarsChapterTogetherAlbum() {
    DoruriDocumentTitle('별의 장');

    return (
        <div className='txt_TxtStarsChapterTogetherAlbum_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/TxtStarsChapterTogetherAlbum' className="on">한국어</Link>
                <Link to='/TxtStarsChapterTogetherAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="투바투 앨범 꾸미기" />별의 장: TOGETHER<img src={MainH2deco} alt="투바투 앨범 꾸미기" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                함께의 의미를<br />
                생각해 보며<br />
                앨범을 준비했어요!
            </p>
            <img src={TxtStarsChapterTogetherAlbum_img} alt="별의 장: TOGETHER" className='tri_BabyFlowerCityRemixesAlbum_img txt_TxtStarsChapterTogetherAlbum_img' />
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
                                2025.07.21.
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
                                록/메탈, 댄스, R&B/Soul, 랩/힙합
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
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 txt_TxtStarsChapterTogetherAlbum_tb2'>
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
                                Upside Down Kiss
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
                                Beautiful Strangers
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
                                Ghost Girl
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
                                Sunday Driver
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
                                Dance With You
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
                                Take My Half
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
                                Bird of Night
                            </p>
                        </td>
                    </tr>

                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb2_tr9'>
                        <td>
                            <p>
                                8
                            </p>
                        </td>
                        <td>
                            <p>
                                별의 노래
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 빅히트 뮤직' />
        </div>
    );
}




