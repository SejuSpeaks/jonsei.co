import { pictures } from "../../info";
import NavBar from "../navbar/NavBar";


const Pictures = () => {

    const allPictures = pictures.map(pic => {
        return (
            <div className=" relative">
                <img className="h-max-[400px]" src={pic.image} />
                <p>{pic.caption}</p>
            </div>
        );
    })

    return (
        <div className="h-[100vh] bg-[white]">
            <NavBar />

            <div className="flex flex-col justify-center items-center  gap-10 wrap">
                {allPictures}
            </div>

        </div>
    );
}

export default Pictures;