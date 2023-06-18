import './Footer.scss'
import logo from '../../assets/logo.svg'
import email from '../../assets/email-footer.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import tiktok from '../../assets/tiktok.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='column'>
          <img src={logo} alt='Ratepunk Logo' className='logo-footer' />
          <p className='footer-text'>
            Ratepunk compares hotel room prices across the major online travel
            agencies. When you search for a room, Ratepunk extension scans the
            top booking sites and runs a price comparison, so you can be
            confident in knowing you’re getting the best deal!
          </p>
          <p className='copyright'>
            © 2023 Ratepunk + Raigardas Tautkus{' <3'}. All Rights Reserved.
          </p>
        </div>
        <div className='column quick-links'>
          <strong className='footer-bold'>QUICK LINKS</strong>
          <a>Price Comparison</a>
          <a>Chrome Extension</a>
          <a>How it Works</a>
          <a>Ratepunk Blog</a>
          <a>Privacy Policy</a>
        </div>
        <div className='column'>
          <strong className='footer-bold contact'>Contact</strong>
          <div className='contact-row'>
            <img src={email} alt='Email Logo' className='emailLogo' />
            <p>hi@ratepunk.com</p>
          </div>
          <strong className='footer-bold social'>Social</strong>
          <div className='social-icons'>
            <a className='social-icon'>
              <img
                src={instagram}
                alt='Instagram Icon'
                className='socialIcon'
              />
            </a>
            <a className='social-icon'>
              <img src={facebook} alt='Facebook Icon' className='socialIcon' />
            </a>
            <a className='social-icon'>
              <img src={linkedin} alt='Linkedin Icon' className='socialIcon' />
            </a>
            <a className='social-icon'>
              <img src={twitter} alt='Twitter Icon' className='socialIcon' />
            </a>
            <a className='social-icon'>
              <img src={tiktok} alt='YouTube Icon' className='socialIcon' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
