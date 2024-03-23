import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Home = () => {
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
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
      <section className="bg-black text-white lg:p-16 p-5">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:text-left text-center gap-8">
            <div className="w-1/2 space-y-6">
                <h1 className="font-libre font-semibold xl:text-8xl lg:text-6xl text-4xl">{portfolio.user?.about.title}</h1>
                <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-0 gap-5">
                <a
              href="#"
              className="inline-flex items-center justify-center h-14 px-8 py-0 text-base font-semibold text-center text-white no-underline align-middle transition-all duration-300 ease-in-out bg-transparent  bg-gray-950 hover:border-2 border-gray-950 border-2 hover:bg-black border-solid  cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
            >
              Contact
              <FaArrowRightLong className="ml-2 mt-1" />
            </a><p className="ml-5 xl:font-extrabold xl:text-base">{portfolio.user?.about.subTitle}</p>
                </div>
            </div>
            <div>
                <img className="xl:w-96 lg:w-80 w-auto rounded-full" src={portfolio.user?.about.avatar.url} alt="" />
            </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
