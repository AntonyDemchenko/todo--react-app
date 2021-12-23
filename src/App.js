import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import PropagateLoader from "react-spinners/PropagateLoader";
import { css, jsx } from '@emotion/react';
import Loading from './Loading/Loading';
import Header from './Header/Header';
import Todos from './Todos/Todos';
import Done from './Done/Done';
import Notes from './Notes/Notes';

import { Routes, Route, Link } from 'react-router-dom';

const headerData = {
  nav: [
    { "link": "/", "text": "Todos" },
    { "link": "/done", "text": "Done" },
    { "link": "/notes", "text": "Notes" }
  ]
}

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, []);

  return (

    <div className="App">
      {loading ?
        <Loading />

        :
        // <h1>Hello World!</h1>
        <div className='container'>
          <Header data={headerData} />


          <Routes>
            <Route path="/" exact element={<Todos />} ></Route>
            <Route path="/done" element={<Done />} ></Route>
            <Route path="/notes" element={<Notes />} ></Route>
          </Routes>


        </div>

      }


    </div>
  );
}

export default App;
