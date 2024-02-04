import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import FormComponent from './Components/FormComponent';

export default function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<FormComponent />} />
      </Routes>
     </Router>
  );
};
