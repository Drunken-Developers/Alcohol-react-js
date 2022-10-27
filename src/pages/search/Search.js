import { useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import dummy from "../../../src/db/CommunityList.json"
import BoardCardContent from "../../components/common/BoardCardContent";

const Search = () => {
    const [search, inputSearch] = useState("");
    const [showList, ShowList] = useState(false)
    const navigate = useNavigate();
    const onChange = (e) => {
        inputSearch(e.target.value)
    }
    const dummyArray = dummy.board
    const filtered = dummyArray.filter((itemList) => 
       itemList.title.replace(" ","").toLocaleLowerCase().includes(search.replace(" ","").toLocaleLowerCase())
    )
    console.log(filtered);
    
    const boardList = (
        <div>
            {filtered.map((board)=>(
                <BoardCardContent state={board} key={board.id} />
            ))}
        </div>
    )
    function hideList(){
        inputSearch('')
        ShowList(false)
    }
    const searchResult = () => {
        ShowList(true)
    }
    const goSearch = () => {
        navigate('/search');
    };
    return (
        <div>
            <input type="text" value={search} onChange={onChange} placeholder="검색" onClick={hideList} />
            <button onClick={() => {
                // goSearch(); 
                searchResult();}}><Link to="/search" state={{input:search, list:filtered }} > 검색</Link></button>
            {showList && boardList}
        </div>
    );
}
export default Search;