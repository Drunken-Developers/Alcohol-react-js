import Community from "../Community/Community";
import Recommend from "./Recommend";

const Main = () => {
    return (
        <div>
            <h1>메인 화면</h1>
            <div><Recommend /></div>
            <div><Community /></div>
        </div>
    );
};

export default Main;