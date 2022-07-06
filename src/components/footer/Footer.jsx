/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {FaAngellist, FaTwitter, FaGithub, FaLinkedin, FaMedium} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Tumworobere</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#project'>Projects</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>        
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/annah-tumworobere/"><FaLinkedin /></a>
        <a href="https://angel.co/u/tumworobere-annah"><FaAngellist /></a>
        <a href="https://twitter.com/Tannah2090"><FaTwitter /></a>
        <a href="https://github.com/Tumworobere"><FaGithub /></a>        
        <a href="https://medium.com/@annaht.annah"><FaMedium /></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Tumworobere's Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer