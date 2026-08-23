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

    const [Hanroro_last3_clickBool, SetHanroro_last3_clickBool] = useState<boolean>(true);

    const Hanroro_last3_click_false = () => {
        SetHanroro_last3_clickBool(false);
    }

    const Hanroro_last3_click = () => {
        SetHanroro_last_result_arr([...Hanroro_last_result_arr, '3번']);
        Hanroro_last3_click_false();
    }

    const [Hanroro_last4_clickBool, SetHanroro_last4_clickBool] = useState<boolean>(true);

    const Hanroro_last4_click_false = () => {
        SetHanroro_last4_clickBool(false);
    }

    const Hanroro_last4_click = () => {
        SetHanroro_last_result_arr([...Hanroro_last_result_arr, '4번']);
        Hanroro_last4_click_false();
    }

    const [Hanroro_last5_clickBool, SetHanroro_last5_clickBool] = useState<boolean>(true);

    const Hanroro_last5_click_false = () => {
        SetHanroro_last5_clickBool(false);
    }

    const Hanroro_last5_click = () => {
        SetHanroro_last_result_arr([...Hanroro_last_result_arr, '5번']);
        Hanroro_last5_click_false();
    }

    const [Hanroro_last6_clickBool, SetHanroro_last6_clickBool] = useState<boolean>(true);

    const Hanroro_last6_click_false = () => {
        SetHanroro_last6_clickBool(false);
    }

    const Hanroro_last6_click = () => {
        SetHanroro_last_result_arr([...Hanroro_last_result_arr, '6번']);
        Hanroro_last6_click_false();
    }

    const [Hanroro_last7_clickBool, SetHanroro_last7_clickBool] = useState<boolean>(true);

    const Hanroro_last7_click_false = () => {
        SetHanroro_last7_clickBool(false);
    }

    const Hanroro_last7_click = () => {
        SetHanroro_last_result_arr([...Hanroro_last_result_arr, '7번']);
        Hanroro_last7_click_false();
    }

    const [Hanroro_last8_clickBool, SetHanroro_last8_clickBool] = useState<boolean>(true);

    const Hanroro_last8_click_false = () => {
        SetHanroro_last8_clickBool(false);
    }

    const Hanroro_last8_click = () => {
        SetHanroro_last_result_arr([...Hanroro_last_result_arr, '8번']);
        Hanroro_last8_click_false();
    }

    const Hanroro_last_result = Hanroro_last_result_arr[0] === '1번' &&
        Hanroro_last_result_arr[1] === '2번' &&
        Hanroro_last_result_arr[2] === '3번' &&
        Hanroro_last_result_arr[3] === '4번' &&
        Hanroro_last_result_arr[4] === '5번' &&
        Hanroro_last_result_arr[5] === '6번' &&
        Hanroro_last_result_arr[6] === '7번' &&
        Hanroro_last_result_arr[7] === '8번';

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
            {Hanroro_last3_clickBool &&
                <button onClick={Hanroro_last3_click}>3번</button>}
            {Hanroro_last4_clickBool &&
                <button onClick={Hanroro_last4_click}>4번</button>}
            {Hanroro_last5_clickBool &&
                <button onClick={Hanroro_last5_click}>5번</button>}
            {Hanroro_last6_clickBool &&
                <button onClick={Hanroro_last6_click}>6번</button>}
            {Hanroro_last7_clickBool &&
                <button onClick={Hanroro_last7_click}>7번</button>}
            {Hanroro_last8_clickBool &&
                <button onClick={Hanroro_last8_click}>8번</button>}
            {Hanroro_last_result && (
                <section>
                    <p>당첨</p>
                </section>
            )}
        </div>
    );
}
