import { Link } from 'react-router-dom';

import './IdolList.css';

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


import Menu from '../Menu';

export default function IdolList() {
    return (
        <div className="idolList_full">
            <Menu />
            <section className="idolList_part">
                <section className="idolList_trainf">
                    <section className="idolList_train">
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

                        <div className="idolList_link">
                            <Link to="/IoiMain" className="idolList_link_a idolList_link_ioi">
                                <img src={IdL_Ioi} alt="아이오아이" />
                                <div>
                                    <h4>아이오아이</h4>
                                </div>
                            </Link>
                        </div>
                    </section>
                    <section className="idolList_train">
                        <div className="idolList_link">
                            <Link to="/StrayKidsMain" className="idolList_link_a idolList_link_str">
                                <img src={IdL_Str} alt="Stray Kids" />
                                <div>
                                    <h4>Stray Kids</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/IllitMain" className="idolList_link_a idolList_link_str">
                                <img src={IdL_Ill} alt="ILLIT" />
                                <div>
                                    <h4>ILLIT</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/TwsMain" className="idolList_link_a idolList_link_str">
                                <img src={IdL_Tws} alt="TWS" />
                                <div>
                                    <h4>TWS</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/ResMain" className="idolList_link_a idolList_link_str">
                                <img src={IdL_Res} alt="RESCENE" />
                                <div>
                                    <h4>RESCENE</h4>
                                </div>
                            </Link>
                        </div>

                    </section>

                    <section className="idolList_train">
                        <div className="idolList_link">
                            <Link to="/TenCMMain" className="idolList_link_a idolList_link_str">
                                <img src={IDL_Ten} alt="10CM" />
                                <div>
                                    <h4>10CM</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/AespaMain" className="idolList_link_a idolList_link_str">
                                <img src={IDL_Aes} alt="aespa" />
                                <div>
                                    <h4>aespa</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/ALLDAY_PROJECTMain" className="idolList_link_a idolList_link_str">
                                <img src="" alt="ALLDAY PROJECT" />
                                <div>
                                    <h4>ALLDAY<br />
                                        PROJECT</h4>
                                </div>
                            </Link>
                        </div>

                        <div className="idolList_link">
                            <Link to="/DAY6Main" className="idolList_link_a idolList_link_str">
                                <img src="" alt="DAY6" />
                                <div>
                                    <h4>DAY6</h4>
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
