import { Link } from 'react-router-dom';

import './IdolList.css';

import IdL_Triples from '../triples/main/img/tri_m_img.jpg'
import IdL_Txt from '../txt/main/img/txt_m_txtimg.jpg'
import IdL_Akmu from '../akmu/main/img/aknu_m_akmuimg.jpg'

import Menu from '../Menu';

export default function IdolList() {
    return (
        <div className="idolList_full">
            <Menu />
            <section className="idolList_part">
                <section className="idolList_trainf">
                    <section className="idolList_train">
                        <Link to="/" className="idolList_link">Home</Link>
                        <div className="idolList_link">
                            <Link to="/TriplesMain" className="idolList_link_a idolList_link_tri">
                                <img src={IdL_Triples} alt="트리플에스" />
                                <div>
                                    <h4>tripleS</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/TxtMain" className="idolList_link_a idolList_link_txt">
                                <img src={IdL_Txt} alt="투바투" />
                                <div>
                                    <h4>투모로우<br />
                                        바이<br />
                                        투게더
                                    </h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/AkmuMain" className="idolList_link_a idolList_link_akmu">
                                <img src={IdL_Akmu} alt="악뮤" />
                                <div>
                                    <h4>악뮤</h4>

                                </div>
                            </Link>
                        </div>
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
