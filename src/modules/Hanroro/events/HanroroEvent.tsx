import { useState } from "react";

export default function HanroroEvent() {
    const [Hanroro_last_result_arr, SetHanroro_last_result_arr] = useState<string[]>([]);

    const [Hanroro_last1_clickBool, SetHanroro_last1_clickBool] = useState<boolean>(true);

    const Hanroro_last1_click_false = () => {
        SetHanroro_last1_clickBool(false);
    }

    const Hanroro_last1_click = () => {
        SetHanroro_last_result_arr([...Hanroro_last_result_arr, '1번']);
        Hanroro_last1_click_false();
    }

    const [Hanroro_last2_clickBool, SetHanroro_last2_clickBool] = useState<boolean>(true);

    const Hanroro_last2_click_false = () => {
        SetHanroro_last2_clickBool(false);
    }

    const Hanroro_last2_click = () => {
        SetHanroro_last_result_arr([...Hanroro_last_result_arr, '2번']);
        Hanroro_last2_click_false();
    }

    return (
        <div>
            <p>{Hanroro_last_result_arr[7]}</p>
            <p>{Hanroro_last_result_arr[6]}</p>
            <p>{Hanroro_last_result_arr[5]}</p>
            <p>{Hanroro_last_result_arr[4]}</p>
            <p>{Hanroro_last_result_arr[3]}</p>
            <p>{Hanroro_last_result_arr[2]}</p>
            <p>{Hanroro_last_result_arr[1]}</p>
            <p>{Hanroro_last_result_arr[0]}</p>
            {Hanroro_last1_clickBool &&
                <button onClick={Hanroro_last1_click}>1번</button>}
            {Hanroro_last2_clickBool &&
                <button onClick={Hanroro_last2_click}>2번</button>}
            <button>3번</button>
            <button>4번</button>
            <button>5번</button>
            <button>6번</button>
            <button>7번</button>
            <button>8번</button>
        </div>
    );
}
