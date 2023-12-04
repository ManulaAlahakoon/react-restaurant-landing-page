import Logo from '../Assets/Logo.svg'
import { BsTwitter } from 'react-icons/bs'
import { SiLinkedin } from 'react-icons/si'
import { BsYoutube } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src={Logo} alt="" />
                </div>
                <div className="footer-icons">
                    <BsTwitter />
                    <SiLinkedin />
                    <BsYoutube />
                    <FaFacebook/>
                </div>
            </div>
            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span>Quality</span>
                    <span>Help</span>
                    <span>Share</span>
                    <span>Carrers</span>
                    <span>Testimonials</span>
                    <span>Work</span>
                </div>
                <div className="footer-section-columns">
                    <span>+94702838422</span>
                    <span>Tasty@food.com</span>
                    <span>Eat@food.com</span>
                    <span>CallMe@food.com</span>
                </div>
                <div className="footer-section-columns">
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
      );
}
 
export default Footer;