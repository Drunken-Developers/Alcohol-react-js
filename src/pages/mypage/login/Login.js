import { useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { isLogin } from "../../../redux/action"
import userDB from "../../../db/UserList.json";

export default function Login() {
    //react-redux로 action의 함수를 사용할 수 있도록 함
    const dispatch = useDispatch();
    //로그인 성공 시 mypage로 이동하도록.
    const navigate = useNavigate();
    //id입력시 일치하는 user의 index 위치를 저장
    const [userIndex, setInputId] = useState(null);
    //id, pw 체크 일치시 true
    const [matchingUser, setUserIdPw] = useState(false)
    //Dummy data userDB의 userdata 저장
    let userList = userDB.userdata
    let userid = ''
    let userPw = ''
    const writeId = (e) => {
        userid = e.target.value;
        setInputId(userList.findIndex((x) => x.id === userid))
    }
    const writePw = (e) => {
        userPw = e.target.value;
        setUserIdPw(userList[userIndex].pw === userPw)
    }
    const checkUser = () =>{
        if(matchingUser){
            alert('로그인 성공')
            { dispatch(isLogin()) }
            navigate('/mypage')
        }else{
            alert('아이디, 비밀번호 오류')
        }
    }
    console.log(matchingUser)
    return (
        <div>
            로그인 페이지
            <p>
                ID: <input type="id" name="input_id" onBlur={writeId}  placeholder="아이디를 입력하세요" />
            </p>
            <p>
                PW: <input type="password" name="input_pw" onBlur={writePw} placeholder="비밀번호를 입력하세요" />
            </p>
            <button type="submit" onClick={checkUser}>Login</button>
        </div>
    )
}