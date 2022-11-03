import React from 'react';
import { Navigate, NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { isLogout } from '../../redux/action';
import { useDispatch } from 'react-redux' 
const MyPage = () => {
    // const isLogin = false;
    // redux를 통해 Login에서 올바른 Id, Pw를 입력 및 데이터와 일치하는 경우 isLogin = true 설정
    const disPath = useDispatch();
    const value = useSelector((store) => store.value);
    console.log(value)

    if (value == false) {
        return <Navigate to="/login" replace={true} />;
    }
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
                <button onClick={ () => {disPath(isLogout()) }}>로그아웃</button>
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