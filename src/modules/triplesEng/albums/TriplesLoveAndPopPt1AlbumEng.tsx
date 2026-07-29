import { Link } from 'react-router-dom';

import '../../triples/albums/TriplesBabyFlowerCityRemixesAlbum.css';
import '../../triples/albums/TriplesLoveAndPopPt1Album.css'

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import TriplesLoveAndPopPt1Album_img from '../../triples/albums/img/TriplesLoveAndPopPt1Album_img.jpg';

import MainH2deco from '../../img/main_h2_deco.png';

export default function TriplesLoveAndPopPt1AlbumEng() {
    return (
        <div className="tri_LoveAndPopPt1Album_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesLoveAndPopPt1Album'>한국어</Link>
                <Link to='/TriplesLoveAndPopPt1AlbumEng' className="on">English</Link>
            </section>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_1'><img src={MainH2deco} alt="tripleS deco" />&lt;LOVE&POP&gt; pt.1<img src={MainH2deco} alt="tripleS deco" /></h2>
            <p className='tri_BabyFlowerCityRemixesAlbum_intropp'>
                Let&apos;s lift our heads,<br />
                join our strength, and move<br />
                toward the world together!
            </p>
            <img src={TriplesLoveAndPopPt1Album_img} alt="LOVE&POP pt.1" className='tri_BabyFlowerCityRemixesAlbum_img' />
            <table className='tri_BabyFlowerCityRemixesAlbum_tb1'>
                <tbody>
                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb1_tr1'>
                        <td>
                            <p>
                                release date
                            </p>
                        </td>
                        <td>
                            <p>
                                June, 1, 2026
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                genre
                            </p>
                        </td>
                        <td>
                            <p>
                                dance
                            </p>
                        </td>
                    </tr>
                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb1_tr3'>
                        <td>
                            <p>
                                agency
                            </p>
                        </td>
                        <td>
                            <p>
                                Modhaus
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 className='tri_BabyFlowerCityRemixesAlbum_h2 tri_BabyFlowerCityRemixesAlbum_h2_2'>▪ song list ▪</h2>
            <table className='tri_BabyFlowerCityRemixesAlbum_tb2 tri_LoveAndPopPt1Album_tb2'>
                <tbody>
                    <tr className='tri_BabyFlowerCityRemixesAlbum_intropa_tb2_tr1'>
                        <td>
                            <p>
                                number
                            </p>
                        </td>
                        <td>
                            <p>
                                title
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
                                Sad Girls Schemin&apos;
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
                                Peer
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
                                Baby Flower
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
                                Type of Girl
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
                                Sleek
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
                                I Like That
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
                                Me Myself Mode
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ Modhaus' />
        </div>
    );
}





