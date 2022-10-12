import React from "react";

const Write = (props) => {
    return (
        <article>
            <h2> 글쓰기 </h2>
            <form onSubmit={(event) => {
                event.preventDefault();
                const title = event.target.title.value;
                const body = event.target.body.value;
                props.onCreate(title, body);
            }}
            >
                <p>
                    <input type="text" name="title" placeholder="제목" />
                </p>
                <p>
                    <textarea name="body" placeholder="내용"></textarea>
                </p>
                <p>
                    <input type="submit" value="작성"></input>
                </p>
            </form>
        </article>
    );
}

export default Write;