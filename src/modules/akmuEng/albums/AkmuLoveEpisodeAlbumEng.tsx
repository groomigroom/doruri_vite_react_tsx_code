import { Link } from 'react-router-dom';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import '../../akmu/albums/AkmuLoveEpisodeAlbum.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import AkmuLoveEpisodeAlbum_img from '../../akmu/albums/img/AkmuLoveEpisodeAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function AkmuLoveEpisodeAlbumEng() {
    return (
        <div className='akmu_AkmuLoveEpisodeAlbum_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/AkmuLoveEpisodeAlbum'>한국어</Link>
                <Link to='/AkmuLoveEpisodeAlbumEng' className="on">English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="akmu deco" />LOVE EPISODE<img src={MainH2deco} alt="akmu deco" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                We&apos;ve prepared an album<br />
                filled with songs you can<br />
                listen feel comfortable with!
            </p>
            <img src={AkmuLoveEpisodeAlbum_img} alt="LOVE EPISODE" className='tri_BabyFlowerCityRemixesAlbum_img akmu_AkmuLoveEpisodeAlbum_img' />
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
                                June, 3, 2024
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
                                folk/blues, dance, R&B/Soul
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
                                YG Entertainment
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 akmu_AkmuLoveEpisodeAlbum_tb2'>
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
                                Hero
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
                                Long D??
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
                                The Cake&apos;s Peace
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
                                It&apos;s very uncomfortable.
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
                                Love Lee
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
                                Fry&apos;s Dream
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ YG Entertainment' />
        </div>
    );
}


