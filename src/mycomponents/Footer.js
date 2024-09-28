import React from 'react'

export default function footer() {
    let footerstyle ={
        position:"absolute",
        top:"250vh",
        width:"100%"
    }
  return (
    <footer className='bg-dark text-light py-3 ' style={footerstyle}>
        <p className='text-center '>
             &copy;2023 Copyright: piyush'sPortfolio.com
        </p>

    </footer>
  )
}
