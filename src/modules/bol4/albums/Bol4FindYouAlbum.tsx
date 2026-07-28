import { Link } from 'react-router-dom';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import './Bol4FindYouAlbum.css';

import Menu from '../../Menu';

import MainH2deco from '../../img/main_h2_deco.png';

export default function Bol4FindYouAlbum() {
    return (
        <div className='bol_Bol4FindYouAlbum_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/Bol4FindYouAlbum' className="on">한국어</Link>
                <Link to='/Bol4FindYouAlbumEng'>English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'><img src={MainH2deco} alt="볼빨간 사춘기 앨범 꾸미기" />Find You<img src={MainH2deco} alt="볼빨간 사춘기 앨범 꾸미기" /></h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                밤새 내린 비에 젖은<br />
                꽃잎들까지도 다 봄이라는<br />
                생각을 해보며 준비한 앨범이에요!
            </p>
            <img src="" alt="Find You" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
                                2026.04.22.
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
                                인디음악, 포크/블루스, 록/메탈
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
                                Kanverse
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

