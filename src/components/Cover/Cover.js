import React from 'react'
import './cover.css';
import coverVideo from '../../media/coverVideo2.mp4';

const Cover = () => {
    return (
        < div className="cover-container" >
            <video className='video' src={coverVideo} autoPlay loop muted />
            <h1>Jorge Alberto Hernández Sánchez</h1>
            <p>Full Stack Developer</p>
        </div >
    )
}

export default Cover
