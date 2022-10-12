import React from 'react';
import whiskey from '../../assets/images/whiskey.jpeg';
import '../../assets/css/Recommend.css';

function Recommend() {
    return (
        <div className="main-recommend">
            <img className="recommend-alcohol" alt="whiskey" src={whiskey}/>
            <div>오늘의 추천 술입니다!</div>
        </div>
    );
}

export default Recommend;