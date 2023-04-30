import { Suspense, lazy, useEffect, useState } from 'react'
import Navbar from './components/Nav'
import Banner from './components/Banner'
import Content from './components/Content'
import Footer from './components/Footer'
import './assets/css/style.css'
import { Outlet } from 'react-router-dom'

// const Navbar = lazy(() => import('./components/Nav'))

function App() {

  return (
    <>
      <Suspense fallback={<div className='banner'></div>}>
        <Navbar/>
        <Banner/>
        <main>
            <section className='container'>
              <Outlet/>
            </section>
        </main>
        <Footer/>
      </Suspense>
    </>
  )
}

export default App
