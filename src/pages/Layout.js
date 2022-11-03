import { Outlet, useNavigate } from "react-router-dom";
import "../assets/css/Layout.css"
import AppBar from "../components/common/app-bar/AppBar.js";

const Layout = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
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
                <button onClick={goMypage}>마이페이지</button>
            </footer>
        </>
    );
};

export default Layout;
