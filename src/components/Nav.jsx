import { lazy, useEffect, useState } from 'react'

function Navbar(){
    const [navbar, setNavbar] = useState(false)
  
    useEffect(() => {
      function changeNavbar(){
        setNavbar(window.scrollY > 300)
      }
  
      window.addEventListener("scroll", changeNavbar)
  
      return () => {
        window.removeEventListener("scroll", changeNavbar)
      }
    }, [])

    return (
      <header className={navbar ? 'active' : 'none'}>
        <nav>
          <div className='nav-left'>
            <a className='nav-brand' href='/'><h2>Yuk Pilih</h2></a>
            <a className='nav-link active' href='/'>Home</a>
            <a className='nav-link' href='/'>Search</a>
          </div>
          <div className='nav-right'>
            <a className='nav-link show' href='/login'>Login</a>
            <a className='nav-link btn' href='/signup'>Sign Up</a>
          </div>
        </nav>
      </header>
    )
}

export default Navbar