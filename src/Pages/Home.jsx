import { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsMailbox2Flag } from "react-icons/bs";
import { FaHouseUser } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Home = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

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

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="bg-black" id="home">
      {/* navbar section*/}
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full p-4 fixed z-30 navbar bg-black text-white px-10">
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
                <li className="hover:border hover:border-white border border-black">
                  <Link
                    activeClass="none"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li className="hover:border hover:border-white border border-black">
                  <Link
                    activeClass="none"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li className="hover:border hover:border-white border border-black">
                  <Link
                    activeClass="none"
                    to="services"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Services
                  </Link>
                </li>
                <li className="hover:border hover:border-white border border-black">
                  <Link
                    activeClass="none"
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Skills
                  </Link>
                </li>
                <li className="hover:border hover:border-white border border-black">
                  <Link
                    activeClass="none"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Project
                  </Link>
                </li>
                <li className="hover:border hover:border-white border border-black">
                  <Link
                    activeClass="none"
                    to="timeline"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Resume
                  </Link>
                </li>
                <li className="hover:border hover:border-white border border-black">
                  <Link
                    activeClass="none"
                    to="reviews"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Review
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="inline-flex items-center justify-center h-14 px-8 py-0 text-base font-semibold text-center text-white no-underline align-middle transition-all duration-300 ease-in-out bg-transparent  bg-gray-950 hover:border-2 border-gray-950 border-2 hover:bg-black border-solid  cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
            >
              Contact
              <FaArrowRightLong className="ml-2 mt-1" />
            </Link>
          </div>
        </div>
        <div
          className="drawer-side "
          style={{ zIndex: 9999, position: "fixed" }}
        >
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-black text-white font-roboto text-base">
            {/* Sidebar content here */}
            <li className="hover:border hover:border-white border border-black">
              <Link
                activeClass="none"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="hover:border hover:border-white border border-black">
              <Link
                activeClass="none"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="hover:border hover:border-white border border-black">
              <Link
                activeClass="none"
                to="services"
                spy={true}
                smooth={true}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li className="hover:border hover:border-white border border-black">
              <Link
                activeClass="none"
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="hover:border hover:border-white border border-black">
              <Link
                activeClass="none"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                Project
              </Link>
            </li>
            <li className="hover:border hover:border-white border border-black">
              <Link
                activeClass="none"
                to="timeline"
                spy={true}
                smooth={true}
                duration={500}
              >
                Resume
              </Link>
            </li>
            <li className="hover:border hover:border-white border border-black">
              <Link
                activeClass="none"
                to="reviews"
                spy={true}
                smooth={true}
                duration={500}
              >
                Review
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* hero section */}
      <section
        className="bg-black text-white lg:p-16 mt-16 p-5 py-24 px-10"
        id="hero"
      >
        <div className="flex lg:flex-row justify-between items-center lg:text-left text-center gap-8 flex-col-reverse">
          <div className="w-1/2 space-y-6">
            <div data-aos="fade-down" data-aos-duration="2000">
              <h1 className="font-libre font-semibold xl:text-8xl lg:text-6xl text-4xl">
                {portfolio.user?.about.title}
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-0 gap-5">
              <a
                href="#contact"
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
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
            >
              <img
                className="xl:w-96 lg:w-80 w-auto rounded-full"
                src={portfolio.user?.about.avatar.url}
                alt=""
              />
            </motion.div>
            <h2 className="absolute bottom-24 xl:left-28 left-20 md:left-56 font-semibold text-4xl font-libre">
              {portfolio.user?.about.name}
            </h2>
          </div>
        </div>
      </section>

      {/* about */}
      <section
        className="bg-black text-white lg:p-16  py-24 px-10 border-t border-b border-b-gray-900 border-t-gray-900 p-5"
        id="about"
      >
        <h2 className="font-libre text-4xl font-semibold mb-3 mt-7 md:mt-10 lg:px-16 px-0">
          {portfolio.user?.about.name}
        </h2>
        <p className="font-libre text-lg mt-1 text-gray-400 lg:mt-0 lg:px-16 px-0">
          {portfolio.user?.about.title}
        </p>
        <div className="flex flex-col lg:flex-row justify-start mb-6 mt-8 lg:mt-0 lg:py-14 lg:px-14">
          <div className="lg:w-1/2 flex lg:justify-start lg:items-start items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                initial={false}
                animate={
                  isLoaded && isInView
                    ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                    : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                }
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
                onViewportEnter={() => setIsInView(true)}
                style={{
                  width: "auto",
                  height: "auto",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <motion.img
                  src={portfolio.user?.about.avatar.url}
                  alt=""
                  className="lg:w-96"
                  onLoad={() => setIsLoaded(true)}
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="space-y-9 lg:w-1/2 mt-12 lg:mt-0">
            <h1 className="font-semibold lg:text-5xl text-3xl font-libre">
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
                <h2 className="text-gray-400 font-roboto">Social Networks</h2>
                <div className="flex gap-4 font-libre mt-1">
                  {portfolio.user?.social_handles.map((social, index) => (
                    <a href="#" key={index}>
                      <img className="w-5" src={social.image.url} alt="" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services section */}
      <section
        className="bg-black text-white lg:p-16 p-5 py-24 px-10"
        id="services"
      >
        <h2 className="font-libre text-4xl font-semibold mb-6 lg:px-16 px-0  md:mt-10">
          My services
        </h2>
        <div className="flex flex-col">
          {portfolio.user?.services.map((service, index) => (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              key={index}
              className="border-t border-b border-collapse p-14 border-slate-900 group relative"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between justify-start items-start lg:items-center">
                <div>
                  <h2 className="font-libre lg:text-6xl text-3xl">
                    {service.name}
                  </h2>
                  <p className="font-roboto lg:text-2xl text-lg text-gray-400 mt-6">
                    {service.desc}
                  </p>
                </div>
                <a href="#">
                  <div className="border rounded-full p-3 mt-6">
                    <h2 className="lg:text-5xl text-2xl lg:mt-0 ">
                      <FaArrowRightLong></FaArrowRightLong>
                    </h2>
                  </div>
                </a>
              </div>
              <img
                className="w-64 hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                src={service.image.url}
                alt=""
              />
            </div>
          ))}
        </div>
      </section>

      {/*  skills*/}
      <section
        className="bg-black text-white lg:p-16 py-24 px-10  border-t border-b border-b-gray-900 border-t-gray-900  mt-7 p-5"
        id="skills"
      >
        <div className="flex flex-col lg:flex-row justify-center items-center gap-24">
          <div className="space-y-8 lg:w-1/2 w-full">
            <div className="space-y-8 md:mt-10">
              <h2 className="font-libre text-4xl">My Skills</h2>
              <p className="font-roboto">{portfolio.user?.about.subTitle}</p>
            </div>
            {/* progress */}
            <div
              data-aos="fade-down"
              data-aos-duration="2000"
              className="font-libre"
            >
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
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1"
            >
              {portfolio.user?.skills.map((skill, index) => (
                <div key={index}>
                  <img
                    className="w-40 bg-gray-800 rounded-lg transition-transform duration-300 hover:scale-95"
                    src={skill.image.url}
                    alt=""
                  />
                  <p className="text-center text-xs font-libre mt-1">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* projects section */}
      <div className="border-b-gray-900 border-b" id="projects">
        <section className="bg-black text-white lg:p-16 p-5 py-26">
          <h2 className="font-libre font-semibold text-4xl mb-8 md:mt-10">
            My Recent Works
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {portfolio.user?.projects
              .sort((a, b) => a.sequence - b.sequence)
              .map((project, index) => (
                <div key={index} className="relative">
                  <img
                    src={project.image.url}
                    alt=""
                    className="w-full h-auto  filter brightness-100 hover:brightness-75"
                  />
                  <div className="absolute inset-0 duration-500 flex items-center justify-center opacity-0 transition bg-gray-800 h-[83%]  hover:opacity-75">
                    <a
                      onClick={() =>
                        document.getElementById(`my_modal_${index}`).showModal()
                      }
                      className="inline-flex items-center justify-center h-14 px-8 py-0 text-base font-semibold text-center text-white no-underline align-middle transition-all duration-300 ease-in-out hover:bg-transparent  hover:border-2 bg-black border-black border-2  border-solid  cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
                    >
                      View Details
                    </a>
                    <dialog id={`my_modal_${index}`} className="modal">
                      <div className="modal-box bg-white text-black rounded-none w-full">
                        <img src={project.image.url} alt="" />
                        <h2 className="py-2 font-libre font-bold text-xl">
                          Project {project.sequence}
                        </h2>
                        <p className="font-roboto">{project.description}</p>
                        <h2 className="font-libre font-bold">Tech Stack</h2>
                        <p>{project.techStack.join(", ")}</p>
                        <h2 className="font-libre font-bold">Live URL</h2>
                        <a href={project.liveurl}>{project.liveurl}</a>
                        <h2 className="font-libre font-bold">GitHub URL</h2>
                        <a href={project.githuburl}>{project.githuburl}</a>

                        <div className="modal-action">
                          <a
                            onClick={() =>
                              document
                                .getElementById(`my_modal_${index}`)
                                .close()
                            }
                            href="#_"
                            className="relative inline-block px-4 py-2 font-medium group"
                          >
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                            <span className="relative text-black group-hover:text-white">
                              Close
                            </span>
                          </a>
                        </div>
                      </div>
                    </dialog>
                  </div>
                  <div className="relative text-center font-libre text-3xl mt-4  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                    <span className="">Project {project.sequence}</span>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>

      {/* timeline section*/}
      <section className="bg-black text-white lg:p-16  p-5" id="timeline">
        <div className="px-12 border border-gray-900 py-12 mt-8 md:mt-10">
          <Tabs>
            <TabList className="text-center font-semibold text-lg font-libre mb-9">
              <Tab>Education</Tab>
              <Tab>Experiance</Tab>
            </TabList>

            <TabPanel>
              <div className="bg-black">
                <div className="max-w-4xl mx-auto p-8">
                  <div className="flow-root">
                    <ul className="-mb-8">
                      {portfolio.user?.timeline
                        .filter((item) => item.forEducation === true)
                        .map((item, index) => (
                          <li key={index}>
                            <div className="relative pb-8">
                              <span
                                className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                                aria-hidden="true"
                              ></span>
                              <div className="relative flex items-start space-x-3">
                                <div>
                                  <div className="relative px-1">
                                    <div className="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-white flex items-center justify-center">
                                      <svg
                                        className="text-white h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className="min-w-0 flex-1 py-0">
                                  <div className="text-md">
                                    <div>
                                      <div className="flex flex-col lg:flex-row justify-between lg:items-center space-y-3 lg:space-y-0">
                                        <a
                                          href="#"
                                          className="font-libre lg:text-2xl text-xl font-semibold mr-2"
                                        >
                                          {item.jobTitle}
                                        </a>
                                        <h2 className="font-libre text-xs font-semibold mr-2">
                                          <span>
                                            {formatDate(item.startDate)}
                                          </span>{" "}
                                          -{" "}
                                          <span>
                                            {formatDate(item.endDate)}
                                          </span>
                                        </h2>
                                      </div>
                                      <p className="font-libre text-base font-bold mr-2 lg:mt-0 mt-3">
                                        <span className="text-gray-400">
                                          {item.company_name}
                                        </span>{" "}
                                        <span>({item.jobLocation})</span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="mt-2">
                                    <p className="font-roboto">
                                      {item.summary}
                                    </p>
                                  </div>
                                  <div className="mt-2">
                                    <p className="font-roboto text-gray-400">
                                      {item.bulletPoints}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="bg-black">
                <div className="max-w-4xl mx-auto p-8">
                  <div className="flow-root">
                    <ul className="-mb-8">
                      {portfolio.user?.timeline
                        .filter((item) => item.forEducation === false)
                        .map((item, index) => (
                          <li key={index}>
                            <div className="relative pb-8">
                              <span
                                className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                                aria-hidden="true"
                              ></span>
                              <div className="relative flex items-start space-x-3">
                                <div>
                                  <div className="relative px-1">
                                    <div className="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-white flex items-center justify-center">
                                      <svg
                                        className="text-white h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className="min-w-0 flex-1 py-0">
                                  <div className="text-md">
                                    <div>
                                      <div className="flex flex-col lg:flex-row justify-between lg:items-center space-y-3 lg:space-y-0">
                                        <a
                                          href="#"
                                          className="font-libre lg:text-2xl text-xl font-semibold mr-2"
                                        >
                                          {item.jobTitle}
                                        </a>
                                        <h2 className="font-libre text-xs font-semibold mr-2">
                                          <span>
                                            {formatDate(item.startDate)}
                                          </span>{" "}
                                          -{" "}
                                          <span>
                                            {formatDate(item.endDate)}
                                          </span>
                                        </h2>
                                      </div>
                                      <p className="font-libre text-base font-bold mr-2 lg:mt-0 mt-3">
                                        <span className="text-gray-400">
                                          {item.company_name}
                                        </span>{" "}
                                        <span>({item.jobLocation})</span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="mt-2">
                                    <p className="font-roboto">
                                      {item.summary}
                                    </p>
                                  </div>
                                  <div className="mt-2">
                                    <p className="font-roboto text-gray-400">
                                      {item.bulletPoints}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>

          <div className="flex justify-center items-center mt-9">
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-14 px-8 py-0 text-base font-semibold text-center text-white no-underline align-middle transition-all duration-300 ease-in-out bg-transparent  bg-gray-950 hover:border-2 border-gray-950 border-2 hover:bg-black border-solid  cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
            >
              Download CV
              <IoMdDownload className="ml-2 mt-1" />
            </a>
          </div>
        </div>
      </section>

      {/* review section */}
      <div className="border-b-gray-900 border-b" id="reviews">
        <section className="bg-black text-white lg:p-16 p-5 py-24 px-10">
          <div className="slider-container md:mt-7">
            <Slider {...settings}>
              {portfolio.user?.testimonials.map((testimonial, index) => (
                <div key={index} className="mb-4 mt-12">
                  <h2 className="font-libre font-semibold lg:text-4xl text-xl">
                    " {testimonial.review} "
                  </h2>
                  <div className="flex justify-start items-center mt-6">
                    <img
                      className="w-48 lg:w-[500px]"
                      src={testimonial.image.url}
                      alt=""
                    />
                    <div className="">
                      <h2 className="font-libre">{testimonial.name}</h2>
                      <p className="text-slate-300 font-roboto">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>

      {/* contact section */}
      <section
        className="bg-black text-white lg:p-16 lg: p-5 py-26 mb-10 mt-3"
        id="contact"
      >
        <h2 className="font-libre font-semibold text-4xl lg:text-6xl mb-8  md:mt-10">
          Get In Touch
        </h2>

        <div className="flex justify-start flex-col lg:flex-row lg:gap-20 lg:items-center">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="flex flex-col lg:flex-row justify-start lg:w-1/2 "
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-4 w-full font-roboto"
            >
              <div>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  className="w-full border bg-black  border-gray-950 p-3 rounded-none"
                  required
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full border bg-black  border-gray-950 p-3 rounded-none"
                  required
                  placeholder="Email"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  value={message}
                  onChange={handleMessageChange}
                  className="w-full border  bg-black  border-gray-950 p-3 rounded-none h-40"
                  required
                  placeholder="Message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  href="#"
                  className="font-roboto w-full inline-flex items-center justify-center h-14 px-8 py-0 text-base font-semibold text-center text-white no-underline align-middle transition-all duration-300 ease-in-out bg-transparent  bg-gray-950 hover:border-2 border-gray-950 border-2 hover:bg-black border-solid  cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
                >
                  Get A Quote
                </button>
              </div>
            </form>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            className="flex flex-col justify-start space-y-16 mt-8 lg:mt-0 lg:w-1/2"
          >
            <div className="flex justify-center lg:justify-start items-center gap-4 border-b-gray-900 border-b pb-8 w-full">
              <h2>
                <FaPhoneVolume className="text-5xl" />
              </h2>
              <div>
                <h2 className="font-libre text-lg text-gray-300">
                  Phone Number
                </h2>
                <p className="font-libre text-lg text-gray-300">
                  {portfolio.user?.about.phoneNumber}
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start items-center gap-4 border-b-gray-900 border-b pb-8">
              <h2>
                <FaHouseUser className="text-5xl" />
              </h2>
              <div>
                <p className="font-libre text-lg text-gray-300">
                  {portfolio.user?.about.address}
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start items-center gap-4">
              <h2>
                <BsMailbox2Flag className="text-5xl" />
              </h2>
              <div>
                <h2 className="font-libre text-lg text-gray-300">Email</h2>
                <p className="font-libre text-lg text-gray-300">
                  {portfolio.user?.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}

      <footer className="footer flex items-center justify-between p-4 font-libre text-gray-300 bg-black  border-t border-t-gray-900">
        <aside className="items-center grid-flow-col">
          <p>Copyright & Design By John doe</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="#"
            onClick={() => scroll.scrollToTop({ smooth: true, duration: 500 })}
            className="inline-flex items-center justify-center p-4 rounded-full font-semibold text-center text-white no-underline align-middle transition-all duration-300 ease-in-out bg-transparent bg-gray-950 hover:border-2 border-gray-950 border-2 hover:bg-black border-solid cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
          >
            <FaArrowUp />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
