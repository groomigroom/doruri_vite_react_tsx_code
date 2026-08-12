import { useState, useEffect } from 'react';
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

    useEffect(() => {
        if (all_e_maze_running_box_top === 40 && all_e_maze_running_box_left === 40 || all_e_maze_running_box_top === 40 && all_e_maze_running_box_left === 120 || all_e_maze_running_box_top === 40 && all_e_maze_running_box_left === 200
            || all_e_maze_running_box_top === 120 && all_e_maze_running_box_left === 40 || all_e_maze_running_box_top === 120 && all_e_maze_running_box_left === 120 || all_e_maze_running_box_top === 120 && all_e_maze_running_box_left === 200
            || all_e_maze_running_box_top === 200 && all_e_maze_running_box_left === 40 || all_e_maze_running_box_top === 200 && all_e_maze_running_box_left === 120 || all_e_maze_running_box_top === 200 && all_e_maze_running_box_left === 200
            || all_e_maze_running_box_left === -40 || all_e_maze_running_box_left === 280 ||
            all_e_maze_running_box_top === -80 || all_e_maze_running_box_top === 320 ||
            all_e_maze_running_box_top === 280 && all_e_maze_running_box_left === 80 || all_e_maze_running_box_top === 280 && all_e_maze_running_box_left === 40 || all_e_maze_running_box_top === 280 && all_e_maze_running_box_left === 0
            || all_e_maze_running_box_top === 280 && all_e_maze_running_box_left === 160 || all_e_maze_running_box_top === 280 && all_e_maze_running_box_left === 200 || all_e_maze_running_box_top === 280 && all_e_maze_running_box_left === 240
            || all_e_maze_running_box_top === -40 && all_e_maze_running_box_left === 80 || all_e_maze_running_box_top === -40 && all_e_maze_running_box_left === 40 || all_e_maze_running_box_top === -40 && all_e_maze_running_box_left === 0
            || all_e_maze_running_box_top === -40 && all_e_maze_running_box_left === 160 || all_e_maze_running_box_top === -40 && all_e_maze_running_box_left === 200 || all_e_maze_running_box_top === -40 && all_e_maze_running_box_left === 240
        ) {
            setAll_e_maze_running_box_top(280);
            // left는 어차피 200이므로 다시 설정할 필요는 없지만 명시적으로 지정 가능
            setAll_e_maze_running_box_left(120);
        }
    }, [all_e_maze_running_box_top, all_e_maze_running_box_left]); // 두 값이 바뀔 때마다 실행

    return (
        <div className="AlldayProjectEvent_full">
            <section className="alldayproject_e_maze">
                <section className='alldayproject_e_maze_realfield'>
                    <div className='alldayproject_e_maze_x_box alldayproject_e_maze_x_box1'><p>x</p></div>
                    <div className='alldayproject_e_maze_x_box alldayproject_e_maze_x_box2'><p>x</p></div>
                    <div className='alldayproject_e_maze_x_box alldayproject_e_maze_x_box3'><p>x</p></div>
                    <div className='alldayproject_e_maze_x_box alldayproject_e_maze_x_box4'><p>x</p></div>
                    <div className='alldayproject_e_maze_x_box alldayproject_e_maze_x_box5'><p>x</p></div>
                    <div className='alldayproject_e_maze_x_box alldayproject_e_maze_x_box6'><p>x</p></div>
                    <div className='alldayproject_e_maze_x_box alldayproject_e_maze_x_box7'><p>x</p></div>
                    <div className='alldayproject_e_maze_x_box alldayproject_e_maze_x_box8'><p>x</p></div>
                    <div className='alldayproject_e_maze_x_box alldayproject_e_maze_x_box9'><p>x</p></div>
                    <div className="alldayproject_e_maze_running_box" style={{
                        top: `${all_e_maze_running_box_top}px`, left: `${all_e_maze_running_box_left}px`
                    }}><p>A</p></div>
                    <div className='alldayproject_e_maze_goal'><p>o</p></div>
                </section>
            </section>
            <button className='alldayproject_e_maze_RB_to_top' onClick={all_e_maze_running_box_top_up}>위로가기</button>
            <button className='alldayproject_e_maze_RB_to_top' onClick={all_e_maze_running_box_top_down}>아래로가기</button>
            <button className='alldayproject_e_maze_RB_to_top' onClick={all_e_maze_running_box_left_left}>왼쪽으로가기</button>
            <button className='alldayproject_e_maze_RB_to_top' onClick={all_e_maze_running_box_left_right}>오른쪽으로가기</button>
            {all_e_maze_running_box_top === -40 && all_e_maze_running_box_left === 120 && (<section>
                <p>당첨</p>
            </section>)}
        </div>
    );
}
