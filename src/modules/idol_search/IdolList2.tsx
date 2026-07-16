import { Link } from 'react-router-dom';

import './IdolList.css';
import './IdolList2.css';


import Menu from '../Menu';

export default function IdolList2() {
    return (
        <div className="idolList2_full">
            <Menu />
            <section className="idolList_part">
                <section className="idolList_trainf">
                    <section className="idolList_train">
                        <div className="idolList_link">
                            <Link to="/Bol4Main" className="idolList_link_a idolList_link_tri">
                                <img src="" alt="볼빨간사춘기" />
                                <div>
                                    <h4>볼빨간사춘기</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/EpikHighMain" className="idolList_link_a idolList_link_txt">
                                <img src="" alt="에픽하이" />
                                <div>
                                    <h4>에픽하이</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/YenaMain" className="idolList_link_a idolList_link_akmu">
                                <img src="" alt="최예나" />
                                <div>
                                    <h4>최예나</h4>

                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/IdnttMain" className="idolList_link_a idolList_link_ioi">
                                <img src="" alt="idntt" />
                                <div>
                                    <h4>idntt</h4>
                                </div>
                            </Link>
                        </div>
                    </section>
                    <section className="idolList_train">
                        <div className="idolList_link">
                            <Link to="/ARTMSMain" className="idolList_link_a idolList_link_str">
                                <img src="" alt="ARTMS" />
                                <div>
                                    <h4>ARTMS</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/IllitMain" className="idolList_link_a idolList_link_str">
                                <img src="" alt="xxx" />
                                <div>
                                    <h4>xxx</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/TwsMain" className="idolList_link_a idolList_link_str">
                                <img src="" alt="xxx" />
                                <div>
                                    <h4>xxx</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/ResMain" className="idolList_link_a idolList_link_str">
                                <img src="" alt="xxx" />
                                <div>
                                    <h4>xxx</h4>
                                </div>
                            </Link>
                        </div>

                    </section>

                    <section className="idolList_train">
                        <div className="idolList_link">
                            <Link to="/TenCMMain" className="idolList_link_a idolList_link_str">
                                <img src="" alt="xxx" />
                                <div>
                                    <h4>xxx</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/AespaMain" className="idolList_link_a idolList_link_str">
                                <img src="" alt="xxx" />
                                <div>
                                    <h4>xxx</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/ALLDAY_PROJECTMain" className="idolList_link_a idolList_link_str">
                                <img src="" alt="xxx" />
                                <div>
                                    <h4>xxx</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/DAY6Main" className="idolList_link_a idolList_link_str">
                                <img src="" alt="xxx" />
                                <div>
                                    <h4>xxx</h4>
                                </div>
                            </Link>
                        </div>

                    </section>
                </section>
            </section>
            <section className="idolList_12345">
                <Link to='/IdolList'>1</Link>
                <Link to='/IdolList2'>2</Link>
                <Link to='/'>3</Link>
                <Link to='/'>4</Link>
                <Link to='/'>5</Link>
            </section>
        </div>
    );
};
