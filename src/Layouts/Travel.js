import React from 'react'
import '../styles/Navbar.css'
import travelicon1 from '../icon/travel-icon.png'
import travelicon2 from '../icon/travel-icon2.png'
import travelicon3 from '../icon/travel-icon3.png'
import travelicon4 from '../icon/travel-icon4.png'





function Travel() {
    return (
        <div>
            {/*  <!-- traveling --> */}
      <div id="travel" class="traveling">
         <div class="container">
            <div class="row">
               <div class="col-md-12 ">
                  <div class="titlepage">
                     <h2>Select Offers For Traveling</h2>
                     <span>Explore the world and become your own tour guide</span> 
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div class="traveling-box">
                     <i><img src={travelicon1} alt="icon"/></i>
                     <h3>Different Countrys</h3>
                     <p> Low-cost travel </p>
                     <div class="read-more">
                        <a  href="#">Read More</a>
                     </div>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div class="traveling-box">
                     <i><img src={travelicon2} alt="icon"/></i>
                     <h3>Mountains Tours</h3>
                     <p>Let us book your tour 👌 </p>
                     <div class="read-more">
                        <a  href="#">Read More</a>
                     </div>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div class="traveling-box">
                     <i><img src={travelicon3} alt="icon"/></i>
                     <h3>Bus Tours</h3>
                     <p>Travel is a human necessity ✈️</p>
                     <div class="read-more">
                        <a  href="#">Read More</a>
                     </div>
                  </div>
               </div>
               <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div class="traveling-box">
                     <i><img src={travelicon4} alt="icon"/></i>
                     <h3>Summer Rest</h3>
                     <p> Fly the friendly skies with us</p>
                     <div class="read-more">
                        <a  href="#">Read More</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- end traveling --> */}
     
        </div>
    )
}

export default Travel
