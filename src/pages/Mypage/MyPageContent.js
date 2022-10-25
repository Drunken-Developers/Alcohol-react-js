import { useParams } from "react-router-dom";

const MyPageContent = () => {
    const { id, content } = useParams();
    return (
        <div>
            <div>{ content }</div>
            <p>{ content } 화면 입니다.</p>
        </div>
    );
};

export default MyPageContent;