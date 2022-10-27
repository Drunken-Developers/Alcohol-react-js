// import BoardCard from "../../components/common/BoardCard.js";
import BoardCardContent from "../../components/common/BoardCardContent.js";
import dummy from "../../db/CommunityList.json"

export default function CommunityList(){
    return (
        <div>
            커뮤니티 리스트
            {dummy.board.map((board)=>(
                <BoardCardContent state={board} key={board.id} />
            ))}
        </div>
    )
}