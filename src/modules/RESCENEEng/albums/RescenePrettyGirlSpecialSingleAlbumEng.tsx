import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import '../../RESCENE/albums/RescenePrettyGirlSpecialSingleAlbum.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import RescenePrettyGirlSpecialSingleAlbum_img from '../../RESCENE/albums/img/RescenePrettyGirlSpecialSingleAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function RescenePrettyGirlSpecialSingleAlbumEng() {
    EngPage('en', 'ko');

    return (
        <div className="res_RescenePrettyGirlSpecialSingleAlbum_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/RescenePrettyGirlSpecialSingleAlbum'>한국어</Link>
                <Link to='/RescenePrettyGirlSpecialSingleAlbumEng' className="on">English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="RESCENE deco" />Pretty Girl - Special Single<img src={MainH2deco} alt="RESCENE deco" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                We've prepared an album<br />
                filled with clear and<br />
                confident songs!
            </p>
            <img src={RescenePrettyGirlSpecialSingleAlbum_img} alt="Pretty girl special single" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                July, 8, 2026
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
                                dance
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
                                THE MUZE ENTERTAINMENT
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 res_RescenePrettyGirlSpecialSingleAlbum_tb2'>
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
                                Pretty Girl
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ THE MUZE ENTERTAINMENT' />
        </div>
    );
}
