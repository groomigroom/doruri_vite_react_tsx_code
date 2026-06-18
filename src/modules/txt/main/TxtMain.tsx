import { Link } from 'react-router-dom';

export default function TxtMain() {
    return (
        <div>
            ##### logo 넣기
            <p>
                #####
                하루에 하루만 더<br />
                &apos;투모로우바이투게더&apos;와 함께 힘내 보아요.</p>
            <h2>투모로우바이투게더</h2>
            #####          txt_m_img
            <h3>멤버</h3>
            <article className='txt_m_mem'>
                <img src="" alt="" />
                <h4>수빈</h4>
            </article>
            <article className='txt_m_mem'>
                <img src="" alt="" />
                <h4>연준</h4>
            </article>
            <article className='txt_m_mem'>
                <img src="" alt="" />
                <h4>범규</h4>
            </article>
            <article className='txt_m_mem'>
                <img src="" alt="" />
                <h4>태현</h4>
            </article>
            <article className='txt_m_mem'>
                <img src="" alt="" />
                <h4>휴닝카이</h4>
            </article>



            <Link to="/TxtEvent">이벤트</Link>
        </div>
    );
};
