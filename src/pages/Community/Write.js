import React from "react";

// const Write = (props) => {
function Write(props) {
    return (
        <article>
            <div> 글쓰기 </div>
            <form onSubmit={(event) => {
                event.preventDefault();
                const title = event.target.title.value;
                const body = event.target.body.value;
                props.onCreate(title, body);
            }}
            >
                <div>
                    <input type="text" name="title" placeholder="제목" />
                </div>
                <div>
                    <textarea name="body" placeholder="내용"></textarea>
                </div>
                <div>
                    <input type="submit" value="작성"></input>
                </div>
            </form>
        </article>
    );
}

export default Write;