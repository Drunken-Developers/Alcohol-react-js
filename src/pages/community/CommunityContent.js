import {Link, useLocation} from "react-router-dom";
import dummy from "../../db/CommunityList.json";

export default function CommunityContent(){
    //Link를 통해 받아온 state를 location에 저장
    const location = useLocation().state;
    return (
        <div>
           <h1>{location.title}</h1>
            <div>
                {location.content} <br/>
                좋아요 : {location.like}
            </div>
            <div>
                댓글
                <br/>
                {location.comment.map((comment)=>
                <div key={comment}>
                    <p>{comment}</p>
                </div>)}
            </div>
        </div>
    )
}
