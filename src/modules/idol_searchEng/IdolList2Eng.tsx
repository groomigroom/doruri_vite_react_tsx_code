import { Link } from 'react-router-dom';

import '../idol_search/IdolList.css';
import '../idol_search/IdolList2.css';


import MenuEng from '../HomeEng/MenuEng';

export default function IdolList2Eng() {
    return (
        <div className="idolList2_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/IdolList2'>한국어</Link>
                <Link to='/IdolList2Eng' className="on">English</Link>
            </section>
            <section className="idolList_part">
                <section className="idolList_trainf">
                    <section className="idolList_train">
                        <div className="idolList_link">
                            <Link to="/Bol4MainEng" className="idolList_link_a idolList_link_tri">
                                <img src="" alt="BOL4" />
                                <div>
                                    <h4>BOL4</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/EpikHighMainEng" className="idolList_link_a idolList_link_txt">
                                <img src="" alt="EPIK HIGH" />
                                <div>
                                    <h4>EPIK HIGH</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/YenaMainEng" className="idolList_link_a idolList_link_akmu">
                                <img src="" alt="YENA" />
                                <div>
                                    <h4>YENA</h4>

                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/IoiMain" className="idolList_link_a idolList_link_ioi">
                                <img src="" alt="xxx" />
                                <div>
                                    <h4>xxx</h4>
                                </div>
                            </Link>
                        </div>
                    </section>
                    <section className="idolList_train">
                        <div className="idolList_link">
                            <Link to="/StrayKidsMain" className="idolList_link_a idolList_link_str">
                                <img src="" alt="xxx" />
                                <div>
                                    <h4>xxx</h4>
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
                <Link to='/IdolListEng'>1</Link>
                <Link to='/IdolList2Eng'>2</Link>
                <Link to='/'>3</Link>
                <Link to='/'>4</Link>
                <Link to='/'>5</Link>
            </section>
        </div>
    );
};

