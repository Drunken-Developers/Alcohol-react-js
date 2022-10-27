import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Community from './pages/community/Community';
import Article from './pages/community/Article';
import Write from './pages/community/Write';
import Search from './pages/search/Search';
import MyPage from './pages/mypage/MyPage';
import MyPageContent from './pages/mypage/MyPageContent';
import CommunityList from "./pages/community/CommunityList";
import CommunityContent from "./pages/community/CommunityContent";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='/community-list' element={<CommunityList />}>
        <Route path=':id' element={<CommunityContent />} />
        </Route>
        <Route path='/write' element={<Write />} />
        <Route path='/search' element={<Search />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/mypagecontent' element={<MyPageContent />}>
          <Route path=':content' element={<MyPageContent />} />
          </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
