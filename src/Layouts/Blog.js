import React from 'react'
import '../styles/Navbar.css'
import blog1 from '../images/blog1.jpg'
import blog2 from '../images/blog2.jpg'

function Blog() {
    return (
        <div>
           {/*  <!-- our blog --> */}
      <div id="blog" class="blog">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Our Blog</h2>
                     <span>Lorem Ipsum is that it has a more-or-less normal distribution of letters,</span> 
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div class="blog-box">
                     <figure><img src={blog1} alt="#"/>
                        <span>4 Feb 2021</span>
                     </figure>
                     <div class="travel">
                        <span>Post  By :  Travel  Agency</span> 
                        <p><strong class="Comment"> 06 </strong>  Comment</p>
                        <p><strong class="like">05 </strong>Like</p>
                     </div>
                     <h3>London Amazing Tour</h3>
                     <p>This was my second stay at the Grand Dragon Ladakh. The first time I stayed there, it was of January 2016. Both the times I have stayed as a blogger, my stay was complimentary. The January 2016 was a group trip whereas in October 2021 I was staying alone and doing my own things!</p>
                  </div>
               </div>
               <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div class="blog-box">
                     <figure><img src={blog2} alt="#"/>
                        <span>10 Feb 2020</span>
                     </figure>
                     <div class="travel">
                        <span>Post  By :  Travel  Agency</span> 
                        <p><strong class="Comment"> 06 </strong>  Comment</p>
                        <p><strong class="like">05 </strong>Like</p>
                     </div>
                     <h3>London Amazing Tour</h3>
                     <p>I recently visited Ladakh for the 5th time. The first time, way back in 2005 my husband and I did a road trip using public transport. After that I have always taken a flight. Since my first flight in 2016 I knew the magnificent views of the Ladakh Range was on the A side window…</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
     {/*  <!-- end our blog --> */}
      
        </div>
    )
}

export default Blog
