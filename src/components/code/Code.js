import { projects } from "../../info";
import NavBar from "../navbar/NavBar";

const Code = () => {

    const allProjects = projects.map(proj => {
        return (
            <div className="w-[25%] flex justofy-center flex-col items-center ">
                <a target="_blank" href={proj.link}>


                    <div className="border-[1px] border-black">
                        <img src={proj.image} />
                    </div>

                    <p className="font-semibold">{proj.name}</p>
                </a>
            </div>
        )
    })

    return (
        <div className="h-[100vh] bg-[white]">
            <NavBar />

            <div className="flex justify-center gap-10 items-center h-full">
                <div className="flex justify-center items-center">
                    <p className="text-[30px]">My Journey</p>
                </div>
                {allProjects}
            </div>
        </div>
    );
}

export default Code;