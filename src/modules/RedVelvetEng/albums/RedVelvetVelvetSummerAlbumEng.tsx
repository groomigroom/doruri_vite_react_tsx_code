import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import '../../RedVelvet/albums/RedVelvetVelvetSummerAlbum.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import RedVelvetVelvetSummerAlbum_img from '../../RedVelvet/albums/img/RedVelvetVelvetSummerAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function RedVelvetVelvetSummerAlbumEng() {
    EngPage('en', 'ko');

    return (
        <div className="redvelvet_RedVelvetVelvetSummerAlbum_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/RedVelvetVelvetSummerAlbum' >한국어</Link>
                <Link to='/RedVelvetVelvetSummerAlbumEng' className="on">English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="Red Velvet" />Velvet Summer - Summer Mini Album<img src={MainH2deco} alt="Red Velvet" /></h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                This is an album<br />
                prepared with<br />
                a variety of tracks!
            </p>
            <img src={RedVelvetVelvetSummerAlbum_img} alt="RedVelvetVelvetSummerAlbum" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                August, 3, 2026
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
                                dance, R&B/Soul
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
                                SM ENTERTAINMENT
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ song list ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 redvelvet_RedVelvetVelvetSummerAlbum_tb2'>
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
                                Surfin&apos; Boy
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
                                Hot Girls Cold Vibe
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
                                Orchestra
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
                                Hula Hoop
                            </p>
                        </td>
                    </tr>

                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb2_tr9'>
                        <td>
                            <p>
                                5
                            </p>
                        </td>
                        <td>
                            <p>
                                Hawaii
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ SM ENTERTAINMENT' />
        </div>
    );
}
