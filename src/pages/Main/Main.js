import Community from "../Community/Community";
import Recommend from "./Recommend";
import CommunityList from "../Community/CommunityList";
import AppBar from "../../components/Common/AppBar/AppBar";
const Main = () => {
    return (
        <div>
            <AppBar />
            <div><Recommend /></div>
            <div><CommunityList  /></div>
        </div>
    );
};

export default Main;
