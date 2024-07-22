import React, { useState } from 'react'
import Card from './Card';
export default function Grid() {
    const articles = [
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": "ABC News",
        "title": "Election 2024 updates: Democrats say they've raised $46.7M: 'Biggest fundraising day of the 2024 cycle' - ABC News",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiUmh0dHBzOi8vYWJjbmV3cy5nby5jb20vUG9saXRpY3MvbGl2ZS11cGRhdGVzL2JpZGVuLWRyb3BzLW91dC11cGRhdGVzLz9pZD0xMTIxMTMyODnSAVZodHRwczovL2FiY25ld3MuZ28uY29tL2FtcC9Qb2xpdGljcy9saXZlLXVwZGF0ZXMvYmlkZW4tZHJvcHMtb3V0LXVwZGF0ZXMvP2lkPTExMjExMzI4OQ?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-07-22T05:55:00Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "Kotaku"
        },
        "author": "Claire Jackson",
        "title": "Asus’ Steam Deck Competitor Just Got An Excellent Upgrade - Kotaku",
        "description": "The Ally X is an awesome piece of gaming hardware with an operating system that frustratingly gets in the way",
        "url": "https://kotaku.com/asus-ally-x-review-steam-deck-sd-card-battery-windows-1851600340",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/0fe87001bc0b0085102674663449bb14.jpg",
        "publishedAt": "2024-07-22T05:00:00Z",
        "content": "For the last couple of years, PC gaming has sought to escape the rigid confines of its electric-outlet bound, RGB-coated monolithic towers with fast framerates at massive resolutions for something a … [+13935 chars]"
        },
        {
        "source": {
        "id": "cbs-news",
        "name": "CBS News"
        },
        "author": "Melissa Quinn, Kathryn Watson, Caitlin Yilek",
        "title": "Live Updates: Biden drops out and endorses Kamala Harris, upending 2024 presidential race against Trump - CBS News",
        "description": "President Biden announced Sunday he is dropping his reelection bid in the 2024 presidential race and endorsing Vice President Kamala Harris.",
        "url": "https://www.cbsnews.com/live-updates/biden-drops-out-2024-presidential-race/",
        "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2024/07/21/4c650601-4dcd-4af1-a884-22ed2587cf79/thumbnail/1200x630g2/741f9406b54cccf5b1c2b2ec732aae8b/gettyimages-2161415763.jpg?v=5710b2ed1cee1bdfd30cb9c02455b43d",
        "publishedAt": "2024-07-22T03:56:45Z",
        "content": "Harris' team has begun calling Democratic delegates to ask them to back her for the nomination, one delegate told CBS News, though many had not received calls from either Biden's or Harris' teams by … [+1903 chars]"
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": "Yahoo Finance",
        "title": "Xi Vows to Rewire China’s Finances, Help Indebted Regions - Yahoo Finance",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiSGh0dHBzOi8vZmluYW5jZS55YWhvby5jb20vbmV3cy94aS12b3dzLXRheC1yZWZvcm0taW1wcm92ZS0wOTM5MTc5MjkuaHRtbNIBAA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-07-22T03:44:00Z",
        "content": null
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": "DW (English)",
        "title": "Germany issues advisory against travel to Bangladesh - DW (English)",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiVWh0dHBzOi8vd3d3LmR3LmNvbS9lbi9nZXJtYW55LWlzc3Vlcy1hZHZpc29yeS1hZ2FpbnN0LXRyYXZlbC10by1iYW5nbGFkZXNoL2EtNjk3Mjc1NzbSAVVodHRwczovL2FtcC5kdy5jb20vZW4vZ2VybWFueS1pc3N1ZXMtYWR2aXNvcnktYWdhaW5zdC10cmF2ZWwtdG8tYmFuZ2xhZGVzaC9hLTY5NzI3NTc2?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-07-22T03:19:23Z",
        "content": null
        },
    ]
    
  return (

    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-2">
        {articles.map((element)=>{
            return<div  key={element.url}>
            <Card title={element.title} desc={element.description} img={element.urlToImage} source={element.url}/>
            </div>
                

           
        })}
         </div>
    </div>
  )
}
