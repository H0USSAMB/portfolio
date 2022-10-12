import React from 'react'
import './Home.css'

import icon1 from '../pic/icon1.svg'
import icon2 from '../pic/icon2.svg'
import Vector from '../pic/vectorimg.png'

const Home = () => {
  const openInNewTab = url => {
    // 👇️ setting target to _blank with window.open
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <section className='container' id='home' >
        <div className='left'>
            <p className='top-p'>UI/UX Designer</p>
            <h1>Hello, my name is Abdessamad Ourdyl </h1>
            <p className='bottom-p'>I’m a UX/Ui and Web Designer specialized in Figma, AdobeXD and Photoshop.</p>
            <div className='btn'>
           <a href='#projects'> <button style={{ cursor: "pointer" }} className='btn-pt'>Projects</button></a>
            <button style={{ cursor: "pointer" }} onClick={() => openInNewTab('https://example.com')} className='btn-lk'>LinkedIn</button>
            </div>
            
            <div className='icons'>
                <span  style={{ cursor: "pointer" }} onClick={() => openInNewTab('https://example.com')}><img className='icon1' src={icon1} alt= 'icon'></img></span>
                <span  style={{ cursor: "pointer" }} onClick={() => openInNewTab('https://example.com')}><img className='icon2' src={icon2} alt= 'icon2'></img></span>
             </div>
        </div>
        <div className='right'>
            <img src={Vector} alt='home'></img>
        </div>
    </section>
  )
}

export default Home