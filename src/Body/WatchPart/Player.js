import React, { useState } from "react";
import { ReactComponent as Play } from "../../Icons/playButton.svg";
import { ReactComponent as Pause } from "../../Icons/pause.svg";
import { ReactComponent as Sound } from "../../Icons/sound.svg";
import { ReactComponent as SoundDisable } from "../../Icons/soundDisable.svg"
import { ReactComponent as FullScreen } from "../../Icons/fullScreen.svg"

function Player({ movie, showPlay, setPlay, setLoading, setScreen, fullscreen, startLoader }) {

    const [showSound, setSound] = useState(true);

    const playMovie = (type) => {
        if (type === 'play') {
            setPlay(false);
            startLoader();
        } else {
            setPlay(true);
            setLoading(false);
        }
    }

    const sound = (sound) => {
        sound === 'off' ? setSound(false) : setSound(true);
    }

    const screenSize = () => {
        fullscreen === false ? setScreen(true) : setScreen(false);
    }

    return <div className="player">
        <div className="controlPanel">
            <div className="control">
                <div className="play">
                    <Play className={`playerPlay ${showPlay}`} onClick={() => playMovie('play')}></Play>
                    <Pause className={`playerPlay ${!showPlay}`} onClick={() => playMovie('pause')}></Pause>
                </div>
                <div className="sound">
                    <Sound className={`playerSound ${showSound}`} onClick={() => sound('off')}></Sound>
                    <SoundDisable className={`playerSound ${!showSound}`} onClick={() => sound('on')}></SoundDisable>
                </div>
                <div className="timer">
                    <div className="timerPart">00:00 / 00:00</div>
                </div>
            </div>
            <div className="showRecommend">
                <FullScreen className="fullScreen" onClick={() => screenSize()}></FullScreen>
            </div>
        </div>
        <div className="movieName">
            <h5>{movie?.title}</h5>
        </div>

    </div>
}

export default Player;
