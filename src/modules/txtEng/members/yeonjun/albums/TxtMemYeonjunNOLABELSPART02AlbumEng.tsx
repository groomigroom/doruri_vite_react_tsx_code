import { Link } from 'react-router-dom';
import { EngPage } from '../../../../HomeEng/EngPage';

import '../../../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import '../../../../txt/members/yeonjun/albums/TxtMemYeonjunNOLABELSPART02Album.css';

import MenuEng from '../../../../HomeEng/MenuEng';
import FooterPartEng from '../../../../FooterPartEng';

import MainH2deco from '../../../../img/main_h2_deco.png';


export default function TxtMemYeonjunNOLABELSPART02AlbumEng() {
    EngPage('en', 'ko');

    return (
        <div className='txt_mm_yeonjun_NOLABELSPART02Album_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/TxtMemYeonjunNOLABELSPART02Album'>한국어</Link>
                <Link to='/TxtMemYeonjunNOLABELSPART02AlbumEng' className="on">English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="yeonjun deco" />NO LABELS: PART 02<img src={MainH2deco} alt="yeonjun deco" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                I&apos;ve been preparing<br />
                this album with colors that<br />
                are clearer than previous work!
            </p>
            <img src="" alt="NO LABELS: PART 01" className='tri_BabyFlowerCityRemixesAlbum_img' />
            <table className='tri_BabyFlowerCityRemixesAlbum_tb1'>
                <tbody>
                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb1_tr1'>
                        <td>
                            <p>
                                release date
                            </p>
                        </td>
                        <td>
                            <p>
                                July, 10, 2026
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                genre
                            </p>
                        </td>
                        <td>
                            <p>
                                R&B/Soul, rock/metal, dance, rap/hiphop
                            </p>
                        </td>
                    </tr>
                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb1_tr3'>
                        <td>
                            <p>
                                agency
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
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ song list ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 txt_mm_yeonjun_NOLABELSPART02Album_tb2'>
                <tbody>
                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb2_tr1'>
                        <td>
                            <p>
                                number
                            </p>
                        </td>
                        <td>
                            <p>
                                title
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
                                Baby Wassup?
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
            <FooterPartEng FooterPartEngText='ⓒ BIGHIT MUSIC' />
        </div>
    );
}


