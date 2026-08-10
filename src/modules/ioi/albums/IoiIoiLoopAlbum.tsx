import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './IoiIoiLoopAlbum.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import IoiIoiLoopAlbum_img from './img/IoiIoiLoopAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function IoiIoiLoopAlbum() {
    DoruriDocumentTitle('I.O.I : LOOP');

    return (
        <div className='ioi_IoiIoiLoopAlbum_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/IoiIoiLoopAlbum' className="on">한국어</Link>
                <Link to='/IoiIoiLoopAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="ioi 앨범 꾸미기" />I.O.I 3rd MINI ALBUM &#91;I.O.I : LOOP&#93;<img src={MainH2deco} alt="ioi 앨범 꾸미기" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                멈춰 있던 시간을<br />
                다시 이어서<br />
                찾아 왔어요!
            </p>
            <img src={IoiIoiLoopAlbum_img} alt="I.O.I 3rd MINI ALBUM &lsqb;I.O.I : LOOP&rsqb;" className='tri_BabyFlowerCityRemixesAlbum_img ioi_IoiIoiLoopAlbum_img' />
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
                                2026.05.19.
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
                                발라드, 댄스
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
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 ioi_IoiIoiLoopAlbum_tb2'>
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
                                IOI &#40;Where My Girls At&#41;
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
                                갑자기
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
                                SPF 100+ &#40;Summer Pop Fantasy&#41;
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
                                IF I
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
                                그때 우리 지금
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


