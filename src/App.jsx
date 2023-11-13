import { useEffect, useState } from 'react'

import './App.css'
import data from './assets/datamenfesss.json'

function App() { 
  let y;
  const readSheets=(a, type) => {
    fetch('https://sheetdb.io/api/v1/r9a7vievl7zie')
    .then((response) => response.json())
    .then((data) => y)
    .then(console.log(y));
    };


  const [count, setCount] = useState(1)
  const handleCounter2 = () => {
    setCount(count - 1);
  }
  const handlecounter1 = () => {
    setCount(count + 1)
  }
  let counter = 1;
  
  return (
    <div className='wrapper' onLoad={readSheets(count)}>
      <p className='title'>
        
        💌 CS UI 2023 MENFESS 💌
      </p>
      <p id='counter-top'>Entry: {count} / {data.length - 1}</p>
      <div className='main-box'>
        <button className='button-swipe' onClick={handleCounter2} id='left'>
            ⬅️
        </button>
        <div className='center'>
          <div className='from-to'>From: {data[count - 1]['From']}</div>
          <div className='from-to'>To: {data[count - 1]['To']}</div>
          {data[count - 1]['Type your Message here']}
        </div>
        <button className='button-swipe' onClick={handlecounter1} id='right'>
          ➡️
        </button>
      </div>

    </div>
  )
}

export default App
