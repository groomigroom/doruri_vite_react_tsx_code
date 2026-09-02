import { useState } from "react";

import '../../triples/main/TriplesMain.css';
import '../../triples/events/TriplesEvent.css';
import './IdnttEvent.css';
import Menu from "../../Menu";
import { Link } from "react-router-dom";
import MainH2Deco from '../../img/main_h2_deco.png';
import FooterPart from "../../FooterPart";

interface IdnttEventNodeType {
    Idntt_e_mem_name: string;
    Idntt_e_link: IdnttEventNodeType | null;
}

export default function IdnttEvent() {
    const [Idntt_e_node1, setIdntt_e_node1] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "김도훈", Idntt_e_link: null });
    const [Idntt_e_node2, setIdntt_e_node2] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "김희주", Idntt_e_link: null });
    const [Idntt_e_node3, setIdntt_e_node3] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "id3", Idntt_e_link: null });
    const [Idntt_e_node4, setIdntt_e_node4] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "최태인", Idntt_e_link: null });
    const [Idntt_e_node5, setIdntt_e_node5] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "이재영", Idntt_e_link: null });
    const [Idntt_e_node6, setIdntt_e_node6] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "김주호", Idntt_e_link: null });
    const [Idntt_e_node7, setIdntt_e_node7] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "남지운", Idntt_e_link: null });
    const [Idntt_e_node8, setIdntt_e_node8] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "이환희", Idntt_e_link: null });
    const [Idntt_e_node9, setIdntt_e_node9] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "이청명", Idntt_e_link: null });
    const [Idntt_e_node10, setIdntt_e_node10] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "토와", Idntt_e_link: null });
    const [Idntt_e_node11, setIdntt_e_node11] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "이규혁", Idntt_e_link: null });
    const [Idntt_e_node12, setIdntt_e_node12] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "박누리", Idntt_e_link: null });
    const [Idntt_e_node13, setIdntt_e_node13] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "김성준", Idntt_e_link: null });
    const [Idntt_e_node14, setIdntt_e_node14] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "한예준", Idntt_e_link: null });
    const [Idntt_e_node15, setIdntt_e_node15] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "최경빈", Idntt_e_link: null });
    const [Idntt_e_node16, setIdntt_e_node16] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "황은수", Idntt_e_link: null });
    const [Idntt_e_node17, setIdntt_e_node17] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "곽기웅", Idntt_e_link: null });
    const [Idntt_e_node18, setIdntt_e_node18] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "이주헌", Idntt_e_link: null });
    const [Idntt_e_node19, setIdntt_e_node19] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "양경호", Idntt_e_link: null });
    const [Idntt_e_node20, setIdntt_e_node20] = useState<IdnttEventNodeType>({ Idntt_e_mem_name: "조은찬", Idntt_e_link: null });

    const [Idntt_e_last_win, setIdntt_e_last_win] = useState<boolean>(false);

    const Idntt_e_node21: IdnttEventNodeType = {
        Idntt_e_mem_name: "김은성",
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

    const Idntt_e_node3Link = () => {
        setIdntt_e_node3({
            ...Idntt_e_node3,
            Idntt_e_link: Idntt_e_node4
        });
    };

    const Idntt_e_node4Link = () => {
        setIdntt_e_node4({
            ...Idntt_e_node4,
            Idntt_e_link: Idntt_e_node5
        });
    };

    const Idntt_e_node5Link = () => {
        setIdntt_e_node5({
            ...Idntt_e_node5,
            Idntt_e_link: Idntt_e_node6
        });
    };

    const Idntt_e_node6Link = () => {
        setIdntt_e_node6({
            ...Idntt_e_node6,
            Idntt_e_link: Idntt_e_node7
        });
    };

    const Idntt_e_node7Link = () => {
        setIdntt_e_node7({
            ...Idntt_e_node7,
            Idntt_e_link: Idntt_e_node8
        });
    };

    const Idntt_e_node8Link = () => {
        setIdntt_e_node8({
            ...Idntt_e_node8,
            Idntt_e_link: Idntt_e_node9
        });
    };

    const Idntt_e_node9Link = () => {
        setIdntt_e_node9({
            ...Idntt_e_node9,
            Idntt_e_link: Idntt_e_node10
        });
    };

    const Idntt_e_node10Link = () => {
        setIdntt_e_node10({
            ...Idntt_e_node10,
            Idntt_e_link: Idntt_e_node11
        });
    };

    const Idntt_e_node11Link = () => {
        setIdntt_e_node11({
            ...Idntt_e_node11,
            Idntt_e_link: Idntt_e_node12
        });
    };

    const Idntt_e_node12Link = () => {
        setIdntt_e_node12({
            ...Idntt_e_node12,
            Idntt_e_link: Idntt_e_node13
        });
    };

    const Idntt_e_node13Link = () => {
        setIdntt_e_node13({
            ...Idntt_e_node13,
            Idntt_e_link: Idntt_e_node14
        });
    };

    const Idntt_e_node14Link = () => {
        setIdntt_e_node14({
            ...Idntt_e_node14,
            Idntt_e_link: Idntt_e_node15
        });
    };

    const Idntt_e_node15Link = () => {
        setIdntt_e_node15({
            ...Idntt_e_node15,
            Idntt_e_link: Idntt_e_node16
        });
    };

    const Idntt_e_node16Link = () => {
        setIdntt_e_node16({
            ...Idntt_e_node16,
            Idntt_e_link: Idntt_e_node17
        });
    };

    const Idntt_e_node17Link = () => {
        setIdntt_e_node17({
            ...Idntt_e_node17,
            Idntt_e_link: Idntt_e_node18
        });
    };

    const Idntt_e_node18Link = () => {
        setIdntt_e_node18({
            ...Idntt_e_node18,
            Idntt_e_link: Idntt_e_node19
        });
    };

    const Idntt_e_node19Link = () => {
        setIdntt_e_node19({
            ...Idntt_e_node19,
            Idntt_e_link: Idntt_e_node20
        });
    };

    const Idntt_e_node20Link = () => {
        setIdntt_e_node20({
            ...Idntt_e_node20,
            Idntt_e_link: Idntt_e_node21
        });
    };

    const changeIdntt_e_last_win = () => {
        setIdntt_e_last_win(true);
    };


    return (
        <div className="idntt_e_full">
            <header className="tri_m_header">
                <Menu />
                <section className="home_translate">
                    <Link to='/IdnttEvent' className="on">한국어</Link>
                    <Link to='/IdnttEventEng'>English</Link>
                </section>
            </header>
            <section className="tri_e_logo">
                <img src={''} alt="idntt 이벤트 로고" />
            </section>
            <section className="tri_m_h2">
                <h2><img src={MainH2Deco} alt="idntt" />멤버 id 순서 클릭 이벤트<img src={MainH2Deco} alt="idntt" /></h2>
            </section>
            <section className='tri_m_intropp'>
                <p>
                    &apos;idntt&apos; 멤버들의<br />
                    id를 순서대로<br />
                    클릭해 주세요!
                </p>
            </section>
            <section className="idntt_e_real_part">
                <p onClick={Idntt_e_node1Link} className="idntt_e_mem_node1">{Idntt_e_node1.Idntt_e_mem_name}</p>
                {Idntt_e_node1.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node2Link} className="idntt_e_mem_node2">{Idntt_e_node2.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node2.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node3Link} className="idntt_e_mem_node3">{Idntt_e_node3.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node3.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node4Link} className="idntt_e_mem_node4">{Idntt_e_node4.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node4.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node5Link} className="idntt_e_mem_node5">{Idntt_e_node5.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node5.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node6Link} className="idntt_e_mem_node6">{Idntt_e_node6.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node6.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node7Link} className="idntt_e_mem_node7">{Idntt_e_node7.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node7.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node8Link} className="idntt_e_mem_node8">{Idntt_e_node8.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node8.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node9Link} className="idntt_e_mem_node9">{Idntt_e_node9.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node9.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node10Link} className="idntt_e_mem_node10">{Idntt_e_node10.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node10.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node11Link} className="idntt_e_mem_node11">{Idntt_e_node11.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node11.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node12Link} className="idntt_e_mem_node12">{Idntt_e_node12.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node12.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node13Link} className="idntt_e_mem_node13">{Idntt_e_node13.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node13.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node14Link} className="idntt_e_mem_node14">{Idntt_e_node14.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node14.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node15Link} className="idntt_e_mem_node15">{Idntt_e_node15.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node15.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node16Link} className="idntt_e_mem_node16">{Idntt_e_node16.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node16.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node17Link} className="idntt_e_mem_node17">{Idntt_e_node17.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node17.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node18Link} className="idntt_e_mem_node18">{Idntt_e_node18.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node18.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node19Link} className="idntt_e_mem_node19">{Idntt_e_node19.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node19.Idntt_e_link !== null && (
                    <p onClick={Idntt_e_node20Link} className="idntt_e_mem_node20">{Idntt_e_node20.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_node20.Idntt_e_link !== null && (
                    <p className="idntt_e_mem_node21" onClick={changeIdntt_e_last_win}>{Idntt_e_node21.Idntt_e_mem_name}</p>
                )}
                {Idntt_e_last_win && (
                    <section className="tri_e_last_win_part">
                        <div className="tri_e_ghost_40px"></div>
                        <section className="tri_m_h2">
                            <h2>
                                <img src={MainH2Deco} alt="idntt" />당첨입니다.<img src={MainH2Deco} alt="idntt" />
                            </h2>
                        </section>
                        <section className="tri_e_p_win_intropp">
                            <p>
                                당첨을 축하드려요!<br />
                                상품은 --입니다.<br />
                                이벤트에 관심가져 주셔서 감사합니다.<br />
                                이 이벤트는 가상의 이벤트입니다.<br />
                                참고해 주시길 부탁드리겠습니다.<br />
                            </p>
                        </section>
                        <section className="tri_e_p_win_present_150">
                            <img src={''} alt="" className="triples_e_p_win_present_img" />
                        </section>
                    </section>
                )}

            </section>
            <FooterPart FooterPartText='ⓒ 켄버스' />
        </div>
    );
}
