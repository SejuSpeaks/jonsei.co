import NavBar from "../navbar/NavBar";
import MeSection from "./meSection/MeSection";
import MySkills from "./mySkills/MySkills";
import MyProjects from "./myProjects/MyProjects";

import background from '../../assets/background1.jpg'

const LandingPage = () => {
    return (
        <div className="bg-no-repeat" style={{ backgroundImage: `url(${background})` }}>
            <div className="sticky top-0 bg-[white]">
                <NavBar />
            </div>


            <section className="flex p-10">

                <div className="p-5">
                    <MeSection />
                </div>


                <div className="flex flex-col ">
                    <div className="p-5">
                        <MySkills />
                    </div>
                    <div className="p-5">
                        <MyProjects />
                    </div>

                </div>

            </section>
        </div >
    )
}

export default LandingPage;