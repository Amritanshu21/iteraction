// import React from 'react'
// import Navbar from './components/Navbar';
// import Landinpage from './components/Landinpage';
// import Marque from './components/Marque';
// import About from './components/About';
// import Eyes from './components/Eyes';
// import Featured from './components/Featured';
// import Cards from './components/Cards';
// import Footer from './components/Footer';
// import LocomotiveScroll from 'locomotive-scroll';


// function App() {
  

// const locomotiveScroll = new LocomotiveScroll();

//   return (
//     <div className='w-full min-h-screen text-white bg-zinc-900'>

//       <Navbar/>
//       <Landinpage/>
//      <Marque/>
//      <About/>
//      <Eyes/>
//      <Featured/>
//      <Cards/>
//      <Footer/>
//     </div>
//   )
// }

// export default App



// src/App.js
import React from 'react';
import './App.css';

import MainContent from './components/MainContent';
import About from './components/About'
import Statistics from './components/Statistics';
import Services from './components/Services';
import Header from './components/Header';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Form from './components/Form';



function App() { 
  return (
    <div className="App">

      <MainContent />
      <Statistics />
      <About/>
    <Services/>
    <Header />
    <Features/>
    <Testimonials/>
    <Form/>
    </div>
  );
}

export default App;
