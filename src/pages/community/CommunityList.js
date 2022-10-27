
import BoardCard from "../../components/common/BoardCard.js";
import {Outlet} from "react-router-dom";

export default function CommunityList(){
    return (
        <div>
            <Outlet/>
            커뮤니티 리스트
            {dummy.board.map((board)=>(
                <BoardCardContent state={board} key={board.id} />
            ))}
        </div>
    )
}