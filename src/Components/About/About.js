import React from 'react'
import './About.css'
import aboutimg from '../pic/aboutimg.png'
import Vectorres from '../pic/imagerespon.png'
import icon from '../pic/Icon.png'

const About = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Abdessamad ourdyl (1).pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Abdessamad ourdyl (1).pdf';
                alink.click();
            })
        })
    }
    return (
        <section className='About' id='About'>
            <div className='container-a'>
                <div className='left-a'>
                    <h2>About me <br/><div className='line-ab'></div></h2>
                    
                    <p className='top-p-a'>Hey, am an entry-level UX/UI and Web designer based in Casablanca, passionate in Art and Photography.</p>
                <p className='center-p-about'> <span>2019-2020:</span> Degree in Science and Mechanical Technology at El Khawazizmi high School</p>
                <p className='bottom-p-about'> <span>2020-2022:</span> Diploma of a Technician specialized in IT development at Ista NTIC 1 Casablanca</p>
                <p className='p-b-a'> 1 learned UX and Web design by myself with online corses) </p>
                </div>
                <div className='right-a'>
                    <img className='des' src={aboutimg} alt='about'></img>
                    <img className='mob' src={Vectorres} alt='for phone'></img>
                </div> 
            </div>
            <button style={{ cursor: "pointer" }} onClick={onButtonClick}>resume <img src={icon} alt = 'icon'></img></button>
        </section>
    )
}

export default About