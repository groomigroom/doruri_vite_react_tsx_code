import { Link } from 'react-router-dom';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './BtobWeAgainAlbum.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import BtobWeAgainAlbum_img from './img/BtobWeAgainAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function BtobWeAgainAlbum() {
    return (
        <div className='btob_BtobWeAgainAlbum_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/BtobWeAgainAlbum' className="on">한국어</Link>
                <Link to='/BtobWeAgainAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="비투비 앨범 꾸미기" />우리 다시<img src={MainH2deco} alt="비투비 앨범 꾸미기" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                진심 가득한<br />
                마음을 담아서<br />
                준비한 앨범이에요!
            </p>
            <img src={BtobWeAgainAlbum_img} alt="BtobWeAgainAlbum" className='tri_BabyFlowerCityRemixesAlbum_img ten_TenCMSliverOfPossibilityAlbum_img' />
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
                                2026.03.21.
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
                                발라드
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
                                비투비 컴퍼니
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 btob_BtobWeAgainAlbum_tb2'>
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
                                우리 다시
                            </p>
                        </td>
                    </tr>

                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb2_tr9'>
                        <td>
                            <p>
                                2
                            </p>
                        </td>
                        <td>
                            <p>
                                우리 다시 &#40;Inst.&#41;
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 비투비 컴퍼니' />
        </div>
    );
}
