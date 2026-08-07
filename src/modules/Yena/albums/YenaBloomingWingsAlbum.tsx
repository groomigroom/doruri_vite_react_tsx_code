import { Link } from 'react-router-dom';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './YenaBloomingWingsAlbum.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import YenaBloomingWingsAlbum_img from './img/YenaBloomingWingsAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function YenaBloomingWingsAlbum() {
    return (
        <div className="yena_YenaBloomingWingsAlbum_full">
            <Menu />
            <section className="home_translate">
                <Link to='/YenaBloomingWingsAlbum' className="on">한국어</Link>
                <Link to='/YenaBloomingWingsAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="최예나 앨범 꾸미기" />Blooming Wings<img src={MainH2deco} alt="최예나 앨범 꾸미기" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                순수한 마음도<br />
                생각해 보며<br />
                준비한 앨범이에요!
            </p>
            <img src={YenaBloomingWingsAlbum_img} alt="YenaBloomingWingsAlbum" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                2025.07.29.
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
                                록/메탈, 댄스, 포크/블루스, 일렉트로니카
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
                                YH엔터테인먼트
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 yena_YenaBloomingWingsAlbum_tb2'>
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
                                Drama Queen
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
                                착하다는 말이 제일 싫어
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
                                안녕 &#40;Hello, Goodbye&#41;
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
                                너만 아니면 돼 &#40;Feat. 미료 of 브라운아이드걸스&#41;
                            </p>
                        </td>
                    </tr>

                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb2_tr9'>
                        <td>
                            <p>
                                5
                            </p>
                        </td>
                        <td>
                            <p>
                                364
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ YH엔터테인먼트' />
        </div>
    );
}
