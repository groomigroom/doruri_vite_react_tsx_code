import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import '../../EpikHigh/albums/EpikHighPumpCollectorsEditionAlbum.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import EpikHighPumpCollectorsEditionAlbum_img from '../../EpikHigh/albums/img/EpikHighPumpCollectorsEditionAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function EpikHighPumpCollectorsEditionAlbumEng() {
    EngPage('en', 'ko');

    return (
        <div className="epi_EpikHighPumpCollectorsEditionAlbum_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/EpikHighPumpCollectorsEditionAlbum'>한국어</Link>
                <Link to='/EpikHighPumpCollectorsEditionAlbumEng' className="on">English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'><img src={MainH2deco} alt="epik high" />PUMP COLLECTOR&apos;S EDITION<img src={MainH2deco} alt="epik high" /></h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                This is an album we<br />
                prepared while reflecting<br />
                deeply on it as well!
            </p>
            <img src={EpikHighPumpCollectorsEditionAlbum_img} alt="EpikHighPumpCollectorsEditionAlbum" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                October, 18, 2024
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
                                아워즈
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
                    <tr>
                        <td>
                            <p>
                                1
                            </p>
                        </td>
                        <td>
                            <p>
                                PRETTY MUCH &#40;Intro&#41;
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
                                ANTIHERO
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
                                Michelin CYPHER
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
                                LATE CHECKOUT &#40;GO Edit&#41;
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
                                K-DRAMA
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
                                GOOD RIDDANCE
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                7
                            </p>
                        </td>
                        <td>
                            <p>
                                GROUP CHAT FREESTYLE &#40;Full Ver.&#41;
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                8
                            </p>
                        </td>
                        <td>
                            <p>
                                OK GOOD
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                9
                            </p>
                        </td>
                        <td>
                            <p>
                                OFF DAY &#40;Verse Ver.&#41;
                            </p>
                        </td>
                    </tr>

                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb2_tr9'>
                        <td>
                            <p>
                                10
                            </p>
                        </td>
                        <td>
                            <p>
                                I was happy &#40;Feat. Kim Jong Wan of Nell&#41;
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ Ours' />
        </div>
    );
}
