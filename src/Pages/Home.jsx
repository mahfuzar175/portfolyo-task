import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Home = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPortfolio(data);
      });
  }, []);

  return (
    <div className="px-10 py-2 bg-black ">
      {/* navbar section*/}
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-black text-white">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 text-3xl font-libre">John.</div>
            <div className="flex-none hidden lg:block lg:mr-4">
              <ul className="menu menu-horizontal font-roboto text-base gap-4">
                {/* Navbar menu content here */}
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Services</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Project</a>
                </li>
                <li>
                  <a>Review</a>
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center h-14 px-8 py-0 text-base font-semibold text-center text-white no-underline align-middle transition-all duration-300 ease-in-out bg-transparent  bg-gray-950 hover:border-2 border-gray-950 border-2 hover:bg-black border-solid  cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
            >
              Contact
              <FaArrowRightLong className="ml-2 mt-1" />
            </a>
          </div>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-black text-white font-roboto text-base">
            {/* Sidebar content here */}
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Project</a>
            </li>
            <li>
              <a>Review</a>
            </li>
          </ul>
        </div>
      </div>

      {/* hero section */}
      <section className="bg-black text-white lg:p-16 p-5  py-24">
        <div className="flex lg:flex-row justify-between items-center lg:text-left text-center gap-8 flex-col-reverse">
          <div className="w-1/2 space-y-6">
            <h1 className="font-libre font-semibold xl:text-8xl lg:text-6xl text-4xl">
              {portfolio.user?.about.title}
            </h1>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-0 gap-5">
              <a
                href="#"
                className="inline-flex items-center justify-center h-14 px-8 py-0 text-base font-semibold text-center text-white no-underline align-middle transition-all duration-300 ease-in-out bg-transparent  bg-gray-950 hover:border-2 border-gray-950 border-2 hover:bg-black border-solid  cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
              >
                Contact
                <FaArrowRightLong className="ml-2 mt-1" />
              </a>
              <p className="ml-5 xl:font-extrabold xl:text-base">
                {portfolio.user?.about.subTitle}
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              className="xl:w-96 lg:w-80 w-auto rounded-full"
              src={portfolio.user?.about.avatar.url}
              alt=""
            />
            <h2 className="absolute bottom-24 xl:left-28 left-20 md:left-56 font-semibold text-4xl font-libre">
              {portfolio.user?.about.name}
            </h2>
          </div>
        </div>
      </section>

      {/* skill section */}
      <section className="bg-black text-white lg:p-16 p-5  py-24 border border-gray-900">
        <Tabs>
          <TabList className="text-center font-semibold text-lg font-libre mb-9">
            <Tab>About Me</Tab>
            <Tab>Skillset</Tab>
          </TabList>

          <TabPanel>
            <div className="flex flex-col lg:flex-row justify-start gap-11">
              <div className="lg:w-1/2">
                <img
                  className=""
                  src={portfolio.user?.about.avatar.url}
                  alt=""
                />
              </div>
              <div className="space-y-9 lg:w-1/2">
                <h1 className="font-semibold text-5xl font-libre">
                  {portfolio.user?.about.subTitle}
                </h1>
                <p className="font-roboto text-gray-400">
                  {portfolio.user?.about.description}
                </p>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="text-lg">
                    <h2 className="font-roboto text-gray-400">Name</h2>
                    <p className="font-libre">{portfolio.user?.about.name}</p>
                  </div>
                  <div className="text-lg">
                    <h2 className="text-gray-400 font-roboto">Phone Number</h2>
                    <p className="font-libre">
                      {portfolio.user?.about.phoneNumber}
                    </p>
                  </div>
                  <div className="text-lg">
                    <h2 className="text-gray-400 font-roboto">Email Address</h2>
                    <p className="font-libre">{portfolio.user?.email}</p>
                  </div>
                  <div className="text-lg">
                    <h2 className="text-gray-400 font-roboto">
                      Social Networks
                    </h2>
                    <div className="flex gap-4 font-libre  mt-1">
                      <a href="#">
                        <FaInstagram />
                      </a>
                      <a href="#">
                        <FaLinkedin />
                      </a>
                      <a href="#">
                        <FaTwitter />
                      </a>
                      <a href="#">
                        <FaFacebook />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-col lg:flex-row justify-start gap-24">
              <div className="space-y-8 lg:w-1/2">
                <div className="space-y-8">
                  <h2 className="font-libre text-4xl">My Skills</h2>
                  <p className="font-roboto">
                    {portfolio.user?.about.subTitle}
                  </p>
                </div>
                {/* progress */}
                <div className="font-libre">
                  {portfolio.user?.skills
                    .sort((a, b) => a.sequence - b.sequence)
                    .map((skill, index) => (
                      <div key={index} className="mb-4">
                        <div className="flex justify-between items-center">
                          <h3>{skill.name}</h3>
                          <p>{skill.percentage}%</p>
                        </div>
                        <progress
                          className="progress w-full progress-success"
                          value={skill.percentage}
                          max="100"
                        ></progress>
                      </div>
                    ))}
                </div>
              </div>

              <div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                  {portfolio.user?.skills.map((skill, index) => (
                    <div key={index}>
                      <img
                        className="w-40 bg-gray-800 rounded-lg"
                        src={skill.image.url}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </section>

        {/* projects section */}
        <section className="bg-black text-white lg:p-16 p-5 py-24 mt-9">
  <h2 className="font-libre font-semibold text-4xl mb-8">My Recent Works</h2>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    {portfolio.user?.projects.sort((a, b) => a.sequence - b.sequence).map((project, index) => (
      <div key={index} className="relative">
        <img
          src={project.image.url}
          alt=""
          className="w-full h-auto  filter brightness-100 hover:brightness-75"
        />
        <div className="absolute inset-0 duration-500 flex items-center justify-center opacity-0 transition bg-gray-800 h-[82%]  hover:opacity-75">
          
          <a
                href="#"
                className="inline-flex items-center justify-center h-14 px-8 py-0 text-base font-semibold text-center text-white no-underline align-middle transition-all duration-300 ease-in-out hover:bg-transparent  hover:border-2 bg-black border-black border-2  border-solid  cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
              >
                View Code
                <FaGithub className="ml-2 mt-1"/>
              </a>
        </div>
        <h2 className="text-center font-libre text-3xl mt-4">Project {project.sequence}</h2>
      </div>
    ))}
  </div>
</section>


    </div>
  );
};

export default Home;
