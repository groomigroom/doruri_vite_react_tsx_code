import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../../../DoruriDocumentTitle';

import '../../../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './TxtMemYeonjunNOLABELSPART02Album.css';

import Menu from '../../../../Menu';
import FooterPart from '../../../../FooterPart';

import MainH2deco from '../../../../img/main_h2_deco.png';

import TxtMemYeonjunNOLABELSPART02Album_img from './img/TxtMemYeonjunNOLABELSPART02Album_img.jpg';

export default function TxtMemYeonjunNOLABELSPART02Album() {
    DoruriDocumentTitle('NO LABELS: PART 02');

    return (
        <div className='txt_mm_yeonjun_NOLABELSPART02Album_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/TxtMemYeonjunNOLABELSPART02Album' className="on">한국어</Link>
                <Link to='/TxtMemYeonjunNOLABELSPART02AlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="연준 앨범 꾸미기" />NO LABELS: PART 02<img src={MainH2deco} alt="연준 앨범 꾸미기" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                전작으로 증명한 가능성보다<br />
                선명해진 색깔로<br />
                앨범을 준비해 왔어요!
            </p>
            <img src={TxtMemYeonjunNOLABELSPART02Album_img} alt="NO LABELS: PART 01" className='tri_BabyFlowerCityRemixesAlbum_img txt_mm_yeonjun_NOLABELSPART02Album_img' />
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
                                2026.07.10.
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
                                R&B/Soul, 록/메탈, 댄스, 랩/힙합
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
                                BIGHIT MUSIC
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 txt_mm_yeonjun_NOLABELSPART02Album_tb2'>
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
                                Vanilla
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
                                Ice Cream
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
                                조금 서툴러도 다시 &#40;Baby Wassup?&#41;
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
                                No More Disco
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
                                Fxxking Star
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
                                Long Way Long Ride
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 빅히트 뮤직' />
        </div>
    );
}
