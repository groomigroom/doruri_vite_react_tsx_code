import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './AlldayProjectIDonBargainAlbum.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import AlldayProjectIDonBargainAlbum_img from './img/AlldayProjectIDonBargainAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function AlldayProjectIDonBargainAlbum() {
    DoruriDocumentTitle('I DON\'T BARGAIN');

    return (
        <div className="all_AlldayProjectIDonBargainAlbum_full">
            <Menu />
            <section className="home_translate">
                <Link to='/AlldayProjectIDonBargainAlbum' className="on">한국어</Link>
                <Link to='/AlldayProjectIDonBargainAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="ALLDAY PROJECT deco" />I DON&apos;T BARGAIN<img src={MainH2deco} alt="ALLDAY PROJECT deco" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                독보적인 점을<br />
                지키는 것을 생각하며<br />
                준비한 앨범이에요!
            </p>
            <img src={AlldayProjectIDonBargainAlbum_img} alt="AlldayProjectIDonBargainAlbum" className='tri_BabyFlowerCityRemixesAlbum_img all_AlldayProjectIDonBargainAlbum_img' />
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
                                2026.03.09.
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
                                랩/힙합
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
                                THEBLACKLABEL, PUBG: BATTLEGROUNDS
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 all_AlldayProjectIDonBargainAlbum_tb2'>
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
                                I DON&apos;T BARGAIN
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ THEBLACKLABEL' />
        </div>
    );
}
