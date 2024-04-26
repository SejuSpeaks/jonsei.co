import { projects } from "../../../info";


const MyProjects = () => {

    const mappedProjects = projects.map((proj, index) => {
        return (
            <a key={index} rel="noreferrer" target="_blank" href={proj.link} className="">
                <div className=" border-2 h-full  p-5 hover " >
                    <div className="  ">
                        <img alt="project preview" className="" src={proj.image} />
                    </div>
                    <div className="flex justify-center">
                        <p className="font-medium text-[30px]">{proj.name}</p>
                    </div>

                    <p>{proj.description}</p>
                </div>
            </a>

        );
    })

    return (
        <div className="flex justify-center flex-col items-center  p-5">
            <div className="p-5 ">
                <p className=" text-[30px]">Projects</p>
            </div>

            <div className="flex gap-5 sm:flex sm:flex-col">
                {mappedProjects}
            </div>
        </div>
    )
}

export default MyProjects;