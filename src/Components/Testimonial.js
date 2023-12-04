import ProfilePic from '../Assets/john-doe-image.png'
import {AiFillStar} from 'react-icons/ai'

const Testimonial = () => {
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Testimonial</p>
                <h1 className="primary-heading">What They Are Saying</h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero animi inventore veniam id voluptas! Possimus,
                    facilis! Cum, sint quaerat. Pariatur.
                </p>
            </div>
            <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur nostrum alias quasi autem! Nesciunt amet
                    consectetur enim a id? Ea.
                </p>
                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>Jhon Doe</h2>
            </div>
        </div>
    );
}
 
export default Testimonial;