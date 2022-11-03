import { useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { isLogin } from "../../../redux/action"
import UserDataList from "../../../db/UserList.json";
import { useSelector } from "react-redux";
import LoginTest from "./LoginTest";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const goMypage = () => {
        navigate('/mypage');
    };
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
    const userData = UserDataList.userdata;
    const isMatchId = userData.filter((itemList) =>
        itemList.id.includes(inputId)
    )
    const isMatchPw = () => {
        if(inputPw == isMatchId[0].pw) {
            return true;
        }
    }

    const onClickLogin = () => {
        console.log('login click!')
        console.log(inputId, inputPw)
        if (inputId === '' && inputPw === '') {
            return alert('로그인 정보를 입력하세요.')
        } else if (inputId === '') {
            return alert('아이디를 입력하세요.')
        } else if (inputPw === '') {
            return alert('비밀번호를 입력하세요')
        } else if (isMatchId === null) {
            return alert('일치하는 ID가 없습니다.')
        } else if (inputPw !== isMatchId[0].pw) {
            return alert('PW가 틀립니다.')
        } else if (isMatchId && isMatchPw) {
            // isLogin값을 true로 바꾸고, Mypage로 이동
            { dispatch(isLogin()); goMypage }
        }
    }
    const value = useSelector((store) => store.value);
    console.log({ value })

    return (
        <div>
            로그인 페이지
            <p>
                ID: <input type="id" name="input_id" value={inputId} onChange={handleInputId} placeholder="아이디를 입력하세요" />
            </p>
            <p>
                PW: <input type="password" name="input_pw" value={inputPw} onChange={handleInputPw} placeholder="비밀번호를 입력하세요" />
            </p>
            <button type="submit" onClick={onClickLogin}>Login</button>
            <LoginTest />
        </div>
    )
}