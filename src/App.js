import './index.css';
import Home from './Home'
import QuoteInpire from './QuoteInspire';
import QuoteJoke from './QuoteJoke';
import { Routes, Route }  from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  axios  from 'axios';
import FetchData from './hooks/FetchData';
//Maybe the best level  since will be moving api's about the place? 

function App() {

  const [selectedQuote, setSelectedQuote] = useState('')
  const { data } = FetchData() 
  console.log(data)

 //Could I make this into a hook?


  //Clean up this async function! Maybe turn this all into a hook?! -Definitely make into HOOKs gonna get messy, plus do I process the JSON here?


  return (
      <Routes>
        <Route  path='/' element={<Home
        selectedQuote={selectedQuote}
        setSelectedQuote={setSelectedQuote}
        />}/> 

        <Route path='/quote'>
          <Route element={<QuoteInpire
          />}/>
        </Route> 
      </Routes>
  );
}

export default App;
