import React from 'react'
import useHook from './useHook';
import NewsItem from './NewsItem';
import Buffering from './Buffering';

export default function Technology(props) {
    const [data] = useHook(
        "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1505482c8f0d424da340f61664b499d8"
      );
    //   https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=1505482c8f0d424da340f61664b499d8

    //   console.log(data.articles);
  return (
    <>
        {/* <h2 className='headline'>Technology - Headlines</h2> */}
        {
            // console.log(data.articles);
            data.articles===undefined? <div className="spinner"> <Buffering/>  Loading.... </div>:
            data.articles.map((element,index)=>{
                return(
                    <>
                        <div >

                            <NewsItem index={index}  title={element.title} urlToImage={element.urlToImage} mode={props.mode} description={element.description} url={element.url}/>
                            
                           
                        
                        </div>
                    </>
                )
            })
        }      
    </>
  )
}
