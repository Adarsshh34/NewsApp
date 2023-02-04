import React from 'react'

export default function NewsItem(props) {
  

  return (
    <>
    <div >
    <div className="my-3 neww" >
      {
      /* text-white bg-dark --
      bg-white text-white
      ${props.mode==="dark"?"text-white bg-dark":""}

      */
     
      }
      
      <div className={` card  ${props.mode}`}  style={{width: "18rem"}}>
        <img src={props.urlToImage} className="card-img-top" alt="image not available..."/>
        <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.url} target="_blank" className="btn btn-sm btn-primary">Read More</a>
       </div>
       </div>
     </div>
     </div>
</>
  )
}
