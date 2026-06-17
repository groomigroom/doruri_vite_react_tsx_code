import { useState } from "react";

import "./TxtEvent.css";

import TxtELogo from "./img/txt_e_logo.png";

interface txt_e_formState {
    txt_e_in: string;
}

export default function TxtEvent() {
    const [txt_e_form, txt_e_setform] = useState<txt_e_formState>({
        txt_e_in: '',
    });

    const txt_e_handleChange = (txt_e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = txt_e.target;
        txt_e_setform((txt_e_prev) => ({
            ...txt_e_prev,
            [name]: value,
        }));
    };

    let txt_e_result = '';
    if (txt_e_form.txt_e_in === "낯설기만") {
        txt_e_result = '정답입니다.';
    }
    else {
        txt_e_result = '오답입니다.';
    }

    console.log(txt_e_result);
    return (
        <div className="txt_e_full">
            <img src={TxtELogo} alt="TxtELogo" className="txt_e_logo" />
            <h2 className="txt_e_h2">"하루에 하루만 더" 가사 맟주기 이벤트</h2>
            <p className="txt_e_mp">
                머물러 줘<br />
                하루에 하루만 더<br />
                헤어질 수 없어<br />
                I’ll just stick with you<br />
                <br />
                언제부턴지 몰라도<br />
                미지근한 너의 태도<br />
                ㅁㅁㅁㅁ 한 표정, 말투도<br />
                <br />
                ㅁㅁㅁㅁ에 들어갈 말을 아래에 입력해 주세요.
                {/* 낯설기만 */}
            </p>
            <form action="" className="txt_e_form">
                <input type="text" name="txt_e_in" value={txt_e_form.txt_e_in} onChange={txt_e_handleChange} />
            </form>
            <button className="txt_e_btn"></button>
        </div>
    );
};
