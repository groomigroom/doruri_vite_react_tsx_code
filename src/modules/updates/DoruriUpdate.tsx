import { Link } from 'react-router-dom';

import './DoruriUpdate.css';

import Menu from "../Menu";

import MainH2Deco from '../img/main_h2_deco.png';

export default function DoruriUpdate() {
    return (
        <div className="doruri_update_full">
            <Menu />
            <h2 className='doruri_update_m_h2'><img src={MainH2Deco} alt="로그인 꾸미기" />업데이트 내역<img src={MainH2Deco} alt="로그인 꾸미기" /></h2>
            <section className='doruri_update_train_full'>
                <section className='doruri_update_train'>
                    <Link to='/DoruriUpdateAugust5th2026'>
                        <h4>2026.<br />
                            08.<br />
                            05.
                        </h4>
                    </Link>
                    <Link to='/DoruriUpdate'>
                        <h4>xxxx.<br />
                            xx.<br />
                            xx.
                        </h4>
                    </Link>
                    <Link to='/DoruriUpdate'>
                        <h4>xxxx.<br />
                            xx.<br />
                            xx.
                        </h4>
                    </Link>
                    <Link to='/DoruriUpdate'>
                        <h4>xxxx.<br />
                            xx.<br />
                            xx.
                        </h4>
                    </Link>
                </section>
                <section className='doruri_update_train'>
                    <Link to='/DoruriUpdate'>
                        <h4>xxxx.<br />
                            xx.<br />
                            xx.
                        </h4>
                    </Link>
                    <Link to='/DoruriUpdate'>
                        <h4>xxxx.<br />
                            xx.<br />
                            xx.
                        </h4>
                    </Link>
                    <Link to='/DoruriUpdate'>
                        <h4>xxxx.<br />
                            xx.<br />
                            xx.
                        </h4>
                    </Link>
                    <Link to='/DoruriUpdate'>
                        <h4>xxxx.<br />
                            xx.<br />
                            xx.
                        </h4>
                    </Link>
                </section>
                <section className='doruri_update_train'>
                    <Link to='/DoruriUpdate'>
                        <h4>xxxx.<br />
                            xx.<br />
                            xx.
                        </h4>
                    </Link>
                    <Link to='/DoruriUpdate'>
                        <h4>xxxx.<br />
                            xx.<br />
                            xx.
                        </h4>
                    </Link>
                    <Link to='/DoruriUpdate'>
                        <h4>xxxx.<br />
                            xx.<br />
                            xx.
                        </h4>
                    </Link>
                    <Link to='/DoruriUpdate'>
                        <h4>xxxx.<br />
                            xx.<br />
                            xx.
                        </h4>
                    </Link>
                </section>
                <section className='doruri_update_train'>
                    <Link to='/DoruriUpdate'>
                        <h4>xxxx.<br />
                            xx.<br />
                            xx.
                        </h4>
                    </Link>
                    <Link to='/DoruriUpdate'>
                        <h4>xxxx.<br />
                            xx.<br />
                            xx.
                        </h4>
                    </Link>
                    <Link to='/DoruriUpdate'>
                        <h4>xxxx.<br />
                            xx.<br />
                            xx.
                        </h4>
                    </Link>
                    <Link to='/DoruriUpdate'>
                        <h4>xxxx.<br />
                            xx.<br />
                            xx.
                        </h4>
                    </Link>
                </section>
            </section>
            <section className='doruri_update_page_number'>
                <Link to='/DoruriUpdate' className='on'>
                    <h4>1</h4>
                </Link>
                <Link to='/DoruriUpdate'>
                    <h4>2</h4>
                </Link>
                <Link to='/DoruriUpdate'>
                    <h4>3</h4>
                </Link>
                <Link to='/DoruriUpdate'>
                    <h4>4</h4>
                </Link>
                <Link to='/DoruriUpdate'>
                    <h4>5</h4>
                </Link>
            </section>
        </div>
    );
}
