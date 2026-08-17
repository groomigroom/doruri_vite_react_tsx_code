import './TriplesAssemble25Event.css';

interface TriplesAssemble25NodeType {
    TriplesAssemble25_e_content: string;
    TriplesAssemble25_e_bef_node: TriplesAssemble25NodeType | null;
    TriplesAssemble25_e_aft_node: TriplesAssemble25NodeType | null;
}

export default function TriplesAssemble25Event() {
    const TriplesAssemble25_e_node_1_1: TriplesAssemble25NodeType = {
        TriplesAssemble25_e_content: "1층1번자리",
        TriplesAssemble25_e_bef_node: null,
        TriplesAssemble25_e_aft_node: null,
    };

    const TriplesAssemble25_e_node_1_2: TriplesAssemble25NodeType = {
        TriplesAssemble25_e_content: "1층2번자리",
        TriplesAssemble25_e_bef_node: null,
        TriplesAssemble25_e_aft_node: null,
    };

    const TriplesAssemble25_e_node_1_3: TriplesAssemble25NodeType = {
        TriplesAssemble25_e_content: "1층3번자리",
        TriplesAssemble25_e_bef_node: null,
        TriplesAssemble25_e_aft_node: null,
    };

    const TriplesAssemble25_e_node_1_4: TriplesAssemble25NodeType = {
        TriplesAssemble25_e_content: "1층4번자리",
        TriplesAssemble25_e_bef_node: null,
        TriplesAssemble25_e_aft_node: null,
    };

    const TriplesAssemble25_e_node_1_5: TriplesAssemble25NodeType = {
        TriplesAssemble25_e_content: "1층5번자리",
        TriplesAssemble25_e_bef_node: null,
        TriplesAssemble25_e_aft_node: null,
    };

    const TriplesAssemble25_e_node_1_6: TriplesAssemble25NodeType = {
        TriplesAssemble25_e_content: "1층6번자리",
        TriplesAssemble25_e_bef_node: null,
        TriplesAssemble25_e_aft_node: null,
    };

    const TriplesAssemble25_e_node_1_7: TriplesAssemble25NodeType = {
        TriplesAssemble25_e_content: "1층7번자리",
        TriplesAssemble25_e_bef_node: null,
        TriplesAssemble25_e_aft_node: null,
    };

    const TriplesAssemble25_e_node_1_8: TriplesAssemble25NodeType = {
        TriplesAssemble25_e_content: "1층8번자리",
        TriplesAssemble25_e_bef_node: null,
        TriplesAssemble25_e_aft_node: null,
    };

    const TriplesAssemble25_e_node_2_1: TriplesAssemble25NodeType = {
        TriplesAssemble25_e_content: "2층1번자리",
        TriplesAssemble25_e_bef_node: TriplesAssemble25_e_node_1_1,
        TriplesAssemble25_e_aft_node: TriplesAssemble25_e_node_1_2,
    };

    const TriplesAssemble25_e_node_2_2: TriplesAssemble25NodeType = {
        TriplesAssemble25_e_content: "2층2번자리",
        TriplesAssemble25_e_bef_node: TriplesAssemble25_e_node_1_3,
        TriplesAssemble25_e_aft_node: TriplesAssemble25_e_node_1_4,
    };

    const TriplesAssemble25_e_node_2_3: TriplesAssemble25NodeType = {
        TriplesAssemble25_e_content: "2층3번자리",
        TriplesAssemble25_e_bef_node: TriplesAssemble25_e_node_1_5,
        TriplesAssemble25_e_aft_node: TriplesAssemble25_e_node_1_6,
    };

    const TriplesAssemble25_e_node_2_4: TriplesAssemble25NodeType = {
        TriplesAssemble25_e_content: "2층4번자리",
        TriplesAssemble25_e_bef_node: TriplesAssemble25_e_node_1_7,
        TriplesAssemble25_e_aft_node: TriplesAssemble25_e_node_1_8,
    };

    const TriplesAssemble25_e_node_3_1: TriplesAssemble25NodeType = {
        TriplesAssemble25_e_content: "3층1번자리",
        TriplesAssemble25_e_bef_node: TriplesAssemble25_e_node_2_1,
        TriplesAssemble25_e_aft_node: TriplesAssemble25_e_node_2_2,
    };

    const TriplesAssemble25_e_node_3_2: TriplesAssemble25NodeType = {
        TriplesAssemble25_e_content: "3층2번자리",
        TriplesAssemble25_e_bef_node: TriplesAssemble25_e_node_2_3,
        TriplesAssemble25_e_aft_node: TriplesAssemble25_e_node_2_4,
    };

    const TriplesAssemble25_e_node_4_1: TriplesAssemble25NodeType = {
        TriplesAssemble25_e_content: "4층1번자리",
        TriplesAssemble25_e_bef_node: TriplesAssemble25_e_node_3_1,
        TriplesAssemble25_e_aft_node: TriplesAssemble25_e_node_3_2,
    };

    return (
        <div>
            <section className="TriplesAssemble25Event_full_tree_part">
                <div className="TriplesAssemble25Event_third_real_fulltr">
                    <div className="TriplesAssemble25Event_one_3_1_row_stick"></div>
                    <div className="TriplesAssemble25Event_box_225 TriplesAssemble25Event_one_3_1_column_stick"></div>
                    <div className="TriplesAssemble25Event_box_225 TriplesAssemble25Event_one_3_1_to_one_2"></div>
                    <div className="TriplesAssemble25Event_box_225 TriplesAssemble25Event_one_3_2_to_one_2"></div>
                    <div className="TriplesAssemble25Event_real_box TriplesAssemble25Event_one_3_1"></div>
                </div>
                <div className="TriplesAssemble25Event_second_real_fulltr">
                    <div className="TriplesAssemble25Event_second_real_full">
                        <div className="TriplesAssemble25Event_one_2_1_row_stick"></div>
                        <div className="TriplesAssemble25Event_box_225 TriplesAssemble25Event_one_2_1_column_stick"></div>
                        <div className="TriplesAssemble25Event_box_225 TriplesAssemble25Event_one_2_1_to_one_2"></div>
                        <div className="TriplesAssemble25Event_box_225 TriplesAssemble25Event_one_2_2_to_one_2"></div>
                        <div className="TriplesAssemble25Event_real_box TriplesAssemble25Event_one_2_1"></div>
                    </div>
                    <div className="TriplesAssemble25Event_second_real_full">
                        <div className="TriplesAssemble25Event_one_2_1_row_stick"></div>
                        <div className="TriplesAssemble25Event_box_225 TriplesAssemble25Event_one_2_1_column_stick"></div>
                        <div className="TriplesAssemble25Event_box_225 TriplesAssemble25Event_one_2_1_to_one_2"></div>
                        <div className="TriplesAssemble25Event_box_225 TriplesAssemble25Event_one_2_2_to_one_2"></div>
                        <div className="TriplesAssemble25Event_real_box TriplesAssemble25Event_one_2_1"></div>
                    </div>
                </div>
                <div className="TriplesAssemble25Event_first_real_fulltr">
                    <div className="TriplesAssemble25Event_first_real_full">
                        <div className="TriplesAssemble25Event_real_box TriplesAssemble25Event_one_1"></div>
                        <div className="TriplesAssemble25Event_one_1_1_row_stick"></div>
                        <div className="TriplesAssemble25Event_box_225 TriplesAssemble25Event_one_1_1_column_stick"></div>
                        <div className="TriplesAssemble25Event_box_225 TriplesAssemble25Event_one_1_1_to_one_1"></div>
                        <div className="TriplesAssemble25Event_box_225 TriplesAssemble25Event_one_1_2_to_one_1"></div>
                        <div className="TriplesAssemble25Event_real_box TriplesAssemble25Event_one_1_1"></div>
                        <div className="TriplesAssemble25Event_real_box TriplesAssemble25Event_one_1_2"></div>
                    </div>
                    <div className="TriplesAssemble25Event_first_ghost_part"></div>
                    <div className="TriplesAssemble25Event_first_real_full">
                        <div className="TriplesAssemble25Event_real_box TriplesAssemble25Event_one_1"></div>
                        <div className="TriplesAssemble25Event_one_1_1_row_stick"></div>
                        <div className="TriplesAssemble25Event_box_225 TriplesAssemble25Event_one_1_1_column_stick"></div>
                        <div className="TriplesAssemble25Event_box_225 TriplesAssemble25Event_one_1_1_to_one_1"></div>
                        <div className="TriplesAssemble25Event_box_225 TriplesAssemble25Event_one_1_2_to_one_1"></div>
                        <div className="TriplesAssemble25Event_real_box TriplesAssemble25Event_one_1_1"></div>
                        <div className="TriplesAssemble25Event_real_box TriplesAssemble25Event_one_1_2"></div>
                    </div>
                    <div className="TriplesAssemble25Event_first_ghost_part"></div>
                    <div className="TriplesAssemble25Event_first_real_full">
                        <div className="TriplesAssemble25Event_real_box one_1"></div>
                        <div className="TriplesAssemble25Event_one_1_1_row_stick"></div>
                        <div className="TriplesAssemble25Event_box_225 TriplesAssemble25Event_one_1_1_column_stick"></div>
                        <div className="TriplesAssemble25Event_box_225 TriplesAssemble25Event_one_1_1_to_one_1"></div>
                        <div className="TriplesAssemble25Event_box_225 TriplesAssemble25Event_one_1_2_to_one_1"></div>
                        <div className="TriplesAssemble25Event_real_box TriplesAssemble25Event_one_1_1"></div>
                        <div className="TriplesAssemble25Event_real_box TriplesAssemble25Event_one_1_2"></div>
                    </div>
                    <div className="TriplesAssemble25Event_first_ghost_part"></div>
                    <div className="TriplesAssemble25Event_first_real_full">
                        <div className="TriplesAssemble25Event_real_box TriplesAssemble25Event_one_1"></div>
                        <div className="TriplesAssemble25Event_one_1_1_row_stick"></div>
                        <div className="TriplesAssemble25Event_box_225 TriplesAssemble25Event_one_1_1_column_stick"></div>
                        <div className="TriplesAssemble25Event_box_225 TriplesAssemble25Event_one_1_1_to_one_1"></div>
                        <div className="TriplesAssemble25Event_box_225 TriplesAssemble25Event_one_1_2_to_one_1"></div>
                        <div className="TriplesAssemble25Event_real_box TriplesAssemble25Event_one_1_1"></div>
                        <div className="TriplesAssemble25Event_real_box TriplesAssemble25Event_one_1_2"></div>
                    </div>
                </div>
            </section >
        </div >
    );
}
