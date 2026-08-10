import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../../../DoruriDocumentTitle';

import '../../../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './DayMemYoungKEternalAlbum.css';

import Menu from '../../../../Menu';
import FooterPart from '../../../../FooterPart';

// import Bol4FindYouAlbum_img from './img/Bol4FindYouAlbum_img.jpg';

import MainH2deco from '../../../../img/main_h2_deco.png';

export default function DayMemYoungKEternalAlbum() {
    DoruriDocumentTitle('Eternal');

    return (
        <div className='day_DayMemYoungKEternalAlbum_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/DayMemYoungKEternalAlbum' className="on">한국어</Link>
                <Link to='/DayMemYoungKEternalAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'>
                <img src={MainH2deco} alt="Young K 앨범 꾸미기" />Eternal<img src={MainH2deco} alt="Young K 앨범 꾸미기" />
            </h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                영원을 바라보고<br />
                노래할 것을 약속하며<br />
                앨범을 준비했어요!
            </p>
            <img src='' alt="Eternal" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                2021.09.06.
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
                                록/메탈, 발라드, R&B/Soul, 포크/블루스
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
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 day_DayMemYoungKEternalAlbum_tb2'>
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
                                베스트 송
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
                                끝까지 안아 줄게
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
                                사랑은 얼어 죽을
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
                                Microphone &#40;Feat. 다운&#40;Dvwn&#41;&#41;
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
                                그대로 와 줘요
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
                                잘 자라 내 사람아
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ JYP엔터테인먼트' />
        </div>
    );
}


