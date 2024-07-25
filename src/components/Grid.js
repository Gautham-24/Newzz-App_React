import React, { useEffect, useState } from 'react'
import Card from './Card';
export default function Grid(props) {
    const [articles,setArticles] = useState([]);
    const [totalResults,setTotalResults] = useState(0);
    const [page,setPage] = useState(1);
    const update = async ()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
      let data = await fetch(url);
      let parsedData = await data.json()
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
    }

    useEffect(() => {
      update(); 
    }, [page])

    const prev = ()=>{
      if (page > 1) {  
        setPage(page - 1);  
      }  
    }

    const next = ()=>{
      if (page < Math.ceil(totalResults / props.pageSize)) {  
        setPage(page + 1);  
      }  
    }
  return (

    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-2">
        {articles.map((element)=>{
            return<div  key={element.url}>
            <Card title={element.title} desc={element.description} img={element.urlToImage} source={element.url}/>
            </div>        
        })}
         </div>
         <div className="flex justify-between mx-5">
         <button type="button" onClick={prev} disabled={page===1} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Previous</button>
         <button type="button" onClick={next} disabled={page>=Math.ceil(totalResults/props.pageSize)} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Next</button>
          </div>
    </div>
  )
}
