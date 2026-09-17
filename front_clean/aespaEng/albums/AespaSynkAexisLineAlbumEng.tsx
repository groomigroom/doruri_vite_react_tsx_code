import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import '../../aespa/albums/AespaSynkAexisLineAlbum.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import AespaSynkAexisLineAlbum_img from '../../aespa/albums/img/AespaSynkAexisLineAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function AespaSynkAexisLineAlbumEng() {
    EngPage('en', 'ko');

    return (
        <div className="aes_AespaSynkAexisLineAlbum_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/AespaSynkAexisLineAlbum'>한국어</Link>
                <Link to='/AespaSynkAexisLineAlbumEng' className="on">English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="aespa deco" />SYNK : aeXIS LINE - 2025 Special Digital Single<img src={MainH2deco} alt="aespa deco" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                This is an album prepared<br />
                with songs that have<br />
                matured even further!
            </p>
            <img src={AespaSynkAexisLineAlbum_img} alt="AespaSynkAexisLineAlbum" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                November, 17, 2025
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
                                dance, R&B/Soul, rock/metal
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
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2'>
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
                                BLUE &#40;WINTER Solo&#41;
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
                                Ketchup And Lemonade &#40;NINGNING Solo&#41;
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
                                Tornado &#40;GISELLE Solo&#41;
                            </p>
                        </td>
                    </tr>

                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb2_tr9'>
                        <td>
                            <p>
                                4
                            </p>
                        </td>
                        <td>
                            <p>
                                GOOD STUFF &#40;KARINA Solo&#41;
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ SM ENTERTAINMENT' />
        </div>
    );
}
