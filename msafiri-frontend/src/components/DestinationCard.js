import React from 'react'
import  "../styles/destinationCard.css"
function DestinationCard({place, image, date, event, time, id, setmyDestinations, showAdd, myDestinations}) {
    // const date = new Date().toDateString();
function handleDestination (){
    fetch(" http://localhost:8000/user_destinations",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
              },
              body: JSON.stringify({
                destination_id: id
              })
    }).then(resp => resp.json())
    .then(dest=> {
      setmyDestinations(dest)
    })
}
if(myDestinations){
if (myDestinations.find(dest=>dest.place === place)){
  showAdd = false
}
}
  return (
    <div className='destination-card'>
        <div className='destination-card-image'>
            <img src={image} />
        </div>
        <div className='destination-description'>
            <p>{place}</p>
            <p>{date}</p>
            <p>{event}</p>
            {showAdd? <button className='add-btn' onClick={handleDestination} >add destination</button>: null}
        </div>
    </div>
  )
}
export default DestinationCard