import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <h2 className='subs-head'>Subscribe to Blog via Email</h2><br />
                <b>Join us with <i class="fas fa-heart heart"></i></b><br /><br/><br/>
            <input className='footer-email' name='subs-email' type='e-mail' placeholder='Email Address' />
            <button type="button" className="btn btn-primary btn-lg">Subscribe</button>
            </div>
            <div className='footer-bottom'>
                <div className='icons'>
                    <i class="fab fa-instagram fa-1x fab1"> Instagram</i>
                    <i class="fab fa-facebook fa-1x fab2">  Facebook</i>
                    <i class="fab fa-youtube fa-1x fab3">   Youtube</i>
                    <i class="fab fa-github fa-1x fab4">    Github</i>
                    <i class="fab fa-linkedin-in fa-1x fab5">   Linkedin</i>
                    <i class="fab fa-twitter fa-1x fab6">   Twitter</i>
                </div>
                <div className='text'>
                    <p>@2022 - All Right Reserved. Designed and Developed by<b> Namrata Sharma</b></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
