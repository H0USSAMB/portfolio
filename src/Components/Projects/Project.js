import React from 'react'
import './Project.css'
import Rectangle7 from '../pic/Rectangle 7.png'
import Rectangle8 from '../pic/Rectangle 8.png'
import image1 from '../pic/image 1.png'
import image3 from '../pic/image 3.png'

const Project = () => {
    return (
        <section className='projects' id='projects'>
            <h2 className='h'>Projects <br/><div className='line'></div></h2>
            
            <div className='project'>
                <div className='project1'>
                    <div className='desc'>
                        <h2>A Dog walking app</h2>
                        <p>I created this personal App mockUp in order to show how to create an app interface in Figma.</p>
                    </div>
                    <div className='p-p'>
                        <div className='p-p1'>
                            <img src={image1} alt='project'></img>
                        </div>
                        <div className='p-p2'>
                            <img src={image3} alt='project'></img>
                        </div>
                    </div>
                </div>
                <div className='project2'>
                <div className='p-p'>
                        <img src={Rectangle7} alt='project'></img>
                    </div>
                    <div className='desc'>
                        <h2>Traveling Website landing page</h2>
                        <p>we created this personal website mockup for travelers visiting morocco</p>
                    </div>
                </div>
                <div className='project3'>
                    <div className='desc'>
                        <h2>Project Name</h2>
                        <p>You can also add in this description the type of the project, if it was for web, mobile, electron.</p>
                    </div>
                    <div className='p-p'>
                        <img src={Rectangle8} alt='project'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project