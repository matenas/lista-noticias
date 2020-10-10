import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ListNews from './components/ListNews';

function App() {

  //definir categoria y noticias
  const [category, setCategory] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {

    const urlAPI = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=01c466cdda0f444598dd2c85418f9bc1`;
    fetch(urlAPI)
      .then(response => response.json())
      .then(result => setResults(result.articles) )

  }, [category] );

  return (
    <Fragment>
      <Header
        titulo = "Lista de noticias"
      ></Header>
      <div className="container white">
        <Form
          setCategory={setCategory}
        ></Form>
        <ListNews
          results={results}
        ></ListNews>
      </div>
    </Fragment>
  );
}

export default App;
