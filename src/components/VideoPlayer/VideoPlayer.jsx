import React from 'react'
import { useRef, useEffect } from 'react'
import './VideoPlayer.css'
import video from '../../assets/about-video.mp4'

const VideoPlayer = ({playState, setPlayState}) => {

    const player = useRef(null);

    const closePlayer = (e) => {
        if(e.target === player.current){
            setPlayState(false);
        }
    }

    // Add keyboard support
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && playState) {
                setPlayState(false);
            }
        };

        if (playState) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [playState, setPlayState]);

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>
      
    </div>
  )
}

export default VideoPlayer
