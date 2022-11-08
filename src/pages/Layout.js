import { Outlet, useNavigate } from "react-router-dom";
import "../assets/css/Layout.css"
import AppBar from "../components/common/app-bar/AppBar.js";
import { useSelector } from "react-redux";
const Layout = () => {
    const navigate = useNavigate();
    const goMain = () => {
        navigate('/');
    };
    const goCommunity = () => {
        navigate('/community-list');
    };
    const goSearch = () => {
        navigate('/search');
    };
    const goMypage = () => {
        navigate('/mypage');
    };
    // redux 사용, 로그인 여부에 따라 마이페이지, 로그인 상태를 출력하도록 함
    const layoutDisplay = useSelector((store) => store.layoutDisplay);
    console.log(layoutDisplay);
    
    return (
        <>
            <header className="header-css">
                <AppBar />
            </header>
            <main className="main-layout" id='scrollbar'>
                <Outlet />
            </main>
            <footer className="footer-grid" style={{ background: 'lightgray', fontSize: 24 }}>
                <button onClick={goMain}>홈</button>
                <button onClick={goCommunity}>커뮤니티</button>
                <button onClick={goSearch}>검색</button>
                <button onClick={goMypage}>{layoutDisplay}</button>
            </footer>
        </>
    );
};

export default Layout;
