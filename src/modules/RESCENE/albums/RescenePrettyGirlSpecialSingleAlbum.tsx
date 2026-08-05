import { Link } from 'react-router-dom';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './RescenePrettyGirlSpecialSingleAlbum.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

// import TriplesBabyFlowerCityRemixesAlbum_img from './img/TriplesBabyFlowerCityRemixesAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function RescenePrettyGirlSpecialSingleAlbum() {
    return (
        <div className="res_RescenePrettyGirlSpecialSingleAlbum_full">
            <Menu />
            <section className="home_translate">
                <Link to='/RescenePrettyGirlSpecialSingleAlbum' className="on">한국어</Link>
                <Link to='/RescenePrettyGirlSpecialSingleAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="RESCENE deco" />Pretty Girl - Special Single<img src={MainH2deco} alt="RESCENE deco" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                선명하고 당당한<br />
                노래를 담은<br />
                앨범을 준비했어요!
            </p>
            <img src='' alt="Pretty girl special single" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                2026.07.08.
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
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 res_RescenePrettyGirlSpecialSingleAlbum_tb2'>
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
                                Pretty Girl
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 더뮤즈엔터테인먼트' />
        </div>
    );
}
