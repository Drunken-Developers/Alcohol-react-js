import { Outlet, useNavigate } from "react-router-dom";
import "./assets/css/Layout.css"

const Layout = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    const goMain = () => {
        navigate('/');
    };
    const goCommunity = () => {
        navigate('/community');
    };
    const goSearch = () => {
        navigate('/search');
    };
    const goMypage = () => {
        navigate('/mypage');
    };
    return (
        <div>
            <header className="header-css" style={{ background: 'lightgray', fontSize: 24 }}>
                <button style={{ position: 'left'}} onClick={goBack}>back</button>
                <button style={{ position: 'right'}} onClick={goSearch}>search</button>
            </header>
            <main className="main-layout">
                <Outlet />
            </main>
            <footer className="footer-grid" style={{ background: 'lightgray', fontSize: 24 }}>
                <button onClick={goMain}>홈</button>
                <button onClick={goCommunity}>커뮤니티</button>
                <button onClick={goSearch}>검색</button>
                <button onClick={goMypage}>마이페이지</button>
            </footer>
        </div>
    );
};

export default Layout;