import './LoginMain.css';

import Menu from "../Menu";
import FooterPart from "../FooterPart";

import MainH2Deco from '../img/main_h2_deco.png';

export default function LoginMain() {
    return (
        <div className="login_main_full">
            <Menu />
            <h2 className='login_m_h2'><img src={MainH2Deco} alt="로그인 꾸미기" />로그인<img src={MainH2Deco} alt="로그인 꾸미기" /></h2>
            <form action="https://localhost:8080/login_anne" method="post" encType="multipart/form-data" className="login_main_form">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="title">제목</label>
                            </td>
                            <td>
                                <input id='title' type="text" name="title" placeholder="텍스트 입력" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <label htmlFor="content">내용</label>
                <input id='content' type="text" name="content" />
                <label htmlFor="id">id</label>
                <input id='id' type="text" name="id" />
                <label htmlFor="password">password</label>
                <input id='password' type="password" name="password" />
                <input type="submit" />
            </form>
            <FooterPart FooterPartText='ⓒ 도루리' />
        </div>
    );
}
