import { useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.scss'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Parallax from './components/Parallax'
import Test from './components/Test'
const App = () => {
  const [isShow, setShow] = useState(true);
  setTimeout(() => {
    setShow(false);
    console.log('disappear')
  }, 3000);
  return (

    <React.Fragment>
      {isShow ?
        <div><Test /></div> : (
          <div>
            <section id="HomePage"><Navbar /><Hero /></section>
           <section><Parallax /></section>
            <section id='Portfolio' style={{ height: 'fit-content' }}><Portfolio /></section>
            <section id='Contact' ><Contact /></section>
          </div>)
        }       
        
    </React.Fragment>
  )



}
export default App;