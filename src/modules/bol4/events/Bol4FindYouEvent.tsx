import { useState } from "react";

export default function Bol4FindYouEvent() {
    const [Bol4FindYou_e_str, setBol4FindYou_e_str] = useState<string>("");

    const Bol4FindYou_e_handle_input_change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBol4FindYou_e_str(e.target.value);
    }



    return (
        <div>
            <input type="text" name="bol4FindYou_e_in" value={Bol4FindYou_e_str} onChange={Bol4FindYou_e_handle_input_change} />
            <p>{Bol4FindYou_e_str}</p>
            {Bol4FindYou_e_str === "findyou" && (
                <section>
                    <p>이제 숫자로 바꿔볼까요?<br />
                        a = 1, b = 2, c = 3 이런식으로요
                    </p>
                </section>
            )}
        </div>
    );
}
