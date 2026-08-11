import { useState } from "react";

export default function StrayKidsEvent() {
    const [straykids_e_value1, setStraykids_e_value1] = useState<string>("");

    const StrayKids_e_handle_input_change1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStraykids_e_value1(e.target.value);
    }

    const [straykids_e_value2, setStraykids_e_value2] = useState<string>("");

    const StrayKids_e_handle_input_change2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStraykids_e_value2(e.target.value);
    }

    const [straykids_e_value3, setStraykids_e_value3] = useState<string>("");

    const StrayKids_e_handle_input_change3 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStraykids_e_value3(e.target.value);
    }


    return (
        <div className="straykidsEvent_full">
            <form action="">
                <input type="text" name="straykids_e_value1" value={straykids_e_value1} onChange={StrayKids_e_handle_input_change1} />
                {straykids_e_value1 === "1번답" && <input type="text" name="straykids_e_value1" value={straykids_e_value2} onChange={StrayKids_e_handle_input_change2} />}
                {straykids_e_value2 === "2번답" && <input type="text" name="straykids_e_value1" value={straykids_e_value3} onChange={StrayKids_e_handle_input_change3} />}
                {straykids_e_value3 === "3번답" ?
                    (<section>
                        <p>당첨</p>
                    </section>) : null
                }
            </form>
        </div>
    );
}
