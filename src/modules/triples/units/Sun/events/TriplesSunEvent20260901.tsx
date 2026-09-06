import { useState } from "react";

import './TriplesSunEvent20260901.css';

export default function TriplesSunEvent20260901() {

    const [TriplesSunEvent20260901_last_result, setTriplesSunEvent20260901_last_result] = useState(0);

    const TriplesSunEvent20260901_last_result_change = (TriplesSunEvent20260901_user_answer: string, TriplesSunEvent20260901_answer: number) => {
        if (parseInt(TriplesSunEvent20260901_user_answer) === TriplesSunEvent20260901_answer) {
            setTriplesSunEvent20260901_last_result((prev) => (prev + 3))
        }
        else if (parseInt(TriplesSunEvent20260901_user_answer) - TriplesSunEvent20260901_answer === 1 || TriplesSunEvent20260901_answer - parseInt(TriplesSunEvent20260901_user_answer) === 1) {
            setTriplesSunEvent20260901_last_result((prev) => (prev + 2))
        }
        else if (parseInt(TriplesSunEvent20260901_user_answer) - TriplesSunEvent20260901_answer === 2 || TriplesSunEvent20260901_answer - parseInt(TriplesSunEvent20260901_user_answer) === 2) {
            setTriplesSunEvent20260901_last_result((prev) => (prev + 1))
        }
    };

    const [TriplesSunEvent20260901_answer1] = useState<number>(
        () => Math.floor(Math.random() * 7) + 1
    );

    const [TriplesSunEvent20260901_user_answer1, setTriplesSunEvent20260901_user_answer1] = useState<string>();

    const [TriplesSunEvent20260901_answer2_boolean, setTriplesSunEvent20260901_answer2_boolean] = useState<boolean>(false);

    const TriplesSunEvent20260901_user_answer1_change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value; // 변경된 값을 변수에 먼저 담습니다. (항상 string 타입)

        setTriplesSunEvent20260901_user_answer1(newValue);
        setTriplesSunEvent20260901_answer2_boolean(true);

        // 상태 변수 대신, 확실한 string인 newValue를 전달합니다.
        TriplesSunEvent20260901_last_result_change(newValue, TriplesSunEvent20260901_answer1);
    };

    //2번 정답 함수들

    const [TriplesSunEvent20260901_answer2] = useState<number>(
        () => Math.floor(Math.random() * 7) + 1
    );

    const [TriplesSunEvent20260901_user_answer2, setTriplesSunEvent20260901_user_answer2] = useState<string>();

    const [TriplesSunEvent20260901_answer3_boolean, setTriplesSunEvent20260901_answer3_boolean] = useState<boolean>(false);


    const TriplesSunEvent20260901_user_answer2_change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value; // 변경된 값을 변수에 먼저 담습니다. (항상 string 타입)

        setTriplesSunEvent20260901_user_answer2(newValue);
        setTriplesSunEvent20260901_answer3_boolean(true);

        // 상태 변수 대신, 확실한 string인 newValue를 전달합니다.
        TriplesSunEvent20260901_last_result_change(newValue, TriplesSunEvent20260901_answer2);
    };

    //3번 정답 함수들

    const [TriplesSunEvent20260901_answer3] = useState<number>(
        () => Math.floor(Math.random() * 7) + 1
    );

    const [TriplesSunEvent20260901_user_answer3, setTriplesSunEvent20260901_user_answer3] = useState<string>();

    const [TriplesSunEvent20260901_last_boolean, setTriplesSunEvent20260901_last_boolean] = useState<boolean>(false);


    const TriplesSunEvent20260901_user_answer3_change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value; // 변경된 값을 변수에 먼저 담습니다. (항상 string 타입)

        setTriplesSunEvent20260901_user_answer3(newValue);
        setTriplesSunEvent20260901_last_boolean(true);

        // 상태 변수 대신, 확실한 string인 newValue를 전달합니다.
        TriplesSunEvent20260901_last_result_change(newValue, TriplesSunEvent20260901_answer3);
    };



    return (
        <div>
            <section>
                <div className="TriplesSunEvent20260901_answer1">{TriplesSunEvent20260901_answer1}층</div>
                <input type="radio" name="TriplesSunEvent20260901_1count" value="1" checked={TriplesSunEvent20260901_user_answer1 === '1'} onChange={TriplesSunEvent20260901_user_answer1_change} id="TriplesSunEvent20260901_user_answer1_1floor" />
                <input type="radio" name="TriplesSunEvent20260901_1count" value="2" checked={TriplesSunEvent20260901_user_answer1 === '2'} onChange={TriplesSunEvent20260901_user_answer1_change} id="TriplesSunEvent20260901_user_answer1_2floor" />
                <input type="radio" name="TriplesSunEvent20260901_1count" value="3" checked={TriplesSunEvent20260901_user_answer1 === '3'} onChange={TriplesSunEvent20260901_user_answer1_change} id="TriplesSunEvent20260901_user_answer1_3floor" />
                <input type="radio" name="TriplesSunEvent20260901_1count" value="4" checked={TriplesSunEvent20260901_user_answer1 === '4'} onChange={TriplesSunEvent20260901_user_answer1_change} id="TriplesSunEvent20260901_user_answer1_4floor" />
                <input type="radio" name="TriplesSunEvent20260901_1count" value="5" checked={TriplesSunEvent20260901_user_answer1 === '5'} onChange={TriplesSunEvent20260901_user_answer1_change} id="TriplesSunEvent20260901_user_answer1_5floor" />
                <input type="radio" name="TriplesSunEvent20260901_1count" value="6" checked={TriplesSunEvent20260901_user_answer1 === '6'} onChange={TriplesSunEvent20260901_user_answer1_change} id="TriplesSunEvent20260901_user_answer1_6floor" />
                <input type="radio" name="TriplesSunEvent20260901_1count" value="7" checked={TriplesSunEvent20260901_user_answer1 === '7'} onChange={TriplesSunEvent20260901_user_answer1_change} id="TriplesSunEvent20260901_user_answer1_7floor" />
                <label htmlFor="TriplesSunEvent20260901_user_answer1_1floor" className=""><h4>1</h4></label>
                <label htmlFor="TriplesSunEvent20260901_user_answer1_2floor" className=""><h4>2</h4></label>
                <label htmlFor="TriplesSunEvent20260901_user_answer1_3floor" className=""><h4>3</h4></label>
                <label htmlFor="TriplesSunEvent20260901_user_answer1_4floor" className=""><h4>4</h4></label>
                <label htmlFor="TriplesSunEvent20260901_user_answer1_5floor" className=""><h4>5</h4></label>
                <label htmlFor="TriplesSunEvent20260901_user_answer1_6floor" className=""><h4>6</h4></label>
                <label htmlFor="TriplesSunEvent20260901_user_answer1_7floor" className=""><h4>7</h4></label>
                <p>{TriplesSunEvent20260901_user_answer1}</p>
                <p>{TriplesSunEvent20260901_last_result}</p>
            </section>
            {TriplesSunEvent20260901_answer2_boolean && (
                <section className="TriplesSunEvent20260901_event_real_section2">
                    <div className="TriplesSunEvent20260901_answer2">{TriplesSunEvent20260901_answer2}층</div>
                    <input type="radio" name="TriplesSunEvent20260901_2count" value="1" checked={TriplesSunEvent20260901_user_answer2 === '1'} onChange={TriplesSunEvent20260901_user_answer2_change} id="TriplesSunEvent20260901_user_answer2_1floor" />
                    <input type="radio" name="TriplesSunEvent20260901_2count" value="2" checked={TriplesSunEvent20260901_user_answer2 === '2'} onChange={TriplesSunEvent20260901_user_answer2_change} id="TriplesSunEvent20260901_user_answer2_2floor" />
                    <input type="radio" name="TriplesSunEvent20260901_2count" value="3" checked={TriplesSunEvent20260901_user_answer2 === '3'} onChange={TriplesSunEvent20260901_user_answer2_change} id="TriplesSunEvent20260901_user_answer2_3floor" />
                    <input type="radio" name="TriplesSunEvent20260901_2count" value="4" checked={TriplesSunEvent20260901_user_answer2 === '4'} onChange={TriplesSunEvent20260901_user_answer2_change} id="TriplesSunEvent20260901_user_answer2_4floor" />
                    <input type="radio" name="TriplesSunEvent20260901_2count" value="5" checked={TriplesSunEvent20260901_user_answer2 === '5'} onChange={TriplesSunEvent20260901_user_answer2_change} id="TriplesSunEvent20260901_user_answer2_5floor" />
                    <input type="radio" name="TriplesSunEvent20260901_2count" value="6" checked={TriplesSunEvent20260901_user_answer2 === '6'} onChange={TriplesSunEvent20260901_user_answer2_change} id="TriplesSunEvent20260901_user_answer2_6floor" />
                    <input type="radio" name="TriplesSunEvent20260901_2count" value="7" checked={TriplesSunEvent20260901_user_answer2 === '7'} onChange={TriplesSunEvent20260901_user_answer2_change} id="TriplesSunEvent20260901_user_answer2_7floor" />
                    <label htmlFor="TriplesSunEvent20260901_user_answer2_1floor" className=""><h4>1</h4></label>
                    <label htmlFor="TriplesSunEvent20260901_user_answer2_2floor" className=""><h4>2</h4></label>
                    <label htmlFor="TriplesSunEvent20260901_user_answer2_3floor" className=""><h4>3</h4></label>
                    <label htmlFor="TriplesSunEvent20260901_user_answer2_4floor" className=""><h4>4</h4></label>
                    <label htmlFor="TriplesSunEvent20260901_user_answer2_5floor" className=""><h4>5</h4></label>
                    <label htmlFor="TriplesSunEvent20260901_user_answer2_6floor" className=""><h4>6</h4></label>
                    <label htmlFor="TriplesSunEvent20260901_user_answer2_7floor" className=""><h4>7</h4></label>
                    <p>{TriplesSunEvent20260901_user_answer2}</p>
                    <p>{TriplesSunEvent20260901_last_result}</p>
                </section>
            )}
            {TriplesSunEvent20260901_answer3_boolean && (
                <section className="TriplesSunEvent20260901_event_real_section3">
                    <div className="TriplesSunEvent20260901_answer3">{TriplesSunEvent20260901_answer3}층</div>
                    <input type="radio" name="TriplesSunEvent20260901_3count" value="1" checked={TriplesSunEvent20260901_user_answer3 === '1'} onChange={TriplesSunEvent20260901_user_answer3_change} id="TriplesSunEvent20260901_user_answer3_1floor" />
                    <input type="radio" name="TriplesSunEvent20260901_3count" value="2" checked={TriplesSunEvent20260901_user_answer3 === '2'} onChange={TriplesSunEvent20260901_user_answer3_change} id="TriplesSunEvent20260901_user_answer3_2floor" />
                    <input type="radio" name="TriplesSunEvent20260901_3count" value="3" checked={TriplesSunEvent20260901_user_answer3 === '3'} onChange={TriplesSunEvent20260901_user_answer3_change} id="TriplesSunEvent20260901_user_answer3_3floor" />
                    <input type="radio" name="TriplesSunEvent20260901_3count" value="4" checked={TriplesSunEvent20260901_user_answer3 === '4'} onChange={TriplesSunEvent20260901_user_answer3_change} id="TriplesSunEvent20260901_user_answer3_4floor" />
                    <input type="radio" name="TriplesSunEvent20260901_3count" value="5" checked={TriplesSunEvent20260901_user_answer3 === '5'} onChange={TriplesSunEvent20260901_user_answer3_change} id="TriplesSunEvent20260901_user_answer3_5floor" />
                    <input type="radio" name="TriplesSunEvent20260901_3count" value="6" checked={TriplesSunEvent20260901_user_answer3 === '6'} onChange={TriplesSunEvent20260901_user_answer3_change} id="TriplesSunEvent20260901_user_answer3_6floor" />
                    <input type="radio" name="TriplesSunEvent20260901_3count" value="7" checked={TriplesSunEvent20260901_user_answer3 === '7'} onChange={TriplesSunEvent20260901_user_answer3_change} id="TriplesSunEvent20260901_user_answer3_7floor" />
                    <label htmlFor="TriplesSunEvent20260901_user_answer3_1floor" className=""><h4>1</h4></label>
                    <label htmlFor="TriplesSunEvent20260901_user_answer3_2floor" className=""><h4>2</h4></label>
                    <label htmlFor="TriplesSunEvent20260901_user_answer3_3floor" className=""><h4>3</h4></label>
                    <label htmlFor="TriplesSunEvent20260901_user_answer3_4floor" className=""><h4>4</h4></label>
                    <label htmlFor="TriplesSunEvent20260901_user_answer3_5floor" className=""><h4>5</h4></label>
                    <label htmlFor="TriplesSunEvent20260901_user_answer3_6floor" className=""><h4>6</h4></label>
                    <label htmlFor="TriplesSunEvent20260901_user_answer3_7floor" className=""><h4>7</h4></label>
                    <p>{TriplesSunEvent20260901_user_answer3}</p>
                    <p>{TriplesSunEvent20260901_last_result}</p>
                </section>
            )}
            {TriplesSunEvent20260901_last_boolean && (
                <section>
                    {TriplesSunEvent20260901_last_result >= 6 && (
                        <section>
                            당첨
                        </section>
                    )}
                    {TriplesSunEvent20260901_last_result < 6 && (
                        <section>
                            탈락
                        </section>
                    )}
                </section>
            )}

        </div>
    );
}
