import React from 'react';

const News = ({author,title,description,url,img}) => {
    return (
        <div className="col s12 m4">
            <div className="card">
                <div className="card-image">
                    <img src={img} alt=""/>
                    <p className="card-title">{title}</p>  
                    <a href={url} target="_blank" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                </div>  
                <div className="card-content">
                    <p>{description}</p>    
                </div>  
            </div>
        </div>
    );
};

export default News;