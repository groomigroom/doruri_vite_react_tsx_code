import { useState } from 'react';
import './AlldayProjectEvent.css';

export default function AlldayProjectEvent() {
    const [all_e_maze_running_box_top, setAll_e_maze_running_box_top] = useState(280);
    const [all_e_maze_running_box_left, setAll_e_maze_running_box_left] = useState(120);

    const all_e_maze_running_box_top_up = () => {
        setAll_e_maze_running_box_top((PrevAll_e_maze_running_box_top) => (PrevAll_e_maze_running_box_top - 40));
    };

    const all_e_maze_running_box_top_down = () => {
        setAll_e_maze_running_box_top((PrevAll_e_maze_running_box_top) => (PrevAll_e_maze_running_box_top + 40));
    };

    const all_e_maze_running_box_left_left = () => {
        setAll_e_maze_running_box_left((PrevAll_e_maze_running_box_left) => (PrevAll_e_maze_running_box_left - 40));
    };

    const all_e_maze_running_box_left_right = () => {
        setAll_e_maze_running_box_left((PrevAll_e_maze_running_box_left) => (PrevAll_e_maze_running_box_left + 40));
    };

    if (all_e_maze_running_box_top === 200 && all_e_maze_running_box_left === 200) {
        all_e_maze_running_box_top = 280;
        all_e_maze_running_box_left = 200;
    }

    return (
        <div className="AlldayProjectEvent_full">
            <section className="alldayproject_e_maze">
                <section className='alldayproject_e_maze_realfield'>
                    <div className="alldayproject_e_maze_running_box" style={{
                        top: `${all_e_maze_running_box_top}px`, left: `${all_e_maze_running_box_left}px`
                    }}></div>
                </section>
            </section>
            <button className='alldayproject_e_maze_RB_to_top' onClick={all_e_maze_running_box_top_up}>위로가기</button>
            <button className='alldayproject_e_maze_RB_to_top' onClick={all_e_maze_running_box_top_down}>아래로가기</button>
            <button className='alldayproject_e_maze_RB_to_top' onClick={all_e_maze_running_box_left_left}>왼쪽으로가기</button>
            <button className='alldayproject_e_maze_RB_to_top' onClick={all_e_maze_running_box_left_right}>오른쪽으로가기</button>
        </div>
    );
}
