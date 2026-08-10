import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './AespaSynkAexisLineAlbum.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

//import AespaSynkAexisLineAlbum_img from './img/AespaSynkAexisLineAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function AespaSYNKaeXISLINE2026SpecialDigitalSingleAlbum() {
    DoruriDocumentTitle('SYNK : aeXIS LINE');

    return (
        <div className="aes_AespaSYNKaeXISLINE2026SpecialDigitalSingleAlbum_full">
            <Menu />
            <section className="home_translate">
                <Link to='/AespaSYNKaeXISLINE2026SpecialDigitalSingleAlbum' className="on">한국어</Link>
                <Link to='/AespaSYNKaeXISLINE2026SpecialDigitalSingleAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="aespa deco" />SYNK : aeXIS LINE - 2026 Special Digital Single<img src={MainH2deco} alt="aespa deco" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                #####
            </p>
            <img src={""} alt="AespaSYNKaeXISLINE2026SpecialDigitalSingleAlbum" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                2026.08.09.
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
                                댄스, R&B/Soul
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
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 aes_AespaSYNKaeXISLINE2026SpecialDigitalSingleAlbum_tb2'>
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
                                Serenade &#40;KARINA & WINTER&#41;
                            </p>
                        </td>
                    </tr>

                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb2_tr9'>
                        <td>
                            <p>
                                2
                            </p>
                        </td>
                        <td>
                            <p>
                                Lollipop &#40;GISELLE & NINGNING&#41;
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ SM엔터테인먼트' />
        </div>
    );
}
