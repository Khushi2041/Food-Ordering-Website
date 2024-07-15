import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=""/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, a aut pariatur aliquam odio velit ut facilis asperiores, itaque magni voluptatibus dolorem vero accusamus accusantium obcaecati distinctio, nesciunt saepe recusandae!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt=""/>
                    <img src={assets.twitter_icon} alt=""/>
                    <img src={assets.linkedin_icon} alt=""/>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delievery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>1-231-345-6743</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
      <hr/>
      <p className='footer-copyright'>CopyRight 2024 Tomato.com - All rights reserved</p>
    </div>
  )
}

export default Footer
