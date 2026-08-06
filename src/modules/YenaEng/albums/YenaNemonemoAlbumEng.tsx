import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import '../../Yena/albums/YenaNemonemoAlbum.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import YenaNemonemoAlbum_img from '../../Yena/albums/img/YenaNemonemoAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function YenaNemonemoAlbumEng() {
    EngPage('en', 'ko');

    return (
        <div className="yena_YenaNemonemoAlbum_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/YenaNemonemoAlbum'>한국어</Link>
                <Link to='/YenaNemonemoAlbumEng' className="on">English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="yena album" />Nemonemo<img src={MainH2deco} alt="yena album" /></h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                This is an album prepared<br />
                while thinking about<br />
                my crooked, sharp heart!
            </p>
            <img src={YenaNemonemoAlbum_img} alt="Nemonemo" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                September, 30, 2024
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
                                ballad, dance, R&B/Soul
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
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 yena_YenaNemonemoAlbum_tb2'>
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
                                Squaresquare
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
                                Sugar
                            </p>
                        </td>
                    </tr>

                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb2_tr9'>
                        <td>
                            <p>
                                3
                            </p>
                        </td>
                        <td>
                            <p>
                                Because that was love
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ YH Entertainment' />
        </div>
    );
}
