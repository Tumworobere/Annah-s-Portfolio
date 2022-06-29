import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaMediumM } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
      <div className='header_socials'>
          <a href="https://www.linkedin.com/in/annah-tumworobere/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Tumworobere" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://twitter.com/Tannah2090" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://medium.com/@annaht.annah" target="_blank" rel="noreferrer"><FaMedium /></a>
          <a href="https://angel.co/u/tumworobere-annah" target="_blank" rel="noreferrer"><FaAngellist /></a>
    </div>
  )
}

export default HeaderSocials