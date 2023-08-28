import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

function Adarsh() {
    const [newsData, setNewsData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            const options = {
                method: 'GET',
                url: 'https://news-api14.p.rapidapi.com/top-headlines',
                params: {
                    country: 'us',
                    language: 'en',
                    pageSize: '10',
                    category: 'sports'
                },
                headers: {
                    'X-RapidAPI-Key': '3a840bf084msh5437b55f834ae5dp1a2796jsn88a683a68ef3',
                    'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setNewsData(response.data.articles);
            } catch (error) {
                if (error.response && error.response.status === 429) {
                    // Implement a backoff strategy here
                    console.log('Rate limited. Retrying after a delay...');
                    setTimeout(fetchNews, 5000); // Retry after 5 seconds
                } else {
                    setError('An error occurred while fetching news.');
                }
            }
        };

        fetchNews();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Top Sports News</h1>
            <ul>
                {newsData.map((element, index) => (
                    // <li key={index}>{article.title}</li>
                    <NewsItem index={index} title={element.title}  />
                ))}
            </ul>
        </div>
    );
}

export default Adarsh;

// {
//     // console.log(data.articles);
//     data.articles === undefined ? <div className="spinner"> <Buffering />  Loading.... </div> :
//         data.articles.map((element, index) => {
//             return (
//                 <>
//                     <div >

//                         <NewsItem index={index} title={element.title} urlToImage={element.urlToImage} mode={props.mode} description={element.description} url={element.url} />



//                     </div>

                    
//                 </>
//             )
//         })
// }
