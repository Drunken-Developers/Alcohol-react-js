import { useParams } from "react-router-dom";

const Article = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>{ id }번 게시물</h2>
            <p>내용은 { id } 쿼리를 통해 출력하자!</p>
        </div>
    );
};

// const Article = (props) => {
// function Article(props) {
//     return (
//         <article>
//             <div>{props.title}</div>
//             {props.body}
//         </article>
//     );
// }

export default Article;