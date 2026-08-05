import { Link } from "react-router-dom";

import "./home.css";

import Menu from './Menu';
import FooterPart from "./FooterPart";

export default function Home() {
    return (
        <div className="home_full">
            <Menu />
            <section className="home_translate">
                <Link to='/' className="on">한국어</Link>
                <Link to='/Eng'>English</Link>
            </section>
            <img src="" alt="도루리 로고" className="home_logo" />
            <section className="home_img_slide_full"></section>
            <h2 className='home_h2 home_h2_1'>▪ 2026.08.05. 업데이트 내역 ▪</h2>
            <table className='home_main_intropa_tb'>
                <tbody>
                    <tr className='home_main_intropa_tb_tr1'>
                        <td className='home_main_intropa_tb_td1'>
                            <p>번호</p>
                        </td>
                        <td className='home_main_intropa_tb_td2'>
                            <p>내용</p>
                        </td>
                    </tr>
                    <tr>
                        <td className='home_main_intropa_tb_td1'>
                            <p>1</p>
                        </td>
                        <td className='home_main_intropa_tb_td2'>
                            <Link to='/ResMain'>RESCENE 메인 페이지에 최신 앨범 등록</Link>
                        </td>
                    </tr>
                    <tr>
                        <td className='home_main_intropa_tb_td1'>
                            <p>2</p>
                        </td>
                        <td className='home_main_intropa_tb_td2'>
                            <Link to='/RescenePrettyGirlSpecialSingleAlbum'>Pretty Girl - Special Single 앨범 등록</Link>
                        </td>
                    </tr>
                    <tr>
                        <td className='home_main_intropa_tb_td1'>
                            <p>3</p>
                        </td>
                        <td className='home_main_intropa_tb_td2'>
                            <Link to='/DoruriUpdate'>업데이트 내역 등록 시작</Link>
                        </td>
                    </tr>
                    <tr>
                        <td className='home_main_intropa_tb_td1'>
                            <p>4</p>
                        </td>
                        <td className='home_main_intropa_tb_td2'>
                            <Link to='/'>x</Link>
                        </td>
                    </tr>
                    <tr>
                        <td className='home_main_intropa_tb_td1'>
                            <p>5</p>
                        </td>
                        <td className='home_main_intropa_tb_td2'>
                            <Link to='/'>x</Link>
                        </td>
                    </tr>
                    <tr className='home_main_intropa_tb_tr6'>
                        <td>
                            <Link to='/DoruriUpdateAugust5th2026'>더 보기</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 도루리' />
        </div>
    )
}
