import { useState } from "react";

import "./TxtEvent.css";

import TxtELogo from "./img/txt_e_logo.png";
import TxtEventPre from "./TxtEventPre";


export default function TxtEvent() {
    const [txt_e_str, setTxt_e_str] = useState<string>("");

    const Txt_e_handle_input_change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTxt_e_str(e.target.value);
    }

    const txt_e_target = ['낮', '설', '기', '만'];
    const txt_e_count = txt_e_target.filter((txt_e_char, txt_e_index) => txt_e_str[txt_e_index] === txt_e_char).length;

    let txt_e_last_str: string = "";

    if (txt_e_str.length === 4) {
        txt_e_last_str = '맞춘 개수: ' + txt_e_count + "개";
    }
    else {
        txt_e_last_str = '글자 수가 4글자가 아닙니다.';
    }

    console.log(txt_e_last_str);

    const [txt_e_PopopO, txt_e_SetPopupO] = useState<boolean>(false);
    const txt_e_OpPopup = () => txt_e_SetPopupO(true);
    const txt_e_ClPopup = () => txt_e_SetPopupO(false);
    return (
        <div className="txt_e_full">
            <img src={TxtELogo} alt="TxtELogo" className="txt_e_logo" />
            <h2 className="txt_e_h2">"하루에 하루만 더" 가사 맟주기 이벤트</h2>
            <p className="txt_e_mp">
                머물러 줘<br />
                하루에 하루만 더<br />
                헤어질 수 없어<br />
                I&apos;ll just stick with you<br />
                <br />
                언제부턴지 몰라도<br />
                미지근한 너의 태도<br />
                ㅁㅁㅁㅁ 한 표정, 말투도<br />
                <br />
                ㅁㅁㅁㅁ에 들어갈 말을 아래에 입력해 주세요.
                {/* 낯설기만 */}
            </p>
            <form action="" className="txt_e_form">
                <input type="text" name="txt_e_in" value={txt_e_str} onChange={Txt_e_handle_input_change} />
            </form>
            <button className="txt_e_btn" onClick={txt_e_OpPopup}>제출하기</button>
            {txt_e_PopopO && (
                <TxtEventPre txt_e_OnCl={txt_e_ClPopup} txt_e_result={txt_e_last_str} />
            )}
        </div>
    );
};
