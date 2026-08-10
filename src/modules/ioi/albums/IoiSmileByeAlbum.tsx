import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './IoiSmileByeAlbum.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import IoiSmileByeAlbum_img from './img/IoiSmileByeAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function IoiSmileByeAlbum() {
    DoruriDocumentTitle('웃으며 안녕');

    return (
        <div className='ioi_IoiSmileByeAlbum_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/IoiSmileByeAlbum' className="on">한국어</Link>
                <Link to='/IoiSmileByeAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="ioi 앨범 꾸미기" />웃으며 안녕 &#40;Recorded in 2016&#41; &#40;Prod.진영&#41;<img src={MainH2deco} alt="ioi 앨범 꾸미기" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                10년전의 기억을<br />
                담아서 앨범을<br />
                준비했어요!
            </p>
            <img src={IoiSmileByeAlbum_img} alt="웃으며 안녕 &#40;Recorded in 2016&#41; &#40;Prod.진영&#41;" className='tri_BabyFlowerCityRemixesAlbum_img ioi_IoiSmileByeAlbum_img' />
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
                                2026.05.04.
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
                                스윙엔터테인먼트
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 ioi_IoiSmileByeAlbum_tb2'>
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
                                웃으며 안녕 &#40;Recorded in 2016&#41; &#40;Prod.진영&#41;
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 스윙엔터테인먼트' />
        </div>
    );
}
