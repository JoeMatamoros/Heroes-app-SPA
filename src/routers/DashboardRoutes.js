import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { DcScreen } from '../components/dc/DcScreen';
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Hero } from '../components/hero/HeroScreen';

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className='container'>
            <Routes>
                <Route path="marvel" element={<MarvelScreen />} />
                <Route path="dc" element={<DcScreen />} />
                <Route path="search" element={<SearchScreen />} />
                <Route path='hero/:heroeId' element={<Hero/>}/>
                <Route path="/" element={<MarvelScreen />} />
          </Routes>
        </div>
    </>
  )
}
