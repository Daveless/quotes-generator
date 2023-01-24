import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './db/quotes.json'
import QuoteBox from './components/QuoteBox'
import db from './db/quotes.json'

function App() {
  const getRandom = (array) =>{
      return Math.floor(Math.random()* array.length)
  }

  const colors = ['red', 'blue', 'yellow', 'green', 'pink', 'purple', 'brown', 'black', 'white']

  const [quote, setquote] = useState(getRandom(db))
  const [color, setcolor] = useState(colors[0]) 
    let nextColor = getRandom(colors)


  const newQuote = () => {
      setquote(getRandom(db));
      
      do{
        nextColor = getRandom(colors)
      } while (color===colors[nextColor])
      console.log(color, colors[nextColor])
      setcolor(colors[nextColor])
  }

  return (
    <div className={`App ${color}`}>
     <QuoteBox quote={quote} color={color} newQuote={newQuote}></QuoteBox>
    </div>
  )
}

export default App