import React from 'react';
import ReactRoundedImage from "react-rounded-image";
import './AboutSection.css';

const AboutSection = () => {
    return (
        <>
            <div className='about-section'>
                <h4 className='heading'>ABOUT ME</h4>

                <div className='section-image'>
                    <ReactRoundedImage
                        image="./images/img2.jpg"
                        roundedSize="0"
                        imageWidth="350"
                        imageHeight="350"
                    />
                </div>
                <div className='section-body'>
                    <h3>Namrata</h3>
                    <p>Hey!!! Welcome to my world. Let's have a look at some of my good memories which i have captured in photos.</p>
                </div>
                <h4 className='heading'>KEEP IN TOUCH</h4>
                <div className='section-touch'>
                    <i className="fab fa-instagram fa-2x fab1"></i>
                    <i className="fab fa-facebook fa-2x fab2"></i>
                    <i className="fab fa-youtube fa-2x fab3"></i>
                    <i className="fab fa-tiktok fa-2x fab4"></i>
                    <i className="fab fa-linkedin-in fa-2x fab5"></i>
                    <i className="fab fa-twitter fa-2x fab6"></i>

                </div>
                <h4 className='heading'>ME ON INSTAGRAM</h4>
                <div className='image-row'>
                    <div className='row'>
                        <div className='column'>
                            <img className="insta-img" src="./images/img2.jpg" width='90' height='100' />
                            <img className="insta-img" src="./images/img2.jpg" width='90' height='100' />
                            <img className="insta-img" src="./images/img2.jpg" width='90' height='100' />
                        </div>
                        <div className='column'>
                            <img className="insta-img" src="./images/img2.jpg" width='90' height='100' />
                            <img className="insta-img" src="./images/img2.jpg" width='90' height='100' />
                            <img className="insta-img" src="./images/img2.jpg" width='90' height='100' />
                        </div>
                        <div className='column'>
                            <img className="insta-img" src="./images/img2.jpg" width='90' height='100' />
                            <img className="insta-img" src="./images/img2.jpg" width='90' height='100' />
                            <img className="insta-img" src="./images/img2.jpg" width='90' height='100' />
                        </div>
                    </div>
                </div>
                <h4 className='heading'>QUOTES</h4>
                <div className='quotes'>
                    <p className='quotes-para'>Every new day is a chance to change your life.</p>
                </div>
                <h4 className='heading'>CATEGORIES</h4>
                <div className='categories'>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Chinese Cuisine
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Adventure
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Trip
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    Breakfast
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingFive">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                    Dinner
                                </button>
                            </h2>
                            <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>);
};

export default AboutSection;
