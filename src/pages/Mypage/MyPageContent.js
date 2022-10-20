import { useParams } from "react-router-dom";

const MyPageContent = () => {
    const { id, content } = useParams();
    return (
        <div>
            <h2>{ content }</h2>
            <p>내용을 입력하세요. {id}</p>
        </div>
    );
};

export default MyPageContent;