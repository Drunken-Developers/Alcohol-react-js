import Community from "../Community/Community";
import Recommend from "./Recommend";
import "../../assets/css/Main.css"

const Main = () => {
    return (
        <div>
            {/* <div>메인 화면</div> */}
            <div className="main-recomnmend"><Recommend /></div>
            <div className="main-community"><Community /></div>
        </div>
    );
};

export default Main;