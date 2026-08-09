import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import './TriplesBabyFlowerCityRemixesAlbum.css';
import './TriplesDreamDressAlbum.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import TriplesDreamDressAlbum_img from './img/TriplesDreamDressAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function TriplesDreamDressAlbum() {
    DoruriDocumentTitle('Dream Dress');

    return (
        <div className="tri_TriplesDreamDressAlbum_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesDreamDressAlbum' className="on">한국어</Link>
                <Link to='/TriplesDreamDressAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'><img src={MainH2deco} alt="트리플에스 앨범 꾸미기" />Dream Dress<img src={MainH2deco} alt="트리플에스 앨범 꾸미기" /></h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                자신의 존재와<br />
                가치를 생각해 보며<br />
                준비한 앨범이에요!
            </p>
            <img src={TriplesDreamDressAlbum_img} alt="Dream Dress" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                2026.08.01.
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
                                J-POP
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
                                Dream Dress
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ ㈜모드하우스' />
        </div>
    );
}
