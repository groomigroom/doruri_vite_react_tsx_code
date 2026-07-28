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
        </div>
    );
}

