import React from 'react';
import './HomeLeft.css';

const HomeLeft = () => {
  return <>
    <div className='home-left'>
      <h4 className='home-left-headings'>MEMORIES</h4>
      <img className = 'image' src='./images/img1.jpg' width='750' height='500' />
      <h4 className='home-left-headings'>RECENT POSTS</h4>
      <div className='stories'>
        <div className='column'>
          <img src='./images/img3.jpg' width='300' /><br/>
          <span>Travel</span>
          <h5>A Day In Kanpur</h5>
          <p className = 'stories-para'>As a travel blogger, I always look to travel quotes for guidance, wanderlust, and inspiration.</p>
        </div>
        <div className='column'>
          <img src='./images/img3.jpg' width='300' /><br/>
          <span>Travel</span>
          <h5>A Day In Delhi</h5>
          <p className = 'stories-para'>As a travel blogger, I always look to travel quotes for guidance, wanderlust, and inspiration.</p>
        </div>
      </div>
    </div>
  </>;
};

export default HomeLeft;
