import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import '../../10CM/albums/TenCMTheDarkestNightAlbum.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import TenCMTheDarkestNightAlbum_img from '../../10CM/albums/img/TenCMTheDarkestNightAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function TenCMTheDarkestNightAlbumEng() {
    EngPage('en', 'ko');

    return (
        <div className='ten_TenCMTheDarkestNightAlbum_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/TenCMTheDarkestNightAlbum'>한국어</Link>
                <Link to='/TenCMTheDarkestNightAlbumEng' className="on">English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="10CM deco" />The Darkest Night<img src={MainH2deco} alt="10CM deco" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                I prepared this album<br />
                while thinking about<br />
                lonely hearts!
            </p>
            <img src={TenCMTheDarkestNightAlbum_img} alt="The Darkest Night" className='tri_BabyFlowerCityRemixesAlbum_img ten_TenCMTheDarkestNightAlbum__img' />
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
                                July, 22, 2026
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
                                rock/metal
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
                                CAM WITH US
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 ten_TenCMTheDarkestNightAlbum_tb2'>
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
                                The Darkest Night
                            </p>
                        </td>
                    </tr>

                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb2_tr9'>
                        <td>
                            <p>
                                2
                            </p>
                        </td>
                        <td>
                            <p>
                                The Darkest Night &#40;Inst.&#41;
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ CAM WITH US' />
        </div>
    );
}
