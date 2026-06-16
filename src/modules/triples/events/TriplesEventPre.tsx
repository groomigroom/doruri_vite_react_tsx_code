import "./TriplesEventPre.css";

interface Tri_e_popProp {
    tri_e_OnCl: () => void;
    tri_e_result: number;
}


export default function TriplesEventPre({ tri_e_OnCl, tri_e_result }: Tri_e_popProp) {
    return (
        <div className="tri_e_p_full">
            <section className="tri_e_p_ticket"></section>
            <section className="tri_e_p_pp">
                <h2>정답 : {tri_e_result}개</h2>
            </section>
            <button onClick={tri_e_OnCl}>닫기</button>
        </div>
    );
};
