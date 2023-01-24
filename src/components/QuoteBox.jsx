import React, { useState } from 'react'
import db from '../db/quotes.json'
import Button from './Button'

const QuoteBox = ({quote, newQuote}) => {

    
    

  return (
    <div className='quoteBox'>
        <div className="textBox">
        <i class='bx bxs-quote-left'></i>
        <p>{db[quote].quote}</p>
        </div>
        <p className='author'>{db[quote].author}</p>
        <Button newQuote={newQuote}></Button>
    </div>
  )
}

export default QuoteBox