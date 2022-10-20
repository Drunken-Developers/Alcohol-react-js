import { useNavigate } from "react-router-dom";
const NotFound = () => {
    const navigate = useNavigate();
    const goRoot = () => {
        navigate('/');
    };
    return (
        <div
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 64,
            position: 'absolute',
            width: '100%',
            height: '100%',
        }}
        >
            404 Page is not exist
            <button onClick={goRoot}>back</button>
        </div>
    );
};

export default NotFound;