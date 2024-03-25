

const j = () => {
    return (
        <div>
            {/* services section */}
      <section
        className="bg-black text-white lg:p-16 p-5 py-24 px-10"
        id="services"
      >
        <h2 className="font-libre text-4xl font-semibold mb-6 lg:px-16 px-0">
          My services
        </h2>
        <div className="flex flex-col">
          {portfolio.user?.services.map((service, index) => (
            <div
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
          <div className="space-y-8 lg:w-1/2">
            <div className="space-y-8">
              <h2 className="font-libre text-4xl">My Skills</h2>
              <p className="font-roboto">{portfolio.user?.about.subTitle}</p>
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
      </section>

      {/* projects section */}
      <div className="border-b-gray-900 border-b" id="projects">
        <section className="bg-black text-white lg:p-16 p-5 py-26">
          <h2 className="font-libre font-semibold text-4xl mb-8">
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
                      href="#"
                      className="inline-flex items-center justify-center h-14 px-8 py-0 text-base font-semibold text-center text-white no-underline align-middle transition-all duration-300 ease-in-out hover:bg-transparent  hover:border-2 bg-black border-black border-2  border-solid  cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
                    >
                      View Code
                      <FaGithub className="ml-2 mt-1" />
                    </a>
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
        <div className="px-12 border border-gray-900 py-12 mt-8">
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
          <div className="slider-container">
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
        <h2 className="font-libre font-semibold text-4xl lg:text-6xl mb-8">
          Get In Touch
        </h2>

        <div className="flex justify-start flex-col lg:flex-row lg:gap-20 lg:items-center">
          <div className="flex flex-col lg:flex-row justify-start lg:w-1/2 ">
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
          <div className="flex flex-col justify-start space-y-16 mt-8 lg:mt-0 lg:w-1/2">
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
        </div>
    );
};

export default j;