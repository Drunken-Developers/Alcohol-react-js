import React, {useState} from "react";

// const Write = (props) => {
function Write(props) {
    const [write, inputText] = useState('');
    const inputWrite = (e) => {
        console.log(e)
        console.log(e.target.value)
    }
    return (
        <article>
            <div> 글쓰기 </div>
            <form>
                <div>
                    <input type="text" name="title" placeholder="제목" />
                </div>
                <div>
                    <textarea name="body" placeholder="내용" onInput={inputWrite}></textarea>
                </div>
                <div>
                    <input type="submit" value="작성"></input>
                </div>
            </form>
        </article>
    );
}

export default Write;
