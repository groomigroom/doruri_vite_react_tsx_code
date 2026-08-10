import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './StrayKidsStarLightAlbum.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import StrayKidsStarLightAlbum_img from './img/StrayKidsStarLightAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function StrayKidsStarLightAlbum() {
    DoruriDocumentTitle('별, 빛 (STAY)');

    return (
        <div className='str_StrayKidsStarLightAlbum_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/StrayKidsStarLightAlbum' className="on">한국어</Link>
                <Link to='/StrayKidsStarLightAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="Stray Kids 앨범 꾸미기" />별, 빛 &#40;STAY&#41;<img src={MainH2deco} alt="Stray Kids 앨범 꾸미기" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                소중히 써내려간<br />
                편지의 마음으로<br />
                준비한 앨범이에요!
            </p>
            <img src={StrayKidsStarLightAlbum_img} alt="별, 빛 &#40;STAY&#41;" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                2026.03.25.
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
                                발라드
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
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 str_StrayKidsStarLightAlbum_tb2'>
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
                                별, 빛 &#40;STAY&#41;
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ JYP엔터테인먼트' />
        </div>
    );
}
