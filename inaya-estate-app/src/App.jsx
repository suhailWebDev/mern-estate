import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Profile from './Components/Profile'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import Services from './Components/Services'
import Footer from './Components/Footer'
import CommunityDetails from './Components/CommunityDetails'
import Communities from './Components/Communities'
import Blogs from './Components/Blogs'
import BlogDetails from './Components/BlogDetails'
import CreateListing from './Components/CreateListing'
import PropertyDetails from './Components/PropertyDetails'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path="/community/:id" element={<CommunityDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/createlisting" element={<CreateListing  />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App

