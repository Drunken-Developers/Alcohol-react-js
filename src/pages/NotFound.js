import { Navigate } from "react-router-dom";
const NotFound = () => {
    const goBack = () => {
        Navigate('/');
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
            <button onClick={goBack}>back</button>
        </div>
    );
};

export default NotFound;