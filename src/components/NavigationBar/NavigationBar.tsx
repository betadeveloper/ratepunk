import { useState } from 'react'
import './NavigationBar.scss'
import Logo from '../../assets/logo.svg'
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav
      className={`navigation-bar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}
    >
      <div className='nav-container'>
        <div className='logo'>
          <img src={Logo} alt='logo' />
        </div>
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
          <a className='active-link'>Chrome Extension</a>
          <a className='active-link'>Price Selection</a>
          <a className='active-link'>Blog</a>
        </div>
        <div className='hamburger-icon' onClick={toggleMobileMenu}>
          <img
            src={isMobileMenuOpen ? close : menu}
            alt={isMobileMenuOpen ? 'close' : 'hamburger'}
          />
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
