import { useState } from "react";

import './YenaEvent.css';
import YenaEventYouModule from "./YenaEventYouModule";

export default function YenaEvent() {

    const [Yena_e_false_click, setYena_e_false_click] = useState<boolean>(false);
    const [Yena_e_true_click, setYena_e_true_click] = useState<boolean>(false);
    const Yena_e_false_cl_change = () => {
        setYena_e_false_click(true);
        setYena_e_true_click(false);
    };


    const Yena_e_true_cl_change = () => {
        setYena_e_true_click(true);
        setYena_e_false_click(false);
    };



    return (
        <div>
            <section className="yena_e_moving_part">
                <p onClick={Yena_e_true_cl_change} className="yena_e_me_part">나</p>
                <section onClick={Yena_e_false_cl_change} className="yena_e_you_part">
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />

                </section>
            </section>
            {Yena_e_false_click && (
                <section>
                    <p>당첨 아님</p>
                </section>
            )}
            {Yena_e_true_click && (
                <section>
                    <p>당첨!!!!!</p>
                </section>
            )}
        </div>
    );
}
