import React, { useEffect, useState } from "react";
import BlackCar from "../assets/blackcar.png";

const Card = (props) => {
  // const articles = [
  //   {
  //     source: {
  //       id: "google-news",
  //       name: "Google News",
  //     },
  //     author: "Deadline",
  //     title: "Alain Delon Dies: Iconic French Actor Was 88 - Deadline",
  //     description: null,
  //     url: "https://news.google.com/rss/articles/CBMifkFVX3lxTE1haUlrbnFhaGF2SmQ0cmYxQXRWZjlGZlZnWFB2TGdmc0N3TzZPVFRfNGhPZ1psWHNLZnREazBPNzRIeFl3R2NOcjBFMUV4aVJic1U2bTJfNUJIZG1VeUMtU09CaVh5c3BuX1ZuLTdlWlVVQzlzWlpGb1ZwbF9IZw?oc=5",
  //     urlToImage: null,
  //     publishedAt: "2024-08-18T07:08:00Z",
  //     content: null,
  //   },
  //   {
  //     source: {
  //       id: "google-news",
  //       name: "Google News",
  //     },
  //     author: "Bleacher Report",
  //     title:
  //       "Dricus Du Plessis Beat Israel Adesanya Physically and Mentally at UFC 305 - Bleacher Report",
  //     description: null,
  //     url: "https://news.google.com/rss/articles/CBMiugFBVV95cUxOc2Rud1pGNmMtVVhMMUl0cHJfOWcwcVNpX0tjV0VkRGtvb1I1RTAzTzV1OXR1YXUzOXdhMGdkdUJ2ajdGWGRwZEVWMkdWYzlRNG9sVkRRR3VDdjdWUy13Y2tROUsxZE5ZRGtQZW54aGxFQW9LclZzLUdtTkdXT2lkRUg3c0I5cjVwaWZwb0JYUTFBNU9jaEcydXBQdzM1N0dSOTUxQUJ0WmFaVjlka1pTYnVhRkdHS1B1OEHSAc8BQVVfeXFMT3NYVW1OVFRNa2hXaTJlQVk4TGh4SV9UX1hVdnJ5aUZTRzBmclJKWms5SDBlbUxreHpHVHpIbThJN0U0ZEUtT21aSDdjTUFtNEMtZXJKaFNETTFKSkh3cUdrVWZRM1pLQ1dTVWpEblU3dDNpdDRaNjBlamhzTjR5MWY3aW5xc245SzBJUzFMX0xTa1NWUk05bXBIRjd3VGlXMlVzT3R1T3A5RGQzOGMySkR6cDc0Zkg0RHFiWGo1bWJJdURkTnU5RGswUlBmX1BJ?oc=5",
  //     urlToImage: null,
  //     publishedAt: "2024-08-18T06:02:11Z",
  //     content: null,
  //   },
  // ];

  const [article, setArticle] = useState([]);
 

  const fetchData = async() => {
    let url =`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${props.apiKey}`;
    let data = await fetch(url)
    let parseDate =  await data.json()
    console.log(parseDate)
    setArticle(parseDate.articles)
  };

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className="container py-4">
      <div className="row">
        {article && article.map((e,index) => {
          return (
            <div className="col-md-3" key={index}>
              <div className="card">
                <img src={BlackCar} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{e.title}</h5>
                  <p className="card-text">{e.author}</p>
                  <a href={e.url} target="blank" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
