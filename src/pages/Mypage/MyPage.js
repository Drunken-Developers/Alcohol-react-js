import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const MyPage = () => {
    return (
        <div>
            <Outlet />
            <div style={{display: 'grid'}}>
                <MyPageItem id={1} content={'내 정보'} />
                <MyPageItem id={2} content='작성 글 & 리뷰' />
                <MyPageItem id={3} content='공지 사항' />
                <MyPageItem id={4} content='관심 있는 술' />
                <MyPageItem id={5} content='북마크' />
                <MyPageItem id={6} content='임시저장 글' />
                <MyPageItem id={7} content='로그아웃' /> 
            </div>
        </div>
    );
};
const MyPageItem = ({ content }) => {
    return (
        <div>
            <NavLink to={`/mypagecontent/${content}`}>
                <button>{content}</button>
            </NavLink>
        </div>
    );
};

export default MyPage;