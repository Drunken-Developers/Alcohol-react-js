import { useNavigate,Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { click } from "@testing-library/user-event/dist/click";
import { Button } from "bootstrap";
import Search from "../../../pages/search/Search";


const SeachAppbar = () => {
    const navigate = useNavigate();
    const [toggleSerach, UseToggle] = useState(false)
    const [search, inputSearch] = useState("");
    const goSearch = () => {
        navigate('/search');
    };
    
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onSearch = () => {
        UseToggle(!toggleSerach)
        console.log(toggleSerach)
        setText('');
    }
    let searchTag = (
        <div>
            {/* <input onChange={onChange} value={text} placeholder="검색어를 입력하세요" />
            <button onClick={goSearch}>검색</button> */}
            <Search/>
        </div>
    )
    // console.log(searchvar);
    return(
        <>
            <FiSearch style={{float: 'right'}} className="mainHeader" size={30} onClick={() => {
                // goSearch();
                onSearch();}} />
            { toggleSerach && searchTag}
        </>
    )
}

export default SeachAppbar;
