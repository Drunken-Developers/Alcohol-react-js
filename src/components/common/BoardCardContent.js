import { Link } from "react-router-dom";

export default function BoardCardContent(board) {
    const boardArray = board.state;
    return(
        <Link to={`/community-list/${boardArray.id}`} state={boardArray} key={boardArray.id} >
            <div className={'board_card'}>
                <h3>{boardArray.title}</h3>
                <div>{boardArray.content}</div>
                좋아요 수 : {boardArray.like} 댓글 수 : {boardArray.comment}
            </div>
        </Link>
    )
}