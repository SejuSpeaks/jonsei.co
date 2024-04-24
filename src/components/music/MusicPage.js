import NavBar from "../navbar/NavBar";
import { music } from "../../info";
import musicbackground from '../../assets/musicbackground.jpg'
import cover from '../../assets/song_covers/cover.jpg'

const MusicPage = ({ isPlaying, setIsPlaying, songPlaying, setSongPlaying }) => {

    const clickedSong = (song) => {

        if (songPlaying.name === song.name) {
            if (isPlaying) {
                setIsPlaying(false)
            } else {
                setIsPlaying(true)
            }
        }
        else {
            setSongPlaying(song)
            setIsPlaying(true)
        }
    }

    const showPlayButton = (song) => {
        if (!isPlaying) {
            return true
        }
        if (isPlaying && song.name !== songPlaying.name) {
            return true
        }

    }

    const songs = music.map((song, index) => {
        //index + 1 because index starts at 0
        return (
            <div onClick={() => clickedSong(song)} className="flex border-b-2 border-[#F8F8F8] hover:cursor-pointer hover:bg-[#f1f1f1]">
                <img className="h-10 w-10" src={cover} />

                <div className="flex gap-2 pl-2 items-center w-full">
                    <p className="text-[lightgrey]">{index + 1}</p>
                    <p className="text-sm w-full">{song.name}</p>

                    <div className="flex justify-end w-full pr-5">
                        {showPlayButton(song) && (
                            <>
                                <svg className="fill-[lightgrey]" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z" /></svg>
                            </>
                        )}


                        {isPlaying && songPlaying.name === song.name && (<>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z" /></svg>
                        </>)}

                    </div>
                </div>

            </div>
        );
    })

    return (
        <div>
            <NavBar />
            <div className="bg-no-repeat h-[100vh]" style={{ backgroundImage: `url(${musicbackground})` }} >
                <div className=" flex justify-center items-center text-center w-full">
                    <p className="w-80 text-[11px]">
                        The best way i know to express myself to date is music. It stays close to my heart and adds a soundtrack to this caotic life,
                        this is some selected songs
                        i enjoy and some that ive made, enjoy the site with some music please
                    </p>
                </div>
                <div >
                    {songs}
                </div>

            </div>
        </div>
    );
}


export default MusicPage;

//name of song is true but isplaying isnt