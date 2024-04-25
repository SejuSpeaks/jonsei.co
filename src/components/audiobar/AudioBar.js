import { useRef, useEffect, useState } from "react";
import { music } from "../../info";
import { formatTime } from "../utils/formatTime";

const AudioBar = ({ setSongPlaying, audioRef, setIsPlaying, isPlaying, songPlaying }) => {
    const progressBarRef = useRef();

    const playSong = () => {
        audioRef.current.play();
        setIsPlaying(true);
    }

    const pauseSong = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    }

    const playNext = () => {
        const id = songPlaying.id
        if (id + 1 < music.length) {
            return setSongPlaying(music[id + 1])
        }
        return setSongPlaying(music[0])
    }

    const playPrev = () => {
        const id = songPlaying.id
        if (id - 1 >= 0) {
            return setSongPlaying(music[id - 1])
        }
        return setSongPlaying(music[music.length - 1])
    }

    const drag = () => {
        audioRef.current.currentTime = progressBarRef.current.value;
    }

    const updateTime = () => {
        const currentTime = audioRef.current.currentTime;
        setProgress(formatTime(currentTime));
        progressBarRef.current.value = currentTime;
    }

    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration
        const songDuration = formatTime(seconds)
        setDuration(songDuration)
        progressBarRef.current.max = seconds
    }

    useEffect(() => {
        if (isPlaying && audioRef.current.paused) {
            const playPromise = audioRef.current.play();
        }
    }, [songPlaying])

    useEffect(() => {
        audioRef.current.addEventListener("timeupdate", updateTime);
        return () => {
            audioRef.current.removeEventListener("timeupdate", updateTime);
        };
    }, []);



    const [progress, setProgress] = useState(formatTime(0));
    const [duration, setDuration] = useState(formatTime(0));

    return (
        <div className=" border-[1px] border-[black] p-2 flex w-full justify-between items-center bg-[#F2F2F2] sm:gap-10">
            <audio ref={audioRef} src={songPlaying.url} onLoadedMetadata={onLoadedMetadata} />

            <div className="foward-back flex items-center gap-3 pr-3 ">

                <svg onClick={() => playPrev()} className="hover" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M4 2v20h-2v-20h2zm18 0l-16 10 16 10v-20z" /></svg>


                {!isPlaying && (
                    <>
                        <svg onClick={() => playSong()} className="hover" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z" /></svg>
                    </>
                )}


                {isPlaying && (<>
                    <svg className="hover" onClick={() => pauseSong()} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z" /></svg>
                </>)}

                <svg onClick={() => playNext()} className="hover" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M20 22v-20h2v20h-2zm-18 0l16-10-16-10v20z" /></svg>

            </div>

            <div className="flex gap-5 w-[50%] items-center ">
                <input className="audio-bar hover sm:hidden" type="range" ref={progressBarRef} onChange={() => drag()} defaultValue={0} />

                <div className="flex">
                    <p className="">{progress} </p>
                    /
                    <p className="time">{duration}</p>
                </div>

            </div>


            <div className="flex items-center gap-1 pr-10 w-[200px]">
                <img className="h-7 w-7 sm:h-" src={songPlaying.cover} />
                <p>{songPlaying.name}</p>
            </div>

        </div>
    )
}

export default AudioBar;