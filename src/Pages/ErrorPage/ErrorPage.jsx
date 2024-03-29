import { MdSettingsBackupRestore } from "react-icons/md";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
      <div className="grid h-screen px-4 bg-black place-content-center">
        <div className="text-center">
          <h1 className="font-black text-gray-200 text-9xl">404</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-500 sm:text-4xl">
            Uh-oh!
          </p>

          <p className="mt-4 text-gray-300 font-medium mb-4">We can't find that page.</p>

          <Link
              to="/"
              smooth={true}
              duration={500}
              className="inline-flex items-center justify-center h-14 px-8 py-0 text-base font-semibold text-center text-white no-underline align-middle transition-all duration-300 ease-in-out bg-transparent  bg-gray-950 hover:border-2 border-gray-950 border-2 hover:bg-black border-solid  cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
            >
              Go Back Home
              <MdSettingsBackupRestore className="ml-2 mt-1 text-2xl" />
            </Link>
        </div>
      </div>
    </div>
    );
};

export default ErrorPage;