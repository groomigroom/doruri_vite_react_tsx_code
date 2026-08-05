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

            <FooterPart FooterPartText='ⓒ 도루리' />
        </div>
    )
}
