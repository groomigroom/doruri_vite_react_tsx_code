import { Link } from 'react-router-dom';

import './IdolList.css';

import IdL_Triples from '../triples/main/img/tri_m_img.jpg'

import Menu from '../Menu';

export default function IdolList() {
    return (
        <div className="idolList_full">
            <Menu />
            <section className="idolList_part">
                <section className="idolList_trainf">
                    <section className="idolList_train">
                        <Link to="/" className="idolList_link">Home</Link>
                        <Link to="/TriplesMain" className="idolList_link">
                            <img src={IdL_Triples} alt="트리플에스" className='idolList_link_tri_i' />
                            <h4>tripleS</h4>
                        </Link>
                        <Link to="/TxtMain" className="idolList_link">TxtMain</Link>
                        <Link to="/AkmuMain" className="idolList_link">AkmuMain</Link>
                    </section>
                    <section className="idolList_train">
                        <Link to="/" className="idolList_link">Home</Link>
                        <Link to="/TriplesEvent" className="idolList_link">TriplesEvent</Link>
                        <Link to="/TxtEvent" className="idolList_link">TxtEvent</Link>
                        <Link to="/AkmuEvent" className="idolList_link">AkmuEvent</Link>
                    </section>
                    <section className="idolList_train">
                        <Link to="/" className="idolList_link">Home</Link>
                        <Link to="/TriplesEvent" className="idolList_link">TriplesEvent</Link>
                        <Link to="/TxtEvent" className="idolList_link">TxtEvent</Link>
                        <Link to="/AkmuEvent" className="idolList_link">AkmuEvent</Link>
                    </section>
                </section>
            </section>
        </div>
    );
};
