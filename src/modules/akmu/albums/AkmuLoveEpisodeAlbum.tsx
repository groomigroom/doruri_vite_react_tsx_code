import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './AkmuLoveEpisodeAlbum.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import AkmuLoveEpisodeAlbum_img from './img/AkmuLoveEpisodeAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function AkmuLoveEpisodeAlbum() {
    DoruriDocumentTitle('LOVE EPISODE');

    return (
        <div className='akmu_AkmuLoveEpisodeAlbum_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/AkmuLoveEpisodeAlbum' className="on">한국어</Link>
                <Link to='/AkmuLoveEpisodeAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="악뮤 앨범 꾸미기" />LOVE EPISODE<img src={MainH2deco} alt="악뮤 앨범 꾸미기" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                어느 때 듣더라도<br />
                편안한 곡들을 담은<br />
                앨범을 준비했어요!
            </p>
            <img src={AkmuLoveEpisodeAlbum_img} alt="LOVE EPISODE" className='tri_BabyFlowerCityRemixesAlbum_img akmu_AkmuLoveEpisodeAlbum_img' />
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
                                2024.06.03.
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
                                포크/블루스, 댄스, R&B/Soul
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
                                YG Entertainment
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 akmu_AkmuLoveEpisodeAlbum_tb2'>
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
                                Hero
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
                                롱디
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
                                케익의 평화
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
                                답답해
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
                                Love Lee
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
                                후라이의 꿈
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ YG Entertainment' />
        </div>
    );
}
