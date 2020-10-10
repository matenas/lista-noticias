import React from 'react';
import News from './News';

const ListNews = ({results}) => {
    return (
        <div className="row">
            {
                results.map( (result) => {

                    return ( 
                        <News 
                            key={result.url}
                            author={result.author}
                            title={result.title}
                            description={result.description}
                            url={result.url}
                            img={result.urlToImage}
                        ></News> 
                    )
                } )

            }
        </div>
    );
};

export default ListNews;