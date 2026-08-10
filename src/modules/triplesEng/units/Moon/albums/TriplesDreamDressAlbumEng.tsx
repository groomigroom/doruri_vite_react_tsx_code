import { Link } from 'react-router-dom';
import { EngPage } from '../../../../HomeEng/EngPage';

import '../../../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import '../../../../triples/units/Moon/albums/TriplesDreamDressAlbum.css';

import MenuEng from '../../../../HomeEng/MenuEng';
import FooterPartEng from '../../../../FooterPartEng';

import TriplesDreamDressAlbum_img from '../../../../triples/units/Moon/albums/img/TriplesDreamDressAlbum_img.jpg';

import MainH2deco from '../../../../img/main_h2_deco.png';

export default function TriplesDreamDressAlbumEng() {
    EngPage('en', 'ko');

    return (
        <div className="tri_TriplesDreamDressAlbum_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesDreamDressAlbum'>한국어</Link>
                <Link to='/TriplesDreamDressAlbumEng' className="on">English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'><img src={MainH2deco} alt="트리플에스 앨범 꾸미기" />Dream Dress<img src={MainH2deco} alt="트리플에스 앨범 꾸미기" /></h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                This is an album we<br />
                prepared while reflecting<br />
                on our existence and value!
            </p>
            <img src={TriplesDreamDressAlbum_img} alt="Dream Dress" className='tri_BabyFlowerCityRemixesAlbum_img tri_moon_TriplesDreamDressAlbum_img' />
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
                                August, 1, 2026
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
                                J-POP
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
                                Sony Music Labels Inc.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 tri_TriplesDreamDressAlbum_tb2'>
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
                                Dream Dress
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ Modhaus' />
        </div>
    );
}
