import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import '../../ALLDAY_PROJECT/albums/AlldayProjectIDonBargainAlbum.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import AlldayProjectIDonBargainAlbum_img from '../../ALLDAY_PROJECT/albums/img/AlldayProjectIDonBargainAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function AlldayProjectIDonBargainAlbumEng() {
    EngPage('en', 'ko');

    return (
        <div className="all_AlldayProjectIDonBargainAlbum_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/AlldayProjectIDonBargainAlbum'>한국어</Link>
                <Link to='/AlldayProjectIDonBargainAlbumEng' className="on">English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'><img src={MainH2deco} alt="ALLDAY PROJECT deco" />I DON&apos;T BARGAIN<img src={MainH2deco} alt="ALLDAY PROJECT deco" /></h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                This is an album prepared<br />
                with the thought of<br />
                preserving our unique qualities!
            </p>
            <img src={AlldayProjectIDonBargainAlbum_img} alt="AlldayProjectIDonBargainAlbum" className='tri_BabyFlowerCityRemixesAlbum_img all_AlldayProjectIDonBargainAlbum_img' />
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
                                March, 9, 2026
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
                                rap/hiphop
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
                                THEBLACKLABEL, PUBG: BATTLEGROUNDS
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ song list ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 all_AlldayProjectIDonBargainAlbum_tb2'>
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

                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb2_tr9'>
                        <td>
                            <p>
                                1
                            </p>
                        </td>
                        <td>
                            <p>
                                I DON&apos;T BARGAIN
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ THEBLACKLABEL' />
        </div>
    );
}
