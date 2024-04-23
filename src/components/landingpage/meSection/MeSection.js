import image from '../../../assets/me.png'

const MeSection = () => {
    return (
        <div className="flex flex-col justify-center items-center  p-10 h-full ">

            <div className="flex items-center  justify-center">

                <img className='w-[80px] ' src={image} />

                <p className='text-[21px] pl-3 '>Jael Bueno <span className='whitespace-nowrap text-[green]' > Software Engineer</span></p>
            </div>

            <div className="w-80 pt-5 text-left">
                {/* <p>Hey my name is Jael <br />
                    and im a software engineer  <br />
                    born in PuertoRico based out of Kissimmee
                </p> */}
                <p>Transitioning from music producer and creative director to software development,
                    my career path evolved over the past couple of years. In 2022, I committed to my passion
                    for creation and enrolled in AppAcademy to gain fundamental skills for building software.
                    Throughout the Bootcamp, I learned about managing data using<span className=" font-bold">
                        ORM's like SQLAlchemy and Sequelize</span>, working with databases such as Postgres, and
                    building <span className=" font-bold ">robust APIs with backend
                        frameworks like Flask or Express.</span> I explored my creative side by crafting
                    wireframes and project plans to execute frontend development using frameworks
                    like<span className=' font-bold  '> React.</span>
                    Im a versatile candidate comfortable wearing many hats,
                    I am now seeking opportunities with passionate companies
                    dedicated to shaping the future of social networks.
                    You can reach me at jaelbuenoswe@gmail.com</p>
            </div>

        </div>
    )
}

export default MeSection;