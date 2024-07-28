import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="sticky flex justify-between top-0 z-50 bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-start p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={() => {
            props.setQuery(null);
            document.getElementById("default-search").value = "";
          }}
        >
          {/* {`${props.setQuery(null)}`} */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white mr-8">
            NewzzApp
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
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
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 rounded ${
                  location.pathname === "/"
                    ? "text-blue-700 dark:text-blue-500"
                    : "text-gray-900 dark:text-white"
                } hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
                onClick={() => {
                  props.setQuery(null);
                  document.getElementById("default-search").value = "";
                }}
              >
                General
              </Link>
            </li>
            <li>
              <Link
                to="/business"
                className={`block py-2 px-3 rounded ${
                  location.pathname === "/business"
                    ? "text-blue-700 dark:text-blue-500"
                    : "text-gray-900 dark:text-white"
                } hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
                onClick={() => {
                  props.setQuery(null);
                  document.getElementById("default-search").value = "";
                }}
              >
                Business
              </Link>
            </li>
            <li>
              <Link
                to="/entertainment"
                className={`block py-2 px-3 rounded ${
                  location.pathname === "/entertainment"
                    ? "text-blue-700 dark:text-blue-500"
                    : "text-gray-900 dark:text-white"
                } hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
                onClick={() => {
                  props.setQuery(null);
                  document.getElementById("default-search").value = "";
                }}
              >
                Entertainment
              </Link>
            </li>
            <li>
              <Link
                to="/health"
                className={`block py-2 px-3 rounded ${
                  location.pathname === "/health"
                    ? "text-blue-700 dark:text-blue-500"
                    : "text-gray-900 dark:text-white"
                } hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
                onClick={() => {
                  props.setQuery(null);
                  document.getElementById("default-search").value = "";
                }}
              >
                Health
              </Link>
            </li>
            <li>
              <Link
                to="/science"
                className={`block py-2 px-3 rounded ${
                  location.pathname === "/science"
                    ? "text-blue-700 dark:text-blue-500"
                    : "text-gray-900 dark:text-white"
                } hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
                onClick={() => {
                  props.setQuery(null);
                  document.getElementById("default-search").value = "";
                }}
              >
                Science
              </Link>
            </li>
            <li>
              <Link
                to="/sports"
                className={`block py-2 px-3 rounded ${
                  location.pathname === "/sports"
                    ? "text-blue-700 dark:text-blue-500"
                    : "text-gray-900 dark:text-white"
                } hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
                onClick={() => {
                  props.setQuery(null);
                  document.getElementById("default-search").value = "";
                }}
              >
                Sports
              </Link>
            </li>
            <li>
              <Link
                to="/technology"
                className={`block py-2 px-3 rounded ${
                  location.pathname === "/technology"
                    ? "text-blue-700 dark:text-blue-500"
                    : "text-gray-900 dark:text-white"
                } hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
                onClick={() => {
                  props.setQuery(null);
                  document.getElementById("default-search").value = "";
                }}
              >
                Technology
              </Link>
            </li>
            <li className="relative">
              <button
                id="dropdownNavbarLink"
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Countries
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div
                  id="dropdownNavbar"
                  className="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownNavbarLink"
                  >
                    <li>
                      <button
                        className="container px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => {
                          props.setCountry("world");
                          setDropdownOpen(false);
                          props.setQuery(null);
                          document.getElementById("default-search").value = "";
                        }}
                      >
                        World News
                      </button>
                    </li>
                    <li></li>
                    <li>
                      <button
                        className="container px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => {
                          props.setCountry("in");
                          setDropdownOpen(false);
                          props.setQuery(null);
                          document.getElementById("default-search").value = "";
                        }}
                      >
                        India
                      </button>
                    </li>
                    <li>
                      <button
                        className="container px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => {
                          props.setCountry("us");
                          setDropdownOpen(false);
                          props.setQuery(null);
                          document.getElementById("default-search").value = "";
                        }}
                      >
                        US
                      </button>
                    </li>
                    <li>
                      <button
                        className="container px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => {
                          props.setCountry("gb");
                          setDropdownOpen(false);
                          props.setQuery(null);
                          document.getElementById("default-search").value = "";
                        }}
                      >
                        UK
                      </button>
                    </li>
                    <li>
                      <button
                        className="container px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => {
                          props.setCountry("jp");
                          setDropdownOpen(false);
                          props.setQuery(null);
                          document.getElementById("default-search").value = "";
                        }}
                      >
                        Japan
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="m-5">
        <div className="max-w-xl mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className=" relative min-w-72">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Topics"
              required
            />
            <Link
              to="/search"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {
                var q = document.getElementById("default-search").value;
                props.setQuery(q);
              }}
            >
              Search
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
