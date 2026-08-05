import { Link } from 'react-router-dom';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './EpikHighBruzHalipaOursVersionAlbum.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import EpikHighBruzHalipaOursVersionAlbum_img from './img/EpikHighBruzHalipaOursVersionAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function EpikHighPumpCollectorsEditionAlbum() {
    return (
        <div className="epi_EpikHighPumpCollectorsEditionAlbum_full">
            <Menu />
            <section className="home_translate">
                <Link to='/EpikHighBruzHalipaOursVersionAlbum' className="on">한국어</Link>
                <Link to='/EpikHighBruzHalipaOursVersionAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="에픽하이" />PUMP COLLECTOR&apos;S EDITION<img src={MainH2deco} alt="에픽하이" /></h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                깊은 생각도 해보며<br />
                준비한<br />
                앨범이에요!
            </p>
            <img src={EpikHighBruzHalipaOursVersionAlbum_img} alt="EpikHighBruzHalipaOursVersionAlbum" className='tri_BabyFlowerCityRemixesAlbum_img epi_EpikHighBruzHalipaOursVersionAlbum_img' />
            <table className='tri_BabyFlowerCityRemixesAlbum_tb1'>
                <tbody>
                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb1_tr1'>
                        <td>
                            <p>
                                발매일
                            </p>
                        </td>
                        <td>
                            <p>
                                2024.10.18.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                장르
                            </p>
                        </td>
                        <td>
                            <p>
                                랩/힙합
                            </p>
                        </td>
                    </tr>
                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb1_tr3'>
                        <td>
                            <p>
                                기획사
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
                                번호
                            </p>
                        </td>
                        <td>
                            <p>
                                제목
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
                                미슐랭 CYPHER
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
                                신사들의 소신 &#40;GOOD RIDDANCE&#41;
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
                                행복했습니다 &#40;Feat. Kim Jong Wan of Nell&#41;
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 아워즈' />
        </div>
    );
}
