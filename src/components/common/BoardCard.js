import '../../assets/css/Community.css'
import dummy from '../../db/CommunityList.json'
import {Link} from "react-router-dom";



export default function BoardCard(){
    return (
        <div>
            {dummy.board.map((board)=>(
                <Link to={`/community-list/${board.id}`} state={board} key={board.id} >
                <div className={'board_card'}>
                    <h3>{board.title}</h3>
                    <div>{board.content}</div>
                    좋아요 수 : {board.like} 댓글 수 : {board.comment.length}
                </div>
                </Link>
            ))}
        </div>
    )
}
