import { skills } from "../../../info";

const MySkills = () => {

    const colors = ['green', 'purple', 'violet', 'blue']


    const mappedSkills = skills.map((skill, index) => {
        const randomIndex = Math.floor(Math.random() * colors.length)
        const randomColor = colors[randomIndex]
        const hoverColorClass = `hover:text-[${randomColor}]`;

        return (
            <p key={index} className={`text-lg p-1 hover:text-[violet] hover:cursor-pointer `}>{` | ${skill.title} |  `}</p>
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