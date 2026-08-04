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
                <table className='login_main_intropa_tb'>
                    <tbody>
                        <tr className='login_main_intropa_tb_tr1'>
                            <td className='login_main_intropa_tb_td1'>
                                <label htmlFor="login_main_id">아이디</label>
                            </td>
                            <td className='login_main_intropa_tb_td2'>
                                <input id='login_main_id' type="text" name="id" />
                            </td>
                        </tr>
                        <tr>
                            <td className='login_main_intropa_tb_td1'>
                                <label htmlFor="password">비밀번호</label>
                            </td>
                            <td className='login_main_intropa_tb_td2'>
                                <input id='password' type="password" name="password" />
                            </td>
                        </tr>
                        <tr className='login_main_intropa_tb_tr3'>
                            <td>
                                <input type="submit" value='로그인 하기' />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <FooterPart FooterPartText='ⓒ 도루리' />
        </div>
    );
}
