import { Link } from 'react-router-dom';

import '../DoruriUpdatePart.css';
import './DoruriUpdateAugust5th2026.css';

import Menu from "../../Menu";
import FooterPart from '../../FooterPart';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function DoruriUpdateAugust5th2026() {
    return (
        <div className="doruri_update_DoruriUpdateAugust5th2026_full">
            <Menu />
            <h2 className='doruri_update_updatePart_h2'><img src={MainH2Deco} alt="로그인 꾸미기" />2026.08.05. 업데이트 내역<img src={MainH2Deco} alt="로그인 꾸미기" /></h2>
            <table className='doruri_update_updatePart_intropa_tb doruri_update_DoruriUpdateAugust5th2026_intropa_tb'>
                <tbody>
                    <tr className='doruri_update_updatePart_intropa_tb_tr1'>
                        <td><p>번호</p></td>
                        <td><p>내용</p></td>
                    </tr>
                    <tr>
                        <td><p>1</p></td>
                        <td><Link to='/RescenePrettyGirlSpecialSingleAlbum'>RESCENE 메인 페이지에 최신 앨범 등록</Link></td>
                    </tr>
                    <tr>
                        <td><p>2</p></td>
                        <td><Link to='/RescenePrettyGirlSpecialSingleAlbum'>Pretty Girl - Special Single 앨범 등록</Link></td>
                    </tr>
                    <tr className='doruri_update_updatePart_intropa_tb_tr9'>
                        <td><p>3</p></td>
                        <td><Link to='/DoruriUpdate'>업데이트 내역 등록 시작</Link></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 도루리' />
        </div>
    );
}
