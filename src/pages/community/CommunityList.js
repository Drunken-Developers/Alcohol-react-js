
import BoardCard from "../../components/common/BoardCard.js";
import {Link, Outlet} from "react-router-dom";
import dummy from "../../db/CommunityList.json"
import BoardCardContent from "../../components/common/BoardCardContent.js";
import '../../assets/css/Community.css'

export default function CommunityList(){
    return (
        <div className="community-main">
            <Outlet/>
            커뮤니티 리스트
            {dummy.board.map((board)=>(
                <BoardCardContent state={board} key={board.id} />
            ))}
            <div className='write-btn'>
                <button type='button'>
                    <Link to='/write'>글쓰기</Link>
                </button>
            </div>
        </div>
    )
}
