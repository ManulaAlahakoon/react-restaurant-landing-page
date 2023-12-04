import AboutBackground from '../Assets/about-background.png'
import AboutBackgroundImage from '../Assets/about-background-image.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'

    
const About = () => {
    return (  
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="" />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">About</p> 
                <h1 className="primary-heading">
                    Food Is An Important Part Of A Balanced Diet
                </h1>
                <p className="primarty-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eaque quo quasi minus sunt placeat quisquam saepe distinctio. Natus distinctio quod porro fuga voluptatem iusto consequuntur ut, sequi qui? Dolorem atque sed vel. Ipsa deserunt minima necessitatibus enim tempora blanditiis saepe molestiae maxime, iure optio aut alias quod excepturi aperiam.
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">Learn More</button>
                    <button className='watch-video-button'><BsFillPlayCircleFill/> Watch Video</button>
                </div>
            </div>
        </div>
    );
}
 
export default About;