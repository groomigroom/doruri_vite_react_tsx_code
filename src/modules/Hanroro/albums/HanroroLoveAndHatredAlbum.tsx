import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './HanroroLoveAndHatredAlbum.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

// import Bol4FindYouAlbum_img from './img/Bol4FindYouAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function HanroroLoveAndHatredAlbum() {
    DoruriDocumentTitle('애증');

    return (
        <div className='han_HanroroLoveAndHatredAlbum_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/HanroroLoveAndHatredAlbum' className="on">한국어</Link>
                <Link to='/HanroroLoveAndHatredAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="한로로 앨범 꾸미기" />애증<img src={MainH2deco} alt="한로로 앨범 꾸미기" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                &apos;한로로&apos;와 함께<br />
                좋은 마음을<br />
                가져 보아요!
            </p>
            <img src='' alt="애증" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                2026.04.02.
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
                                인디음악, 록/메탈
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
                                authentic
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 han_HanroroLoveAndHatredAlbum_tb2'>
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
                                게임 오버 ?
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
                                1111
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ authentic' />
        </div>
    );
}
