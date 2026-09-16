import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import '../../10CM/albums/TenCMSliverOfPossibilityAlbum.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

// import TenCMTheDarkestNightAlbum_img from '../../10CM/albums/img/TenCMTheDarkestNightAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function TenCMSliverOfPossibilityAlbumEng() {
    EngPage('en', 'ko');

    return (
        <div className='ten_TenCMSliverOfPossibilityAlbum_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/TenCMSliverOfPossibilityAlbum'>한국어</Link>
                <Link to='/TenCMSliverOfPossibilityAlbumEng' className="on">English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="10CM deco" />A sliver of possibility<img src={MainH2deco} alt="10CM deco" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                I prepared the album<br />
                with a hopeful<br />
                heart as well!
            </p>
            <img src='' alt="TenCMSliverOfPossibilityAlbum" className='tri_BabyFlowerCityRemixesAlbum_img ten_TenCMSliverOfPossibilityAlbum_img' />
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
                                July, 2, 2026
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
                                folk/blues
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
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ song list ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 ten_TenCMSliverOfPossibilityAlbum_tb2'>
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
                                A sliver of possibility
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
                                A sliver of possibility &#40;Inst.&#41;
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ CAM WITH US' />
        </div>
    );
}
