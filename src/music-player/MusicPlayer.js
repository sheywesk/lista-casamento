import React, { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import './MusicPlayer.css';
import praVoce from "../assets/music/musica_bridgerton.mp3"

const MusicPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const [autoplayBlocked, setAutoplayBlocked] = useState(false);

    useEffect(() => {
        const playAudio = async () => {
            try {
                await audioRef.current.play();
                setIsPlaying(true);
            } catch (error) {
                setAutoplayBlocked(true);
                console.log('Autoplay was prevented:', error);
            }
        };

        playAudio();
    }, []);

    const startAudio = () => {
        audioRef.current.play().then(() => {
            setIsPlaying(true);
            setAutoplayBlocked(false);
        }).catch(error => {
            console.log('Failed to play audio:', error);
        });
    };

    const pauseAudio = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
    };

    return (
        <div className="music-player">
            <audio ref={audioRef} src={praVoce} loop />
            {autoplayBlocked && (
                <p>Autoplay was blocked. Click the play button to start music.</p>
            )}
            <div className="fixed-button">
                {!isPlaying ? (
                    <button onClick={startAudio} className="play-button">
                        <FaPlay />
                    </button>
                ) : (
                    <button onClick={pauseAudio} className="pause-button">
                        <FaPause />
                    </button>
                )}
            </div>
        
        </div>
    );
};

export default MusicPlayer;
