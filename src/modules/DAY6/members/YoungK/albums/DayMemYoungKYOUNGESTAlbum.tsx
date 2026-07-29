import { Link } from 'react-router-dom';

import '../../../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './DayMemYoungKYOUNGESTAlbum.css';

import Menu from '../../../../Menu';
import FooterPart from '../../../../FooterPart';

// import Bol4FindYouAlbum_img from './img/Bol4FindYouAlbum_img.jpg';

import MainH2deco from '../../../../img/main_h2_deco.png';

export default function DayMemYoungKYOUNGESTAlbum() {
    return (
        <div className='day_DayMemYoungKYOUNGESTAlbum_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/DayMemYoungKYOUNGESTAlbum' className="on">한국어</Link>
                <Link to='/DayMemYoungKYOUNGESTAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="Young K 앨범 꾸미기" />YOUNGEST<img src={MainH2deco} alt="Young K 앨범 꾸미기" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                누구에게도 좋은 일이<br />
                일어나길 원하는<br />
                바람을 담은 앨범이에요!
            </p>
            <img src='' alt="Find You" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                2026.07.27.
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
                                록/메탈, R&B/Soul, 포크/블루스, 발라드, 일렉트로니카
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
                                JYP 엔터테인먼트
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 Bol4FindYouAlbum_tb2'>
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
                                Find You
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
                                아름다운 안녕
                            </p>
                        </td>
                    </tr>
                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb2_tr9'>
                        <td>
                            <p>
                                3
                            </p>
                        </td>
                        <td>
                            <p>
                                나를 봄으로 데려가!
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 켄버스' />
        </div>
    );
}



