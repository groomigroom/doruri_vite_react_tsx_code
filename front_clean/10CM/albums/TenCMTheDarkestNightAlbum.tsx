import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './TenCMTheDarkestNightAlbum.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import TenCMTheDarkestNightAlbum_img from './img/TenCMTheDarkestNightAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function TenCMTheDarkestNightAlbum() {
    DoruriDocumentTitle('The Darkest Night');

    return (
        <div className='ten_TenCMTheDarkestNightAlbum_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/TenCMTheDarkestNightAlbum' className="on">한국어</Link>
                <Link to='/TenCMTheDarkestNightAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="10CM 앨범 꾸미기" />The Darkest Night<img src={MainH2deco} alt="10CM 앨범 꾸미기" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                고독한 마음을<br />
                생각해 보며<br />
                앨범을 준비했어요!
            </p>
            <img src={TenCMTheDarkestNightAlbum_img} alt="The Darkest Night" className='tri_BabyFlowerCityRemixesAlbum_img ten_TenCMTheDarkestNightAlbum__img' />
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
                                록/메탈
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
                                씨에이엠위더스
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 ten_TenCMTheDarkestNightAlbum_tb2'>
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
                                The Darkest Night
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
                                The Darkest Night &#40;Inst.&#41;
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 씨에이엠위더스' />
        </div>
    );
}
