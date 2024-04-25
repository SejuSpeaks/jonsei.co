import { nav } from "../../info";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const [colorIndex, setColorIndex] = useState(0);
    const colors = [
        "gray",        // Gray
        "navy-blue",   // Navy Blue
        "peach",       // Peach
        "mint-green",  // Mint Green
        "coral",       // Coral
        "pale-yellow", // Pale Yellow
        "beige",       // Beige
        "lavender"     // Lavender
    ];


    const intervalDuration = 900;

    const navigate = useNavigate()

    const clickNav = (el) => {
        if (el.class) {
            navigate('/')
        }
        else {
            navigate(`/${el.title}`)
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setColorIndex((prev) => (prev + 1) % colors.length)
        }, intervalDuration)

        return () => clearInterval(intervalId)
    }, [])

    const navItems = Object.values(nav).map((el, index) => {

        return (
            <div onClick={() => clickNav(el)} key={index} className={` flex items-center hover:shadow-sm hover rounded-md ${el.class ? "svg" : ""}`}>
                <p className={`text-[20px] px-6 py-1 hover:text-[${colors[colorIndex]}] ${el.class ? `svg-${colors[colorIndex]}` : ""}`} >{el.title}</p>
            </div>
        )
    })

    return (
        <div className="flex bg-white justify-center  pt-5 w-screen ">
            {navItems}
        </div>
    )
}

export default NavBar;