import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NewRules = () => {
  return (
    <>
    <div>This are the new rules</div>
    <nav>
        <Link to='old'>old news</Link>
        <Link to='new'>New news</Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default NewRules