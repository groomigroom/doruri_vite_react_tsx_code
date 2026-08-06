import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import '../../EpikHigh/albums/EpikHighBruzHalipaOursVersionAlbum.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import EpikHighBruzHalipaOursVersionAlbum_img from '../../EpikHigh/albums/img/EpikHighBruzHalipaOursVersionAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function EpikHighBruzHalipaOursVersionAlbumEng() {
    EngPage('en', 'ko');

    return (
        <div className="epi_EpikHighBruzHalipaOursVersionAlbum_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/EpikHighBruzHalipaOursVersionAlbum'>한국어</Link>
                <Link to='/EpikHighBruzHalipaOursVersionAlbumEng' className="on">English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="epik high" />Burj Khalifa &#40;Ours Version&#41;<img src={MainH2deco} alt="epik high" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                This is an album<br />
                prepared with high<br />
                aspirations in mind!
            </p>
            <img src={EpikHighBruzHalipaOursVersionAlbum_img} alt="EpikHighBruzHalipaOursVersionAlbum" className='tri_BabyFlowerCityRemixesAlbum_img epi_EpikHighBruzHalipaOursVersionAlbum_img' />
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
                                September, 12, 2024
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
                                Ours
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 epi_EpikHighBruzHalipaOursVersionAlbum_tb2'>
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
                                Burj Khalifa &#40;Ours Version&#41;
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ Ours' />
        </div>
    );
}
