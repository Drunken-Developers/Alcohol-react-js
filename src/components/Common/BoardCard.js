import '../../assets/css/Community.css'
import dummy from '../../db/CommunityList.json'

export default function BoardCard(){
    console.log(dummy)

    function clickCard(data){
        alert(JSON.stringify(data))
    }
    return (
        <div>
            {dummy.board.map((board)=>(
                <div key={board.id} className={'board_card'} onClick={()=>clickCard(board)}>
                    <h3>{board.title}</h3>
                    <div>{board.content}</div>
                    좋아요 수 : {board.like} 댓글 수 : {board.comment.length}
                </div>
            ))}
        </div>
    )
}
