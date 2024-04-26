import { skills } from "../../../info";

const MySkills = () => {

    const mappedSkills = skills.map((skill, index) => {

        return (
            <p key={index} className={`text-lg p-1 hover:text-[#000080] hover `}>{` | ${skill.title} |  `}</p>
        )
    })

    return (
        <div className="flex flex-col items-center  flex-wrap px-20 py-5  ">
            <p className=" text-[30px]">Skills</p>
            <div className="flex flex-wrap text-center justify-center ">
                {mappedSkills}
            </div>
        </div>
    );
}

export default MySkills;