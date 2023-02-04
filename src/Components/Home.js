import React from 'react'
import NewsItem from './NewsItem';
import useHook from './useHook';
import Buffering from './Buffering';

export default function Home(props) {
    const [data] = useHook(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=1505482c8f0d424da340f61664b499d8"
      ); 
  return (
    <>
        {
            
            data.articles===undefined? <div className="spinner"> <Buffering/>  Loading.... </div>:
            data.articles.map((element,index)=>{
                return(
                    <>
                        <div >
                        
                            <NewsItem index={index}  title={element.title} urlToImage={element.urlToImage} description={element.description } url={element.url} mode={props.mode} />    
                        </div>
                    </>
                )
            })
        }    
    </>
  )
}
