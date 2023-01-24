import React from 'react'

const Button = ({newQuote}) => {


  return (
    <button onClick={newQuote}><i class='bx bx-chevron-right'></i></button>
  )
}

export default Button