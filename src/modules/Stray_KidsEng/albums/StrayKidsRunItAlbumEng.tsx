import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import '../../Stray_Kids/albums/StrayKidsRunItAlbum.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

// import Bol4FindYouAlbum_img from './img/Bol4FindYouAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function StrayKidsRunItAlbumEng() {
    EngPage('en', 'ko');

    return (
        <div className='str_StrayKidsRunItAlbum_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/StrayKidsRunItAlbum'>한국어</Link>
                <Link to='/StrayKidsRunItAlbumEng' className="on">English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="Stray Kids deco" />RUN IT<img src={MainH2deco} alt="Stray Kids deco" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                dddd10년전의 기억을<br />
                담아서 앨범을<br />
                준비했어요!
            </p>
            <img src='' alt="RUN IT" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                June, 24, 2026
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
                                JYP ENTERTAINMENT
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ song list ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 str_StrayKidsRunItAlbum_tb2'>
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
                                RUN IT
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ JYP ENTERTAINMENT' />
        </div>
    );
}
