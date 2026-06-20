import { Link } from 'react-router-dom';

import './IdolList.css';

import Menu from '../Menu';

export default function IdolList() {
    return (
        <div className="idolList_full">
            <Menu />
            <section className="home_p1">
                <section className="home_p1_trainf">
                    <section className="home_p1_train">
                        <Link to="/" className="home_link">Home</Link>
                        <Link to="/TriplesMain" className="home_link home_tri_link">TriplesEvent</Link>
                        <Link to="/TxtMain" className="home_link home_txt_link">TxtMain</Link>
                        <Link to="/AkmuMain" className="home_link home_akm_link">AkmuMain</Link>
                    </section>
                    <section className="home_p1_train">
                        <Link to="/" className="home_link">Home</Link>
                        <Link to="/TriplesEvent" className="home_link home_tri_link">TriplesEvent</Link>
                        <Link to="/TxtEvent" className="home_link home_txt_link">TxtEvent</Link>
                        <Link to="/AkmuEvent" className="home_link home_akm_link">AkmuEvent</Link>
                    </section>
                    <section className="home_p1_train">
                        <Link to="/" className="home_link">Home</Link>
                        <Link to="/TriplesEvent" className="home_link home_tri_link">TriplesEvent</Link>
                        <Link to="/TxtEvent" className="home_link home_txt_link">TxtEvent</Link>
                        <Link to="/AkmuEvent" className="home_link home_akm_link">AkmuEvent</Link>
                    </section>
                </section>
            </section>
        </div>
    );
};