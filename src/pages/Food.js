import React from 'react';
import Footer from '../components/Footer';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Food.css';
import AboutSection from '../components/AboutSection';
import LatestStories from '../components/LatestStories';
import LSdata from '../components/LSdata';

const Food = () => {
  return (
    <div>
      <div className='food-head'>
        <h1>FOOD I LOVE</h1>
      </div>

      <div className='food-cards'>
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-3 "><div class="card" >
              <img src="./images/food4.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div></div>
            <div class="col-12 col-sm-6 col-md-3 "><div class="card" >
              <img src="./images/food4.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div></div>
            <div class="col-12 col-sm-6 col-md-3 "><div class="card" >
              <img src="./images/food4.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div></div>
            <div class="col-12 col-sm-6 col-md-3 "><div class="card" >
              <img src="./images/food4.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div></div>
          </div>
        </div>
      </div>

      <div className='food-recipe'>

        <button className='recipe-button' ><i class="fas fa-utensils" />Browse Recipes</button>

        <div className='food-icons'>
          <i className="fas fa-3x fa-trophy"></i>
          <i class="fas fa-3x fa-hamburger"></i>
          <i class="fas fa-3x fa-pizza-slice"></i>
          <i class="fas fa-3x fa-carrot"></i>
          <i class="fas fa-3x fa-stopwatch"></i>
        </div>
      </div>

      <div className='food-middle'>
        <div className='food-middle-left'>
          <h4 className='food-left-headings'>RECENT POSTS</h4>
          <div className='food-stories'>
            <div className='column'>
              <img src='./images/food6.jpg' /><br />
              <span>Travel</span>
              <h5>A Day In Kanpur</h5>
              <p className='food-para'>As a travel blogger, I always look to travel quotes for guidance, wanderlust, and inspiration.</p>
            </div>
            <div className='column'>
              <img src='./images/food6.jpg' /><br />
              <span>Travel</span>
              <h5>A Day In Delhi</h5>
              <p className='food-para'>As a travel blogger, I always look to travel quotes for guidance, wanderlust, and inspiration.</p>
            </div>
            <div className='column'>
              <img src='./images/food6.jpg' /><br />
              <span>Travel</span>
              <h5>A Day In Delhi</h5>
              <p className='food-para'>As a travel blogger, I always look to travel quotes for guidance, wanderlust, and inspiration.</p>
            </div>
          </div>
          {LSdata.map((value) => {
           return( <LatestStories
            LStitle={value.title}
            LSimg={value.image}
            LSpara={value.para}
            LStext={value.smalltext}

          />)
          })}
        </div>
        <div className='food-middle-right'>
          <AboutSection />
        </div>
      </div>

      <Footer />
    </div>);
};

export default Food;
