import React from 'react'
import '../styles/Navbar.css'
import plane from '../images/plane.png'
function About() {
    return (
        <div>
           {/*  <!-- about --> */}
      <div id="about" class="about">
         <div class="container">
            <div class="row">
               <div class="col-md-12 ">
                  <div class="titlepage">
                     <h2>About  our travel agency</h2>
                     <span> . “A journey of a thousand miles begins with a single step” </span>
                  </div>
               </div>
            </div>
         </div>
         <div class="bg">
            <div class="container">
               <div class="row">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                     <div class="about-box">
                        <p> <span>
                        We're Soocial, a leading branding agency
                         with a passion for creating memorable names
                          and internationally-renowned brands. Since our launch,
                           we’ve worked on more than 1,000 projects for clients
                            around the world. We’re big enough to handle massive projects,
                             and yet also nimble enough to come up with names
                              on demand that hit every time.</span></p>
                        <div class="palne-img-area">

                           <img src={plane} alt="images"/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
           
         </div>
      </div>
     {/*  <!-- end about --> */}
      
        </div>
    )
}

export default About
