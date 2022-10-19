// import { useState } from "react";
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Article from "./Article";
// import Write from "./Write";
// import Nav from "./Nav";
// import { Button } from "bootstrap";

// function Community() {
    // const [mode, setMode] = useState ('FIRSTPAGE');
    // const [id, setId] = useState(null);
    // const [nextId, setNextId] = useState();
    // const [topics, setTopics] = useState([
    //     { id: 1, title: 'first', body: 'first content is ...' },
    //     { id: 2, title: 'second', body: 'second content is ...' },
    //     { id: 3, title: 'third', body: 'third content is ...' },
    //     ]);
    //     let content = null;
    //     if(mode === 'FIRSTPAGE') {
    //          content = <Article title="커뮤니티" body="커뮤니티 입니다"></Article>;
    //      } else if(mode === 'READ') {
    //     let title, body = null;
    //     for (let i = 0; i < topics.length; i++) {
    //         console.log(topics[i].id, id);
    //         if (topics[i].id === id) {
    //         title = topics[i].title;
    //         body = topics[i].body;
    //         }
    //     }
    //     content = <Article title={title} body={body}></Article>;
    //     } else if (mode === 'WRITE') {
    //     content = (
    //         <Write
    //         onCreate={(_title, _body) => {
    //             const newTopic = { id: nextId, title: _title, body: _body };
    //             const newTopics = [...topics];
    //             newTopics.push(newTopic);
    //             setTopics(newTopics);
    //             setMode('READ');
    //             setId(nextId);
    //             setNextId(nextId + 1);
    //         }}
    //         ></Write>
    //     );
    // }
    
    // return (
    //     <div>
    //         <Nav
    //             topics={topics}
    //             onChangeMode={(_id) => {
    //             setMode('READ');
    //             setId(_id);
    //             }}
    //         ></Nav>
    //         {content}
    //         <a
    //             href="/write"
    //             onClick={(event) => {
    //             event.preventDefault();
    //             setMode('WRITE');
    //             }}
    //         >
    //         <Button>글쓰기</Button>
    //       </a>
    //     </div>
    // );
    
const Community = () => {
    return (
        <div>
            <Outlet />
            <div>
                <ArticleItem id={1} />
                <ArticleItem id={2} />
                <ArticleItem id={3} />
            </div>
            <NavLink to={'/write'}>
                <button>글쓰기</button>
            </NavLink>
        </div>
    );
};
//     return (
//         <div>
//             <Nav topics={topics} />
//             {/* {content} */}
//         </div>
//     )
// };

// 게시글 목록 보여주는 함수
const ArticleItem = ({ id }) => {
    const activeStyle = {
        color: 'green',
        fontSize: 21,
    };
        // 글 리스트 출력
    return (
        <div>
            <NavLink to={`/community/${id}`} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                {id}번 게시글
            </NavLink>
        </div>
    );
};

export default Community;