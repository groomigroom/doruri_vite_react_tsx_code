import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../../../DoruriDocumentTitle';

import '../../../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './TxtMemYeonjunNOLABELSPART01Album.css';

import Menu from '../../../../Menu';
import FooterPart from '../../../../FooterPart';

import MainH2deco from '../../../../img/main_h2_deco.png';

import TxtMemYeonjunNOLABELSPART01Album_img from '../img/txt_m_mem_yeonjun_7_23.jpg';


export default function TxtMemYeonjunNOLABELSPART01Album() {
    DoruriDocumentTitle('NO LABELS: PART 01');

    return (
        <div className='txt_mm_yeonjun_NOLABELSPART01Album_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/TxtMemYeonjunNOLABELSPART01Album' className="on">한국어</Link>
                <Link to='/TxtMemYeonjunNOLABELSPART01AlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="연준 앨범 꾸미기" />NO LABELS: PART 01<img src={MainH2deco} alt="연준 앨범 꾸미기" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                타이틀곡 &apos;Talk to You&apos;,<br />
                작사 및 작곡 참여해<br />
                &apos;연준 코어&apos;를 준비했어요!
            </p>
            <img src={TxtMemYeonjunNOLABELSPART01Album_img} alt="NO LABELS: PART 01" className='tri_BabyFlowerCityRemixesAlbum_img txt_mm_yeonjun_NOLABELSPART01Album_img' />
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
                                2025.11.07.
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
                                랩/힙합, R&B/Soul, 록/메탈
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
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 txt_mm_yeonjun_NOLABELSPART01Album_tb2'>
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
                                Talk to You
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
                                Forever
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
                                Let Me Tell You &#40;feat. Daniela of KATSEYE&#41;
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
                                Do It
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
                                Nothin&apos; &apos;Bout Me
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
                                Coma
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 빅히트 뮤직' />
        </div>
    );
}
