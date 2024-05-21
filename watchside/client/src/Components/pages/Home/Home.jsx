import React from 'react'
import { HeroSections } from './Static/HeroSections'
import WatchList from './CRUD/Crud'

export const Home = () => {
  return (
   <div className='container'>
    <HeroSections/>
    <WatchList/>
   </div>
   
  )
}
