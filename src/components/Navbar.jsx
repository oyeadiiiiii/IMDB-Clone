import React from 'react'
import Logo from '../download.png'
import {Link} from "react-router-dom"

export const Navbar = () => {
  return (
    <div className='flex border space-x-12 items-centre pl-3 py-4'>
        <img src={Logo} alt="" className='w-[50px]' />
        
        <Link to="/" className='text-blue-400 text-3xl font-bold'>Movies</Link>

        <Link to="/watchlist" className='text-blue-400 text-3xl font-bold'>WatchList</Link>

        </div>
  )
}
