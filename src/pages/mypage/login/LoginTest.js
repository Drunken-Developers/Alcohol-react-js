import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { isLogin } from "../../../redux/action"

export default function LoginTest() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const goMypage = () => {
        navigate('/mypage');
    };

    return (
        <button onClick={() => { dispatch(isLogin()); goMypage }}>로그인(인증완료)</button>
    )
}