// import { useState } from "react";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
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
const ArticleItem = ({ id }) => {
    const activeStyle = {
        color: 'green',
        fontSize: 21,
    };
    return (
        <div>
            <NavLink to={`/community/${id}`} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                {id}번 게시글
            </NavLink>
        </div>
    );
};

export default Community;