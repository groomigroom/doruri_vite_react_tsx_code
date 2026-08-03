import { Link } from 'react-router-dom';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './EpikHighBruzHalipaOursVersionAlbum.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

// import TriplesBabyFlowerCityRemixesAlbum_img from './img/TriplesBabyFlowerCityRemixesAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function EpikHighBruzHalipaOursVersionAlbum() {
    return (
        <div className="epi_EpikHighBruzHalipaOursVersionAlbum_full">
            <Menu />
            <section className="home_translate">
                <Link to='/EpikHighBruzHalipaOursVersionAlbum' className="on">한국어</Link>
                <Link to='/EpikHighBruzHalipaOursVersionAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'><img src={MainH2deco} alt="에픽하이" />부르즈 할리파 &#40;Ours Version&#41;<img src={MainH2deco} alt="에픽하이" /></h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                #######견고해진 음악적<br />
                성장의 이야기도<br />
                담은 앨범이에요!
            </p>
            <img src='' alt="EpikHighBruzHalipaOursVersionAlbum" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                2024.09.12.
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

                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb2_tr9'>
                        <td>
                            <p>
                                1
                            </p>
                        </td>
                        <td>
                            <p>
                                부르즈 할리파 &#40;Ours Version&#41;
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 아워즈' />
        </div>
    );
}
