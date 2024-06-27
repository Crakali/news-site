import axios from 'axios'
import React, {useState,useEffect} from 'react'


function App() {
  const [news,setNews] = useState([])
  useEffect(()=>{
axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616")
.then((res)=>{
  console.log(res.data.articles);
  setNews(res.data.articles)
})
  },[])
  return (
    <>
   <div className='container'>
    <div className='row text-center'>
      {
        news.map((val)=>{
          return (
            <div className='col my-5'>
      <div className="card" style={{width: "18rem"}}>
  <img src={val.urlToImage} className="card-img-top" alt="..."/>
  <div classNameName="card-body">
    <h5 className="card-title">{val.title}</h5>
    <p className="card-text">{val.description}</p>
    <span><button href={val.Url} className="btn btn-primary" target="_blank">
   <a href={val.Url}>link</a>  
    </button></span>
    {/* <a href={val.Url}
                        target="_blank"
                        className="btn btn-primary btn-sm">
                        Read More
                    </a> */}
  </div>
</div>
      </div>
          )
        })
      }
    </div>

   </div>
    </>
  )
}

export default App