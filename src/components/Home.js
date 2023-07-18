import React from 'react';

const Home = () => {
  return (
    <div>
 <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/assets/img5.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" >
      <img src="/assets/img2.jpg" class="d-block w-100" alt="..." style={{height:'500px',width:'600px'}}/>
    </div>
    <div class="carousel-item">
      <img src="/assets/img4.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
     </div>
  );
}

export default Home;
