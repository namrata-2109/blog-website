import React from 'react';
import './Home.css';
import AboutSection from '../components/AboutSection';
import HomeLeft from '../components/HomeLeft';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import LatestStories from '../components/LatestStories';
import LSdata from '../components/LSdata';

const Home = () => {
  return (
    <div className='home-page'>
      <div className='home-head'>
        <h1>FAIRYLAND</h1>
      </div>
      <Carousel />
      <div className='home-middle'>
        <div className='home-middle-left'>
          < HomeLeft />
          <h4 className='latest-stories'>LATEST STORIES</h4>
          { LSdata.map((value) => {
            return(
              <LatestStories
                  LStitle={value.title}
                  LSimg = {value.image}
                  LSpara = {value.para}
                  LStext ={value.smalltext}
              />
            )
          })}
        </div>

        <div className='home-middle-right'>
          <AboutSection />
        </div>
      </div>
      <Footer/>
    </div>);
};

export default Home;

{/* <div className="carousel-item">
  <img src="..." alt="...">
  <div class="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
</div> */}