import { Link } from 'react-router-dom';

import '../../../albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './TriplesAAAAcidAngelFromAsiaAlbum.css';

import Menu from '../../../../Menu';
import FooterPart from '../../../../FooterPart';

//import TriplesBabyFlowerCityRemixesAlbum_img from './img/TriplesBabyFlowerCityRemixesAlbum_img.jpg';

import MainH2deco from '../../../../img/main_h2_deco.png';

export default function TriplesAAAAcidAngelFromAsiaAlbum() {
    return (
        <div className="tri_aaa_TriplesAAAAcidAngelFromAsiaAlbum_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesAAAAcidAngelFromAsiaAlbum' className="on">한국어</Link>
                <Link to='/TriplesAAAAcidAngelFromAsiaAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="트리플에스 앨범 꾸미기" />Acid Angel from Asia &lt;ACCESS&gt;<img src={MainH2deco} alt="트리플에스 앨범 꾸미기" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                #####
            </p>
            <img src={""} alt="Baby Flower City Remixes" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                2022.10.28.
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
                                댄스, R&B/Soul
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
                                모드하우스
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 tri_aaa_TriplesAAAAcidAngelFromAsiaAlbum_tb2'>
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
                                Access
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
                                Generation
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
                                Rolex
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
                                찰나 &#40;Charla&#41;
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
                                Dimension &#40;AAA Ver.&#41;
                            </p>
                        </td>
                    </tr>
                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb2_tr9'>
                        <td>
                            <p>
                                4
                            </p>
                        </td>
                        <td>
                            <p>
                                +&#40;82&#41;
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ ㈜모드하우스' />
        </div>
    );
}
