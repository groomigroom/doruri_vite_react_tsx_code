import { Link } from 'react-router-dom';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './BtsNormalAlbum.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import BtsNormalAlbum_img from './img/BtsNormalAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function BtsNormalAlbumEng() {
    return (
        <div className='bts_BtsNormalAlbum_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/BtsNormalAlbum'>한국어</Link>
                <Link to='/BtsNormalAlbumEng' className="on">English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'><img src={MainH2deco} alt="bts" />NORMAL<img src={MainH2deco} alt="bts" /></h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                #####밤새 내린 비에 젖은<br />
                꽃잎들까지도 다 봄이라는<br />
                생각을 해보며 준비한 앨범이에요!
            </p>
            <img src={BtsNormalAlbum_img} alt="NORMAL" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                2026.07.17.
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
                                R&B/Soul
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
                                빅히트 뮤직
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 bts_BtsNormalAlbum_tb2'>
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
                                NORMAL &#40;Explicit Ver.&#41;
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
                                NORMAL &#40;Clean Ver.&#41;
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
                                NORMAL &#40;Korean Ver.&#41; &#40;Explicit Ver.&#41;
                            </p>
                        </td>
                    </tr>
                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb2_tr9'>
                        <td>
                            <p>
                                4
                            </p>
                        </td>
                        <td>
                            <p>
                                NORMAL &#40;Korean Ver.&#41; &#40;Clean Ver.&#41;
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 빅히트 뮤직' />
        </div>
    );
}
