import { Link } from "react-router-dom";
import { EngPage } from "./EngPage";

import "../home.css";

import MenuEng from "./MenuEng";


// import Menu from './Menu';

export default function HomeEng() {
    EngPage('en', 'ko');

    return (
        <div className="home_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/'>한국어</Link>
                <Link to='/Eng' className="on">English</Link>
            </section>
            <img src="" alt="도루리 로고" className="home_logo" />
            <section className="home_img_slide_full"></section>
            <h2 className='home_h2 home_h2_1'>▪ August, 5, 2026 update history ▪</h2>
            <table className='home_main_intropa_tb'>
                <tbody>
                    <tr className='home_main_intropa_tb_tr1'>
                        <td className='home_main_intropa_tb_td1'>
                            <p>number</p>
                        </td>
                        <td className='home_main_intropa_tb_td2'>
                            <p>contents</p>
                        </td>
                    </tr>
                    <tr>
                        <td className='home_main_intropa_tb_td1'>
                            <p>1</p>
                        </td>
                        <td className='home_main_intropa_tb_td2'>
                            <Link to='/RescenePrettyGirlSpecialSingleAlbum'>Pretty Girl - Special Single album registration</Link>
                        </td>
                    </tr>
                    <tr>
                        <td className='home_main_intropa_tb_td1'>
                            <p>2</p>
                        </td>
                        <td className='home_main_intropa_tb_td2'>
                            <Link to='/'>x</Link>
                        </td>
                    </tr>
                    <tr>
                        <td className='home_main_intropa_tb_td1'>
                            <p>3</p>
                        </td>
                        <td className='home_main_intropa_tb_td2'>
                            <Link to='/'>x</Link>
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
                            <Link to='/'>show more</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
