import { useState } from "react";
import { Outlet } from "react-router-dom";
import logo from '../assets/logo.svg';  // Import the logo image

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <nav className="bg-blue-700 border-gray-200 dark:bg-blue-900 shadow-lg"> 
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src={logo}  // Use the imported logo here
                className="h-16 w-auto" // Increased size for better visibility
                alt="Logo"
              />
            </a>
            <button
              onClick={toggleDropdown}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="/"
                    className="block py-3 px-4 text-white bg-blue-700 rounded-md md:bg-transparent md:text-white md:p-0 hover:text-blue-300"
                 
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/login"
                    className="block py-3 px-4 text-white rounded-md hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="/register"
                    className="block py-3 px-4 text-white rounded-md hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0"
                  >
                    register
                  </a>
                </li>
                <li>
                  <a
                    href="/users"
                    className="block py-3 px-4 text-white rounded-md hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0"
                  >
                    Users
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-3 px-4 text-white rounded-md hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        
        <Outlet />
      </main>
      <footer className="text-center py-4 bg-gray-800 text-white">&copy; 2025 Your Company</footer>
    </>
  );
}
