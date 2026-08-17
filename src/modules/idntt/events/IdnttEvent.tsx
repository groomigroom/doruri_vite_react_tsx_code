import { useState } from "react";

interface IdnttEventNodeType {
    Idntt_e_mem_name: string;
    Idntt_e_link: IdnttEventNodeType | null;
}

export default function IdnttEvent() {
    const [Idntt_e_node1, setIdntt_e_node1] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "1번", Idntt_e_link: null });
    const [Idntt_e_node2, setIdntt_e_node2] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "2번", Idntt_e_link: null });

    const Idntt_e_node3 = {
        Idntt_e_mem_name: "3번",
        Idntt_e_link: null,
    };

    const Idntt_e_node1Link = () => {
        setIdntt_e_node1({
            ...Idntt_e_node1,
            Idntt_e_link: Idntt_e_node2
        });
    };

    const Idntt_e_node2Link = () => {
        setIdntt_e_node2({
            ...Idntt_e_node2,
            Idntt_e_link: Idntt_e_node3
        });
    };

    return (
        <div>
            <section>
                <p onClick={Idntt_e_node1Link}>{Idntt_e_node1.Idntt_e_mem_name}</p>
                {Idntt_e_node1.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node2Link}>{Idntt_e_node2.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node2.Idntt_e_link !== null && (
                    <p>{Idntt_e_node3.Idntt_e_mem_name}</p>
                )}
            </section>
        </div>
    );
}
