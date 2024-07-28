import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loading from "./Loading";

export default function Grid(props) {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  let country;
  switch (props.country) {
    case "in":
      country = "India";
      break;
    case "us":
      country = "USA";
      break;
    case "gb":
      country = "UK";
      break;
    case "jp":
      country = "Japan";
      break;
    default:
      country = "The World";
      break;
  }
  var apiUrl;
  if (props.query) {
    console.log(props.query);
    apiUrl = `https://newsapi.org/v2/top-headlines?q=${props.query}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
  } else {
    apiUrl =
      props.country === "world"
        ? `https://newsapi.org/v2/top-headlines?category=${props.category}&language=en&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        : `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
  }
  const update = async () => {
    setLoading(true);
    const url = apiUrl;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    update();
  }, [page]);

  const prev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const next = () => {
    if (page < Math.ceil(totalResults / props.pageSize)) {
      setPage(page + 1);
    }
  };

  const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 class="my-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {" "}
            {!props.query &&
              `Newzz - Top ${
                props.category === "general" ? "" : capitalize(props.category)
              } News In ${country}`}
          </h1>
          <h1 className="text-5xl text-center font-mono my-2"></h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-2">
            {articles.map((element) => {
              return (
                <div key={element.url}>
                  <Card
                    title={element.title}
                    desc={element.description}
                    img={element.urlToImage}
                    source={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    src={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-between mx-5">
            <button
              type="button"
              onClick={prev}
              disabled={page === 1}
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={next}
              disabled={page >= Math.ceil(totalResults / props.pageSize)}
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
