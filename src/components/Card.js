import React from "react";

export default function Card(props) {
  const d = Math.floor(
    (new Date().getTime() - new Date(props.date).getTime()) /
      (24 * 60 * 60 * 1000)
  );

  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 flex flex-col">
      <div>
        <img
          className="rounded-t-lg w-full h-48"
          src={props.img ? props.img : "news.jpg"}
          alt="img"
        />
      </div>
      <div className="p-3 flex flex-col flex-grow">
        <div>
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title ? props.title : "---NA---"}
          </h5>
        </div>
        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 flex-grow">
          {props.desc ? props.desc : "---NA---  "}
        </p>
        <p className="text-gray-500 text-xs my-2">
          By: {props.author ? props.author : props.src}
        </p>
        <div className="my-2">
          <span class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
            <svg
              class="w-2.5 h-2.5 me-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
            </svg>
            {d} {d > 1 ? "days" : "day"} ago
          </span>
        </div>
        <div className="mt-auto">
          <a
            href={props.source}
            target="_blank"
            className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
