import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const SeachAppbar = () => {
    const navigate = useNavigate();
    const goSearch = () => {
        navigate('/search');
    };
    return(
        <FiSearch style={{float: 'right'}} className="mainHeader" size={30} onClick={goSearch} />
        // <ModalPopup />
    )
}

export default SeachAppbar;
