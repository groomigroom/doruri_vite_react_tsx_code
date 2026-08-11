import './TxtEventPre.css';

interface Txt_e_popProp {
    txt_e_OnCl: () => void;
    txt_e_result: string;
}

export default function TxtEventPre({ txt_e_OnCl, txt_e_result }: Txt_e_popProp) {
    return (
        <div className="txt_e_p_full">
            {txt_e_result === "맞춘 개수: 4개" ?
                (<section>당첨</section>) :
                (<section>당첨 아님</section>)
            }
            <h2>{txt_e_result}</h2>
            <button onClick={txt_e_OnCl}>닫기</button>
        </div>
    );

}
