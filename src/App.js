import './index.css';
import Home from './Home'
import QuotePage from './QuotePage';
import { Routes, Route }  from 'react-router-dom'
import { useState } from 'react';


//Maybe the best level  since will be moving api's about the place? 

function App() {

  const [selectQuote, setSelectQuote] = useState('')

 //Could I make this into a hook?


  //Clean up this async function! Maybe turn this all into a hook?! -Definitely make into HOOKs gonna get messy, plus do I process the JSON here?

  return (

      <Routes>

        <Route  path='/'element={<Home
        setSelectQuote={setSelectQuote}
          />}/>
  

        <Route path="/quote" index element={<QuotePage
        selectQuote={selectQuote}
        />}/>
      </Routes>
  );
}

export default App;
