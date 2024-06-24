import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ArticleCard from './components/Molecules/Card';
import defImg from './assets/images/default.png'
import Navbar from './components/Organisms/Navbar';
import Main from './components/SuperOrganisms/Main';
import Insp from './components/SuperOrganisms/insp';
import Des from './components/SuperOrganisms/des';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
            <Route index path='/' element={<Main />} />
            <Route index path='/insp' element={<Insp />} />
            <Route index path='/des' element={<Des />} />
            <Route index path='/' element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
};


export default App;
