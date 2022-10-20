import React, {useState, useEffect, useRef} from 'react';
// import { ReactDOM } from 'react';
import { useNavigate } from 'react-router-dom';
import whiskey from '../../assets/images/whiskey.jpeg';
import champagne from '../../assets/images/champagne.jpeg';
import wine from '../../assets/images/wine.jpeg';
import '../../assets/css/Recommend.css';
// import Modal from '../Community/Popup/Modal';
function Recommend() {
    const images = useRef([
        {src: whiskey},
        {src: champagne},
        {src: wine}]);
    const [current, setCurrent] = useState(0);
    const [style, setStyle] = useState({marginLeft: `-${current}00%`});
    const imgSize = useRef(images.current.length);
    const moveSlide = (i) => {
        let nextIndex = current + i;
        if(nextIndex < 0) {
            nextIndex = imgSize.current - 1;
        } else if(nextIndex >= imgSize.current) {
            nextIndex = 0;
        }
        setCurrent(nextIndex);
    };
    // 게시글로 이동하는 함수
    const navigate = useNavigate();
    const onClickImg = () => {
        navigate(`/community/${current+1}`);
    };

    useEffect(() => {
        setStyle({ marginLeft: `-${current}00%`});   
    }, [current]);

    return (
        <div className='container'>
            <div className='slide'>
                <div className='btn' onClick={() => {moveSlide(-1); }}>&lt;</div>
                <div className='main-recommend'>
                    <div className="flex-box" style={style}>
                        {images.current.map((img, i) => (
                            <div
                                key={i}
                                className='recommend-alcohol'
                                style={{backgroundImage:`url(${img.src})`}}
                                onClick={onClickImg}>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='btn' onClick={() => { moveSlide(1); }}>&gt;</div>
            </div>
            <div className='position'>
                {images.current.map((x, i) => (
                    <div
                        key={i}
                        className={i === current ? 'dot current' : 'dot'}>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Recommend;