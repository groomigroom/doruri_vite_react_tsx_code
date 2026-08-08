AespaSynkAexisLineAlbum.tsx

3줄 글 폰으로 하기.


  This is an album prepared with songs that have matured even further!

import { Link } from 'react-router-dom';

import './TriplesBabyFlowerCityRemixesAlbum.css';
import './TriplesDreamDressAlbum.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

// import TriplesBabyFlowerCityRemixesAlbum_img from './img/TriplesBabyFlowerCityRemixesAlbum_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function AespaSynkAexisLineAlbum() {
return (
<div className="aes_AespaSynkAexisLineAlbum_full">
<Menu />
<section className="home_translate">
<Link to='/AespaSynkAexisLineAlbum' >한국어</Link>
<Link to='/AespaSynkAexisLineAlbumEng' className="on">English</Link>
</section>
<h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'><img src={MainH2deco} alt="aespa deco" />SYNK : aeXIS LINE - 2025 Special Digital Single<img src={MainH2deco} alt="aespa deco" /></h2>
<p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
#######견고해진 음악적<br/>
성장의 이야기도<br/>
담은 앨범이에요!
</p>
<img src='' alt="AespaSynkAexisLineAlbum" className='tri_BabyFlowerCityRemixesAlbum_img' />
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
2025.11.17.
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
댄스, R&B/Soul, 록/메탈
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
SM엔터테인먼트
</p>
</td>
</tr>
</tbody>
</table>
<h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ 곡 목록 ▪</h2>
<table className='tri_BabyFlowerCityRemixesAlbum_tb2'>
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
BLUE &#40;WINTER Solo&#41;
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
Ketchup And Lemonade &#40;NINGNING Solo&#41;
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
Tornado &#40;GISELLE Solo&#41;
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
GOOD STUFF &#40;KARINA Solo&#41;
</p>
</td>
</tr>
</tbody>
</table>
<FooterPart FooterPartText='ⓒ SM엔터테인먼트' />
</div>
);
}
