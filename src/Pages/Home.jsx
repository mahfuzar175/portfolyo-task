import { FaArrowRightLong } from "react-icons/fa6";
const Home = () => {
  return (
    <div>
      {/* navbar */}
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
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal font-roboto text-base">
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
              className="inline-flex items-center justify-center h-14 px-8 py-0 text-base font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid  cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
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
    </div>
  );
};

export default Home;
