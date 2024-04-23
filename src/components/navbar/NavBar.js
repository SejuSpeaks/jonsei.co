import { nav } from "../../info";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [colorIndex, setColorIndex] = useState(0);
    const colors = ['green', 'purple', 'violet', 'blue']
    const intervalDuration = 900;

    useEffect(() => {
        console.log(colorIndex)
        const intervalId = setInterval(() => {
            setColorIndex((prev) => (prev + 1) % colors.length)
        }, intervalDuration)

        return () => clearInterval(intervalId)
    }, [])

    const navItems = Object.values(nav).map((el, index) => {

        return (
            <div key={index} className={` flex items-center hover:shadow-lg hover:cursor-pointer border-black border-2 rounded-md ${el.class ? "svg" : ""}`}>
                <p className={`text-[20px] px-6 py-1 ${el.class ? `svg-${colors[colorIndex]}` : ""}`} >{el.title}</p>
            </div>
        )
    })

    return (
        <div className="flex justify-center border-2 pt-5 w-screen ">
            {navItems}
        </div>
    )
}

export default NavBar;