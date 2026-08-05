import './DoruriUpdate.css';

import Menu from "../Menu";

import MainH2Deco from '../img/main_h2_deco.png';

export default function DoruriUpdate() {
    return (
        <div className="doruri_update_full">
            <Menu />
            <h2 className='doruri_update_m_h2'><img src={MainH2Deco} alt="로그인 꾸미기" />업데이트 내역<img src={MainH2Deco} alt="로그인 꾸미기" /></h2>
        </div>
    );
}
