import { Link } from 'react-router-dom';

import '../../../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import '../../../../txt/members/yeonjun/albums/TxtMemYeonjunNOLABELSPART01Album.css';

import MenuEng from '../../../../HomeEng/MenuEng';
import FooterPartEng from '../../../../FooterPartEng';

import MainH2deco from '../../../../img/main_h2_deco.png';


export default function TxtMemYeonjunNOLABELSPART01AlbumEng() {
    return (
        <div className='txt_mm_yeonjun_NOLABELSPART01Album_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/TxtMemYeonjunNOLABELSPART01Album'>한국어</Link>
                <Link to='/TxtMemYeonjunNOLABELSPART01AlbumEng' className="on">English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="yeonjun deco" />NO LABELS: PART 01<img src={MainH2deco} alt="yeonjun deco" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                We prepared &apos;Yeonjun Core&apos; with<br />
                the title track &apos;Talk to You,&apos;<br />
                participating in both the lyrics and composition!
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
                                November, 7, 2025
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
                                rap/hiphop, R&B/Soul, rock/metal
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
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 txt_mm_yeonjun_NOLABELSPART01Album_tb2'>
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
            <FooterPartEng FooterPartEngText='ⓒ BIGHIT MUSIC' />
        </div>
    );
}
