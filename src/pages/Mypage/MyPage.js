import React from 'react';
import { NavLink } from 'react-router-dom';

const MyPage = () => {
    return (
        <div style={{display: 'grid'}}>
            <MyPageItem id={1} content='내 정보' />
            <MyPageItem id={2} content='작성 글 / 리뷰' />
            <MyPageItem id={3} content='공지 사항' />
            <MyPageItem id={4} content='관심 있는 술' />
            <MyPageItem id={5} content='북마크' />
            <MyPageItem id={6} content='임시저장 글' />
            <MyPageItem id={7} content='로그아웃' /> 
            {/* 
            <button>내 정보</button>
            <button>작성 글 / 리뷰</button>
            <button>공지 사항</button>
            <button>관심 있는 술</button>
            <button>북마크</button>
            <button>임시저장 글</button>
            <button>로그아웃</button> */}
        </div>
    );
};
const MyPageItem = ({ id, content }) => {
    return (
        <div>
            <NavLink to={`/mypage/${id}`}>
                <button>{content}</button>
            </NavLink>
        </div>
    );
};


export default MyPage;