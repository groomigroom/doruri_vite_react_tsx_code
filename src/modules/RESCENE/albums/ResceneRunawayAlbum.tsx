import { Link } from 'react-router-dom';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './ResceneRunawayAlbum.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import ResceneRunawayAlbum_img from './img/ResceneRunawayAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function ResceneRunawayAlbum() {
    return (
        <div className="res_ResceneRunawayAlbum_full">
            <Menu />
            <section className="home_translate">
                <Link to='/ResceneRunawayAlbum' className="on">한국어</Link>
                <Link to='/ResceneRunawayAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="RESCENE 앨범 꾸미기" />Runaway<img src={MainH2deco} alt="RESCENE 앨범 꾸미기" /></h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                주체적으로 나아간다는<br />
                생각을 담아서<br />
                앨범을 준비했어요!
            </p>
            <img src={ResceneRunawayAlbum_img} alt="Runaway" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                2026.04.08.
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
                                댄스
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
                                더뮤즈엔터테인먼트
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 res_ResceneRunawayAlbum_tb2'>
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

                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb2_tr9'>
                        <td>
                            <p>
                                1
                            </p>
                        </td>
                        <td>
                            <p>
                                Runaway
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 더뮤즈엔터테인먼트' />
        </div>
    );
}
