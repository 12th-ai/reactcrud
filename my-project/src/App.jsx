import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Insert from './Insert'

import Userlist from './userlist';

function App() {
  return (
    <div>
      <h1>welcome to my challenge</h1>



      <Router>
        <div>
          <Routes>
            <Route path="/userlist" element={<Userlist />} />
          </Routes>
        </div>
        <Insert />
      </Router>
    </div>
  );
}

export default App;
