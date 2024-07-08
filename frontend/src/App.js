import React from 'react';
import './App.css';
// import './index.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Home} from './Pages/Home';
import {Shop} from './Pages/Shop';
import {About} from './Pages/About';
import {Contact} from './Pages/Contact';
import {Cart} from './Pages/Cart';
import {LoginSignUp} from './Pages/LoginSignUp';
import { Footer } from './Components/Footer/Footer';
import { Newsletter } from './Components/Newsletter/Newsletter';
import Product from './Pages/Product';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<LoginSignUp/>}/>
        <Route path='/Product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
      </Routes>
      <Newsletter/>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;
