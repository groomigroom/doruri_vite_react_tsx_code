import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import '../../Yena/albums/YenaBloomingWingsAlbum.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

// import TriplesBabyFlowerCityRemixesAlbum_img from './img/TriplesBabyFlowerCityRemixesAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function YenaBloomingWingsAlbumEng() {
    EngPage('en', 'ko');

    return (
        <div className="yena_YenaBloomingWingsAlbum_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/YenaBloomingWingsAlbum' >한국어</Link>
                <Link to='/YenaBloomingWingsAlbumEng' className="on">English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="Yena" />Blooming Wings<img src={MainH2deco} alt="Yena" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                This is an album<br />
                prepared while also thinking<br />
                about a pure heart!
            </p>
            <img src='' alt="YenaBloomingWingsAlbum" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                July, 29, 2025
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
                                rock/metal, dance, folk/blues, electronica
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
                                YH Entertainment
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ song list ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 yena_YenaBloomingWingsAlbum_tb2'>
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
                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb2_tr1'>
                        <td>
                            <p>
                                1
                            </p>
                        </td>
                        <td>
                            <p>
                                Drama Queen
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
                                I hate being called nice the most
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
                                Hello, Goodbye
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
                                As long as it's not you &#40;Feat. Miryo of Brwon Eyed Girls&#41;
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
                                364
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ YH Entertainment' />
        </div>
    );
}
