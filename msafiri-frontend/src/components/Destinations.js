import React from 'react'
import DestinationCard from './DestinationCard'
import '../styles/destinations.css'
function Destinations({destinations, setmyDestinations, myDestinations}) {
  return (
    <div className='destinations-card-display'>
        {
        destinations.map((dest, index)=>{
            return <DestinationCard place = {dest.place} image = {dest.image} event = {dest.event} date = {dest.date} time = {dest.time}  setmyDestinations = {setmyDestinations} id = {dest.id} showAdd = {true} myDestinations = {myDestinations}/>
        })
        }</div>
  )
}
export default Destinations