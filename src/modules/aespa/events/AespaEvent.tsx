import { useState } from "react";

export default function AespaEvent() {
    const [aespa_e_value1, setAespa_e_value1] = useState<string>("");

    const aespa_e_handle_input_change1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAespa_e_value1(e.target.value);
    }

    const [aespa_e_value2, setAespa_e_value2] = useState<string>("");

    const aespa_e_handle_input_change2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAespa_e_value2(e.target.value);
    }

    const [aespa_e_value3, setAespa_e_value3] = useState<string>("");

    const aespa_e_handle_input_change3 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAespa_e_value3(e.target.value);
    }

    const [aespa_e_value4, setAespa_e_value4] = useState<string>("");

    const aespa_e_handle_input_change4 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAespa_e_value4(e.target.value);
    }

    const [aespa_e_value5, setAespa_e_value5] = useState<string>("");

    const aespa_e_handle_input_change5 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAespa_e_value5(e.target.value);
    }

    const [aespa_e_value6, setAespa_e_value6] = useState<string>("");

    const aespa_e_handle_input_change6 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAespa_e_value6(e.target.value);
    }

    const [aespa_e_value7, setAespa_e_value7] = useState<string>("");

    const aespa_e_handle_input_change7 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAespa_e_value7(e.target.value);
    }

    const [aespa_e_value8, setAespa_e_value8] = useState<string>("");

    const aespa_e_handle_input_change8 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAespa_e_value8(e.target.value);
    }

    return (
        <div className="AespaEvent_full">
            <form action="">
                <input type="text" name="aespa_e_value1" value={aespa_e_value1} onChange={aespa_e_handle_input_change1} />
                {aespa_e_value1 === 'l' && <input type="text" name="aespa_e_value2" value={aespa_e_value2} onChange={aespa_e_handle_input_change2} />}
                {aespa_e_value2 === 'e' && <input type="text" name="aespa_e_value3" value={aespa_e_value3} onChange={aespa_e_handle_input_change3} />}
                {aespa_e_value3 === 'm' && <input type="text" name="aespa_e_value4" value={aespa_e_value4} onChange={aespa_e_handle_input_change4} />}
                {aespa_e_value4 === 'o' && <input type="text" name="aespa_e_value5" value={aespa_e_value5} onChange={aespa_e_handle_input_change5} />}
                {aespa_e_value5 === 'n' && <input type="text" name="aespa_e_value6" value={aespa_e_value6} onChange={aespa_e_handle_input_change6} />}
                {aespa_e_value6 === 'a' && <input type="text" name="aespa_e_value7" value={aespa_e_value7} onChange={aespa_e_handle_input_change7} />}
                {aespa_e_value7 === 'd' && <input type="text" name="aespa_e_value8" value={aespa_e_value8} onChange={aespa_e_handle_input_change8} />}
                {aespa_e_value8 === 'e' &&
                    (<section>
                        <p>당첨</p>
                    </section>)}

            </form>
        </div>
    );
}
