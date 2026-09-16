import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './AespaLemonadeAlbum.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import AespaLemonadeAlbum_img from './img/AespaLemonadeAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function AespaLemonadeAlbum() {
    DoruriDocumentTitle('LEMONADE');

    return (
        <div className="aespa_AespaLemonadeAlbum_full">
            <Menu />
            <section className="home_translate">
                <Link to='/AespaLemonadeAlbum' className="on">한국어</Link>
                <Link to='/AespaLemonadeAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="aespa deco" />LEMONADE - The 2nd Album<img src={MainH2deco} alt="aespa deco" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                견고해진 음악적<br />
                성장의 이야기도<br />
                담은 앨범이에요!
            </p>
            <img src={AespaLemonadeAlbum_img} alt="Lemonade" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                2026. 05. 29.
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
                                댄스, 일렉트로니카, 록/메탈, 랩/힙합, R&B/Soul
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
                                SM엔터테인먼트
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 aespa_AespaLemonadeAlbum_tb2'>
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
                                WDA &#40;Whole Different Animal&#41; &#40;Feat. G-DRAGON&#41;
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
                                LEMONADE
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
                                SHAKIN&apos;
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
                                Can&apos;t Help Myself
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
                                Camouflage
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
                                Bite
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
                                Switchblade &#40;Feat. Ty Dolla $ign&#41;
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                8
                            </p>
                        </td>
                        <td>
                            <p>
                                Roll
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                9
                            </p>
                        </td>
                        <td>
                            <p>
                                My Plan
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                10
                            </p>
                        </td>
                        <td>
                            <p>
                                &apos;Til We Die
                            </p>
                        </td>
                    </tr>

                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb2_tr9'>
                        <td>
                            <p>
                                11
                            </p>
                        </td>
                        <td>
                            <p>
                                LEMONADE &#40;Feat. Becky G&#41;
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ SM엔터테인먼트' />
        </div>
    );
}
