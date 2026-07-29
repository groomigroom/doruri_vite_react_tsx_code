import { Link } from 'react-router-dom';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import '../../akmu/albums/AkmuGaehwaAlbum.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import AkmuGaehwaAlbum_img from '../../akmu/albums/img/AkmuGaehwaAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function AkmuGaehwaAlbumEng() {
    return (
        <div className='akmu_AkmuGaehwaAlbum_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/AkmuGaehwaAlbum'>한국어</Link>
                <Link to='/AkmuGaehwaAlbumEng' className="on">English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="akmu deco" />Blooming<img src={MainH2deco} alt="akmu deco" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                We&apos;ve prepared<br />
                an album filled with<br />
                a variety of stories!
            </p>
            <img src={AkmuGaehwaAlbum_img} alt="Blooming" className='tri_BabyFlowerCityRemixesAlbum_img akmu_AkmuGaehwaAlbum_img' />
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
                                April, 7, 2026
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
                                rock/metal, folk/blues, ballad
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
                                Cemter of Inspiration
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ song list ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 akmu_AkmuGaehwaAlbum_tb2'>
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
                                The Paradise of Rumors
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
                                Spring color
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
                                Release the bug
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
                                Joy, sorrow, and a beautiful heart
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
                                Sunlight, bless you
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
                                Young couple
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
                                The right person
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
                                Elegant breakfast
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
                                Festival of Refugees
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
                                Stain
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ Cemter of Inspiration' />
        </div>
    );
}

