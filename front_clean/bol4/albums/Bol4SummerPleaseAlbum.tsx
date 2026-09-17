import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './Bol4SummerPleaseAlbum.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Bol4SummerPleaseAlbum_img from './img/Bol4SummerPleaseAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function Bol4SummerPleaseAlbum() {
    DoruriDocumentTitle('여름아 부탁해');

    return (
        <div className='bol_Bol4SummerPleaseAlbum_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/Bol4SummerPleaseAlbum' className="on">한국어</Link>
                <Link to='/Bol4SummerPleaseAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="볼빨간 사춘기 앨범 꾸미기" />여름아 부탁해<img src={MainH2deco} alt="볼빨간 사춘기 앨범 꾸미기" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                가장 푸르렀던<br />
                계절로 데려가,<br />
                여름이 반짝이길 바랄게요!
            </p>
            <img src={Bol4SummerPleaseAlbum_img} alt="여름아 부탁해" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                2026.07.22.
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
                                발라드, 인디음악
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
                                Kanverse
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 Bol4SummerPleaseAlbum_tb2'>
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
                                여름아 부탁해
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 켄버스' />
        </div>
    );
}



