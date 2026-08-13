import './Day6EventPre.css';

interface day6_e_Popup {
    day6_e_OnCl: () => void;
    day6_e_result: string;
}

export default function Day6EventPre({ day6_e_OnCl, day6_e_result }: day6_e_Popup) {
    return (
        <div className="day6_e_p_full">
            <p>{day6_e_result}</p>
            <button onClick={day6_e_OnCl}>나가기???</button>
        </div>
    );
}
