import { Link } from 'react-router-dom';

import '../../../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import '../../../../DAY6/members/YoungK/albums/DayMemYoungKEternalAlbum.css';

import MenuEng from '../../../../HomeEng/MenuEng';
import FooterPartEng from '../../../../FooterPartEng';

// import Bol4FindYouAlbum_img from './img/Bol4FindYouAlbum_img.jpg';

import MainH2deco from '../../../../img/main_h2_deco.png';

export default function DayMemYoungKEternalAlbumEng() {
    return (
        <div className='day_DayMemYoungKEternalAlbum_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/DayMemYoungKEternalAlbum'>한국어</Link>
                <Link to='/DayMemYoungKEternalAlbumEng' className="on">English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="Young K deco" />Eternal<img src={MainH2deco} alt="Young K deco" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                We prepared this album<br />
                with the promise to look<br />
                to eternity and sing!
            </p>
            <img src='' alt="Eternal" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                September, 6, 2021
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
                                rock/metal, ballad, R&B/Soul, folk/blues
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
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 day_DayMemYoungKEternalAlbum_tb2'>
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
                                Best song
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
                                I&apos;ll hold you tight until the end
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
                                Love will freeze to death
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
                                Microphone &#40;Feat. Dvwn&#41;
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
                                want to love you
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                6
                            </p>
                        </td>
                        <td>
                            <p>
                                Please come as you are
                            </p>
                        </td>
                    </tr>

                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb2_tr9'>
                        <td>
                            <p>
                                7
                            </p>
                        </td>
                        <td>
                            <p>
                                Sleep well, my person
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ JYP ENTERTAINMENT' />
        </div>
    );
}
