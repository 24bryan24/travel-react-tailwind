import React from 'react'
import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'
import Maldives3 from '../assets/maldives3.jpg'
import KeyWest from '../assets/keywest.jpg'
import SelectsCard from './SelectsCard'

const Selects = () => {
  return (
    <div name="views" className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <SelectsCard image={BoraBora} location="Bora Bora" />
        <SelectsCard image={BoraBora2} location="Cozumel" />
        <SelectsCard image={Maldives} location="Maldives" />
        <SelectsCard image={Maldives2} location="Jamaica" />
        <SelectsCard image={KeyWest} location="Key West" />
        <SelectsCard image={Maldives3} location="Antigua" />
    </div>
  )
}

export default Selects