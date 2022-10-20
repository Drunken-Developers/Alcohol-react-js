import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Layout from './Layout';
import NotFound from './pages/NotFound';
import Community from './pages/Community/Community';
import Article from './pages/Community/Article';
import Write from './pages/Community/Write';
import Search from './pages/Search/Search';
import MyPage from './pages/Mypage/MyPage';
import MyPageContent from './pages/Mypage/MyPageContent';
const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='/community' element={<Community />}>
          <Route path=':id' element={<Article />} />
        </Route>
        <Route path='/write' element={<Write />} />
        <Route path='/search' element={<Search />} />
        <Route path='/mypage' element={<MyPage />} />
          <Route path=':id' element={<MyPageContent />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
