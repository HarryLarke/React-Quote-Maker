import './index.css';
import Home from './Home'
import Quote from './Quote';
import { Routes, Route, BrowserRouter as Router }  from 'react-router-dom'
import { useEffect, useState } from 'react';


//Maybe the best level  since will be moving api's about the place? 

function App() {

  const [selectedQuote, setSelectedQuote] = useState('')



 //Could I make this into a hook?


  //Clean up this async function! Maybe turn this all into a hook?! -Definitely make into HOOKs gonna get messy, plus do I process the JSON here?

  return (

      <Routes>

        <Route  path='/'element={<Home
          selectedQuote={selectedQuote}
          setSelectedQuote={setSelectedQuote}
          />}/>
  

        <Route path="/quote" index element={<Quote
        selectedQuote={selectedQuote} 
        />}/>
      </Routes>
  );
}

export default App;
