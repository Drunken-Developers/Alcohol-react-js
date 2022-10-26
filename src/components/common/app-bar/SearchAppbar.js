import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { click } from "@testing-library/user-event/dist/click";
import { Button } from "bootstrap";

const SeachAppbar = () => {
    const navigate = useNavigate();
    const [toggleSerach, UseToggle] = useState(false)
    const goSearch = () => {
        navigate(`/${text}`);
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
    return(
        <>
            <FiSearch style={{float: 'right'}} className="mainHeader" size={30} onClick={onSearch} />
            { toggleSerach && <input onChange = {onChange} value={text} placeholder="검색어를 입력하세요" />}
            { toggleSerach && <button onClick={goSearch} >검색</button>}
            { toggleSerach && <>검색 내용: {text}</>}
        </>
    )
}

export default SeachAppbar;
