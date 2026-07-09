import { Link } from 'react-router-dom';

import '../idol_search/IdolList.css';

import IdL_Triples from '../triples/main/img/tri_m_img.jpg'
import IdL_Txt from '../txt/main/img/txt_m_txtimg.jpg'
import IdL_Akmu from '../akmu/main/img/aknu_m_akmuimg.jpg'
import IdL_Ioi from '../ioi/main/img/ioi_m_ioi.jpg';
import IdL_Str from '../Stray_Kids/main/img/stray_m_stray_kids.jpg';
import IdL_Ill from '../illit/main/img/illit_m_illit.jpg';
import IdL_Tws from '../tws/main/img/tws_m_tws.jpg';
import IdL_Res from '../RESCENE/main/img/rescene_m_rescene.jpg';
import IDL_Ten from '../10CM/main/img/10cm_m_mem_Gwonjungyeol.jpg';
import IDL_Aes from '../aespa/main/img/aespa_m_aespa.jpg';
import IdL_All from '../ALLDAY_PROJECT/main/img/allday_m_allday_project.jpg';
import IdL_Day from '../DAY6/main/img/day6_m_day6.jpg';


import MenuEng from '../HomeEng/MenuEng';

export default function IdolListEng() {
    return (
        <div className="idolList_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/IdolList'>한국어</Link>
                <Link to='/IdolListEng' className="on">English</Link>
            </section>
            <section className="idolList_part">
                <section className="idolList_trainf">
                    <section className="idolList_train">
                        <div className="idolList_link">
                            <Link to="/TriplesMainEng" className="idolList_link_a idolList_link_tri">
                                <img src={IdL_Triples} alt="tripleS" />
                                <div>
                                    <h4>tripleS</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/TxtMainEng" className="idolList_link_a idolList_link_txt">
                                <img src={IdL_Txt} alt="TOMORROW X TOGETHER" />
                                <div>
                                    <h4>TOMORROW<br />
                                        X<br />
                                        TOGETHER
                                    </h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/AkmuMainEng" className="idolList_link_a idolList_link_akmu">
                                <img src={IdL_Akmu} alt="AKMU" />
                                <div>
                                    <h4>AKMU</h4>

                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/IoiMainEng" className="idolList_link_a idolList_link_ioi">
                                <img src={IdL_Ioi} alt="I.O.I" />
                                <div>
                                    <h4>I.O.I</h4>
                                </div>
                            </Link>
                        </div>
                    </section>
                    <section className="idolList_train">
                        <div className="idolList_link">
                            <Link to="/StrayKidsMainEng" className="idolList_link_a idolList_link_str">
                                <img src={IdL_Str} alt="Stray Kids" />
                                <div>
                                    <h4>Stray Kids</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/IllitMainEng" className="idolList_link_a idolList_link_str">
                                <img src={IdL_Ill} alt="ILLIT" />
                                <div>
                                    <h4>ILLIT</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/TwsMainEng" className="idolList_link_a idolList_link_str">
                                <img src={IdL_Tws} alt="TWS" />
                                <div>
                                    <h4>TWS</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/ResMainEng" className="idolList_link_a idolList_link_str">
                                <img src={IdL_Res} alt="RESCENE" />
                                <div>
                                    <h4>RESCENE</h4>
                                </div>
                            </Link>
                        </div>

                    </section>

                    <section className="idolList_train">
                        <div className="idolList_link">
                            <Link to="/TenCMMainEng" className="idolList_link_a idolList_link_ten">
                                <img src={IDL_Ten} alt="10CM" />
                                <div>
                                    <h4>10CM</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/AespaMainEng" className="idolList_link_a idolList_link_str">
                                <img src={IDL_Aes} alt="aespa" />
                                <div>
                                    <h4>aespa</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/ALLDAY_PROJECTMainEng" className="idolList_link_a idolList_link_ten">
                                <img src={IdL_All} alt="ALLDAY PROJECT" />
                                <div>
                                    <h4>ALLDAY<br />
                                        PROJECT</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/DAY6MainEng" className="idolList_link_a idolList_link_str">
                                <img src={IdL_Day} alt="DAY6" />
                                <div>
                                    <h4>DAY6</h4>
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
                Copyright ⓒ Modhaus
            </section>

        </div>
    );
};

