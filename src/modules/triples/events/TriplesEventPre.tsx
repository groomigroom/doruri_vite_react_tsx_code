import "./TriplesEventPre.css";

interface Tri_e_popProp {
    tri_e_OnCl: () => void;
}

export default function TriplesEventPre({ tri_e_OnCl }: Tri_e_popProp) {
    return (
        <div className="tri_e_p_full">
            <section className="tri_e_p_ticket"></section>
            <button onClick={tri_e_OnCl}>닫기</button>
        </div>
    );
};
