import {MdKeyboardArrowLeft} from "react-icons/md";
import {useNavigate} from "react-router-dom";

export default function BackAppbar(){
    let history = useNavigate();
    function goBack(){
        history(-1)
    }
    return (
    <>
        <MdKeyboardArrowLeft size={40} onClick={goBack} />
    </>
    )
}