import React from "react";
// import '../styles/home.css'
function Home() {
  return (
   <div className="home-container" style={{background:"url('/assests/bckg2.jpg')", backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh", backgroundRepeat: "no-repeat"}}>
    <div>
    <h1>Welcome Msafiri</h1>
    <h3>Traveling Adventure</h3>
    <p>We endeavour to make your traveling plans blissful and memorable</p>
   </div>
  </div>
  );
}
export default Home