import React, { useState } from 'react';
import './style.css';

const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
    const [upLikes, setUpLikes] = useState(likes);
    const [downLikes, setDownLikes] = useState(dislikes);

    const addUpLike = () => setUpLikes(upLikes + 1);
    const addDownLike = () => setDownLikes(downLikes + 1);

    return (
        <div className="joke">
            <div className="joke__body">
                <div className="joke__user">
                    <img className="user-avatar" src={userAvatar} />
                    <p className="user-name">{userName}</p>
                </div>

                <p className="joke__text">{text}</p>
            </div>
            <div className="joke__likes">
                <button
                    id="btn-up"
                    className="btn-like btn-like--up"
                    onClick={addUpLike}
                ></button>
                <span id="likes-up" className="likes-count likes-count--up">
                    {upLikes}
                </span>
                <button
                    id="btn-down"
                    className="btn-like btn-like--down"
                    onClick={addDownLike}
                ></button>
                <span id="likes-down" className="likes-count likes-count--down">
                    {downLikes}
                </span>
            </div>
        </div>
    );
};

export default Joke;
