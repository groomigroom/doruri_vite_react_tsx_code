import { useState, useEffect } from 'react';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';
import { Link } from 'react-router-dom';

import './AlldayProjectEvent.css';
import Menu from '../../Menu';
import MainH2Deco from '../../img/main_h2_deco.png';
import FooterPart from '../../FooterPart';

export default function AlldayProjectEvent() {
    DoruriDocumentTitle('ALLDAY PROJECT 이벤트');

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
            <header className="tri_m_header">
                <Menu />
                <section className="home_translate">
                    <Link to='/AlldayProjectEvent' className="on">한국어</Link>
                    <Link to='/AlldayProjectEventEng'>English</Link>
                </section>
            </header>
            <section className="tri_e_logo">
                <img src={""} alt="ALLDAY PROJECT 이벤트 로고" />
            </section>
            <section className="tri_m_h2">
                <h2><img src={MainH2Deco} alt="ALLDAY PROJECT" />간단한 미로 탈출 이벤트<img src={MainH2Deco} alt="ALLDAY PROJECT" /></h2>
            </section>
            <section className='tri_m_intropp'>
                <p>
                    &apos;A&apos;자를 움직여서<br />
                    &apos;o&apos;자를 목적지로<br />
                    미로 탈출해 주세요!
                </p>
            </section>
            <section className="alldayproject_e_maze_full">
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
            </section>
            <section className='alldayproject_e_maze_RB_buttons_full'>
                <section className='alldayproject_e_maze_RB_buttons'>
                    <button className='alldayproject_e_maze_RB_button alldayproject_e_maze_RB_to_top' onClick={all_e_maze_running_box_top_up}>위로가기</button>
                    <button className='alldayproject_e_maze_RB_button alldayproject_e_maze_RB_to_down' onClick={all_e_maze_running_box_top_down}>아래로가기</button>
                    <button className='alldayproject_e_maze_RB_button alldayproject_e_maze_RB_to_left' onClick={all_e_maze_running_box_left_left}>왼쪽으로가기</button>
                    <button className='alldayproject_e_maze_RB_button alldayproject_e_maze_RB_to_right' onClick={all_e_maze_running_box_left_right}>오른쪽으로가기</button>
                </section>
            </section>
            <FooterPart FooterPartText='ⓒ THEBLACKLABEL' />
            {all_e_maze_running_box_top === -40 && all_e_maze_running_box_left === 120 && (<section className="tri_e_last_win_part">
                <div className="tri_e_ghost_40px"></div>
                <section className="tri_m_h2">
                    <h2>
                        <img src={MainH2Deco} alt="stray kids" />당첨입니다.<img src={MainH2Deco} alt="stray kids" />
                    </h2>
                </section>
                <section className="tri_e_p_win_intropp">
                    <p>
                        당첨을 축하드려요!<br />
                        상품은 팔찌입니다.<br />
                        이벤트에 관심가져 주셔서 감사합니다.<br />
                        이 이벤트는 가상의 이벤트입니다.<br />
                        참고해 주시길 부탁드리겠습니다.<br />
                    </p>
                </section>
                <section className="tri_e_p_win_present_150">
                    <img src={''} alt="" className="triples_e_p_win_present_img" />
                </section>
            </section>)}
        </div>
    );
}
