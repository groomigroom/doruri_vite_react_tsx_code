import { useState } from "react";

export default function BtobEvent() {
    const [Btob_e_wait_arr, SetBtob_e_wait_arr] = useState<string[]>([
        '김구름1', '김구름2', '김구름3', '김구름4', '김구름5', '김구름6'
    ]);

    const [Btob_e_con_real_wait_mem, SetBtob_e_con_real_wait_mem] = useState<string>("");

    const [Btob_e_con_start_mem, SetBtob_e_con_start_mem] = useState<string>("");

    const [Btob_e_concert_real_wa_push, SetBtob_e_concert_real_wa_push] = useState<string>("0단계");

    let [Btob_e_last_count, SetBtob_e_last_count] = useState<number>(0);

    const Btob_e_concert_real_wait = () => {
        if (Btob_e_concert_real_wa_push === "0단계") {
            SetBtob_e_con_real_wait_mem(Btob_e_wait_arr[0]);
            SetBtob_e_wait_arr(Btob_e_wait_arr.toSpliced(0, 1));
            SetBtob_e_concert_real_wa_push("1단계");
        }
        else {
            SetBtob_e_last_count((PrevBtob_e_last_count) => (PrevBtob_e_last_count - 1));
        }
    };

    const Btob_e_concert_start = () => {
        if (Btob_e_concert_real_wa_push === "1단계") {
            SetBtob_e_con_start_mem(Btob_e_con_real_wait_mem);
            SetBtob_e_con_real_wait_mem("");
            SetBtob_e_concert_real_wa_push("2단계");
        }
        else {
            SetBtob_e_last_count((PrevBtob_e_last_count) => (PrevBtob_e_last_count - 1));
        }
    };

    const Btob_e_concert_end = () => {
        if (Btob_e_concert_real_wa_push === "2단계") {
            SetBtob_e_con_start_mem("");
            SetBtob_e_concert_real_wa_push("0단계");
            SetBtob_e_last_count((PrevBtob_e_last_count) => (PrevBtob_e_last_count + 1));
        }
        else {
            SetBtob_e_last_count((PrevBtob_e_last_count) => (PrevBtob_e_last_count - 1));
        }
    };



    return (
        <div>
            <p>다음에 대기할 멤버는 {Btob_e_wait_arr[0]}입니다.</p>
            <section>
                <p>공연 중인 멤버는{Btob_e_con_start_mem}</p>
            </section>
            <p>대기 중인 멤버는 {Btob_e_con_real_wait_mem}입니다.</p>
            <p>대기 입장 전 멤버</p>
            <p>{Btob_e_wait_arr[0]}</p>
            <p>{Btob_e_wait_arr[1]}</p>
            <p>{Btob_e_wait_arr[2]}</p>
            <p>{Btob_e_wait_arr[3]}</p>
            <p>{Btob_e_wait_arr[4]}</p>
            <p>{Btob_e_wait_arr[5]}</p>
            <p>점수는 {Btob_e_last_count}</p>
            <button onClick={Btob_e_concert_end}>공연 끝내기</button>
            <button onClick={Btob_e_concert_start}>공연 시작하기</button>
            <button onClick={Btob_e_concert_real_wait}>대기 시키기</button>
            {Btob_e_last_count === 6 && (
                <section>
                    <p>당첨</p>
                </section>
            )}
        </div>
    );
}
