import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import '../../ALLDAY_PROJECT/albums/AlldayProjectAlldayProjectAlbum.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

//import Bol4SummerPleaseAlbum_img from '../../bol4/albums/img/Bol4SummerPleaseAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function AlldayProjectAlldayProjectAlbumEng() {
    EngPage('en', 'ko');

    return (
        <div className="all_AlldayProjectAlldayProjectAlbum_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/AlldayProjectAlldayProjectAlbum'>한국어</Link>
                <Link to='/AlldayProjectAlldayProjectAlbumEng' className="on">English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'><img src={MainH2deco} alt="ALLDAY PROJECT deco" />ALLDAY PROJECT<img src={MainH2deco} alt="ALLDAY PROJECT deco" /></h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                Work hard without<br />
                thinking about limits<br />
                This is the album we prepared!
            </p>
            <img src='' alt="AlldayProjectAlldayProjectAlbum" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                December, 8, 2025
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
                                dance, rap/hiphop
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
                                THEBLACKLABEL
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='all_AlldayProjectAlldayProjectAlbum_tb2'>
                <tbody>
                    <tr className='all_AlldayProjectAlldayProjectAlbum_intropa_tb2_tr1'>
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
                        <td>
                            <p>
                                singer
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
                                ONE MORE TIME
                            </p>
                        </td>
                        <td>
                            <p>
                                ALLDAY PROJECT
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
                                LOOK AT ME
                            </p>
                        </td>
                        <td>
                            <p>
                                ALLDAY PROJECT
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
                                YOU AND I
                            </p>
                        </td>
                        <td>
                            <p>
                                ALLDAY PROJECT
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
                                WHERE YOU AT
                            </p>
                        </td>
                        <td>
                            <p>
                                ALLDAY PROJECT, Annie, Woochan
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
                                HOT
                            </p>
                        </td>
                        <td>
                            <p>
                                ALLDAY PROJECT, Tarzzan, Bailey
                            </p>
                        </td>
                    </tr>

                    <tr className='all_AlldayProjectAlldayProjectAlbum_intropa_tb2_tr9'>
                        <td>
                            <p>
                                6
                            </p>
                        </td>
                        <td>
                            <p>
                                MEDUSA
                            </p>
                        </td>
                        <td>
                            <p>
                                ALLDAY PROJECT, Tarzzan
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ THEBLACKLABEL' />
        </div>
    );
}
