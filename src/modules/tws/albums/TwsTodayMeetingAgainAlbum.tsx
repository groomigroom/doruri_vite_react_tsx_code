import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './TwsTodayMeetingAgainAlbum.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

// import Bol4FindYouAlbum_img from './img/Bol4FindYouAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function TwsTodayMeetingAgainAlbum() {
    DoruriDocumentTitle('다시 만난 오늘');

    return (
        <div className='tws_TwsTodayMeetingAgainAlbum_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/TwsTodayMeetingAgainAlbum' className="on">한국어</Link>
                <Link to='/TwsTodayMeetingAgainAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="tws 앨범 꾸미기" />다시 만난 오늘<img src={MainH2deco} alt="tws 앨범 꾸미기" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                새롭게 만난다는<br />
                마음으로 앨범을<br />
                준비했어요!
            </p>
            <img src='' alt="다시 만난 오늘" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                2026.02.09.
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
                                댄스
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
                                플레디스 엔터테인먼트
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 tws_TwsTodayMeetingAgainAlbum_tb2'>
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
                                다시 만난 오늘
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 플레디스 엔터테인먼트' />
        </div>
    );
}
