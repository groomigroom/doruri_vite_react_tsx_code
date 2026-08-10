import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './AkmuGaehwaAlbum.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import AkmuGaehwaAlbum_img from './img/AkmuGaehwaAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function AkmuGaehwaAlbum() {
    DoruriDocumentTitle('개화');

    return (
        <div className='akmu_AkmuGaehwaAlbum_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/AkmuGaehwaAlbum' className="on">한국어</Link>
                <Link to='/AkmuGaehwaAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="악뮤 앨범 꾸미기" />개화<img src={MainH2deco} alt="악뮤 앨범 꾸미기" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                다양한 이야기를 담은<br />
                앨범을<br />
                준비했어요!
            </p>
            <img src={AkmuGaehwaAlbum_img} alt="개화" className='tri_BabyFlowerCityRemixesAlbum_img akmu_AkmuGaehwaAlbum_img' />
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
                                2026.04.07.
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
                                록/메탈, 포크/블루스, 발라드
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
                                영감의 샘터
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 akmu_AkmuGaehwaAlbum_tb2'>
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
                                소문의 낙원
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
                                봄 색깔
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
                                벌레를 내고
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
                                기쁨, 슬픔, 아름다운 마음
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
                                햇빛 bless you
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                6
                            </p>
                        </td>
                        <td>
                            <p>
                                Tent
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                7
                            </p>
                        </td>
                        <td>
                            <p>
                                어린 부부
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                8
                            </p>
                        </td>
                        <td>
                            <p>
                                옳은 사람
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                9
                            </p>
                        </td>
                        <td>
                            <p>
                                우아한 아침 식사
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                10
                            </p>
                        </td>
                        <td>
                            <p>
                                난민들의 축제
                            </p>
                        </td>
                    </tr>

                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb2_tr9'>
                        <td>
                            <p>
                                11
                            </p>
                        </td>
                        <td>
                            <p>
                                얼룩
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 영감의 샘터' />
        </div>
    );
}


