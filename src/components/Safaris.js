
import React from 'react'
import DestinationCard from './DestinationCard'
function Safaris({myDestinations}) {
  return (
    <div className='destinations-card-display'>
        {myDestinations.map((dest, index) =>{
            return <DestinationCard  place = {dest.place} image = {dest.image} id={dest.id} date = {dest.date} key = {index} showAdd = {false} />
        } )}
    </div>
  )
}
export default Safaris