import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import '../../txt/albums/Txt7thYearAlbum.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

// import Bol4FindYouAlbum_img from './img/Bol4FindYouAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function Txt7thYearAlbumEng() {
    EngPage('en', 'ko');

    return (
        <div className='txt_Txt7thYearAlbum_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/Txt7thYearAlbum'>한국어</Link>
                <Link to='/Txt7thYearAlbumEng' className="on">English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="txt deco" />7TH YEAR: When the wind briefly stops in the thorn bush<img src={MainH2deco} alt="txt deco" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                I prepared this album<br />
                while carefully reflecting<br />
                on anxiety and the future!
            </p>
            <img src='' alt="7TH YEAR: When the wind briefly stops in the thorn bush" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                April, 13, 2026
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
                                BIGHIT MUSIC
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 txt_Txt7thYearAlbum_tb2'>
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
                                Bed of Thorns
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
                                Stick With You
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
                                Take Me to Nirvana &#40;feat. 万妮达Vinida Weng&#41;
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
                                So What
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
                                21st Century Romance
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
                                The next of the next
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ BIGHIT MUSIC' />
        </div>
    );
}

