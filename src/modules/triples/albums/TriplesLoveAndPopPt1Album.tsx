import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import './TriplesBabyFlowerCityRemixesAlbum.css';
import './TriplesLoveAndPopPt1Album.css'

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import TriplesLoveAndPopPt1Album_img from './img/TriplesLoveAndPopPt1Album_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function TriplesLoveAndPopPt1Album() {
    DoruriDocumentTitle('Love And Pop Pt1');

    return (
        <div className="tri_LoveAndPopPt1Album_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesLoveAndPopPt1Album' className="on">한국어</Link>
                <Link to='/TriplesLoveAndPopPt1AlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'><img src={MainH2deco} alt="트리플에스 앨범 꾸미기" />&lt;LOVE&POP&gt; pt.1<img src={MainH2deco} alt="트리플에스 앨범 꾸미기" /></h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                고개를 들고,<br />
                우리는 힘을 합쳐 세상을<br />
                향해 나아가 볼게요!
            </p>
            <img src={TriplesLoveAndPopPt1Album_img} alt="LOVE&POP pt.1" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                2026.06.01.
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
                                모드하우스
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 tri_LoveAndPopPt1Album_tb2'>
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
                                Sad Girls Schemin&apos;
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
                                Peer
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
                                Baby Flower
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
                                Type of Girl
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
                                Sleek
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
                                I Like That
                            </p>
                        </td>
                    </tr>
                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb2_tr9'>
                        <td>
                            <p>
                                7
                            </p>
                        </td>
                        <td>
                            <p>
                                Me Myself Mode
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ ㈜모드하우스' />
        </div>
    );
}



