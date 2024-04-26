import { projects } from "../../info";
import NavBar from "../navbar/NavBar";

const Code = () => {

    const allProjects = projects.map((proj, index) => {
        return (
            <div key={index} className="flex justofy-center flex-col items-center ">
                <a rel="noreferrer" target="_blank" href={proj.link}>


                    <div className="border-[1px] border-black">
                        <img alt="project preview" className="w-fill max-w-[420px] max-h-[200px] " src={proj.image} />
                    </div>

                    <p className="font-semibold">{proj.name}</p>
                </a>
            </div>
        )
    })

    return (
        <div className="h-[100vh] bg-[white]">
            <NavBar />

            <div className="flex justify-center gap-10 items-center h-full sm:flex-col ">
                <div className="flex justify-center items-center gap-10 sm:flex sm:flex-col sm:items-center">
                    <p className="text-[30px] text-nowrap">My Journey</p>
                    {allProjects}
                </div>

            </div>
        </div>
    );
}

export default Code;