import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // 依照螢幕寬度決定是否顯示「登入」按鈕
  const showButton = () => {
    if (window.innerWidth <= 1020) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-title' onClick={closeMobileMenu}>
            資本遊戲-大富翁
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                首頁
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/assetPerStop'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                置產情形&過路費
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/rules'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                遊戲規則
              </Link>
            </li>
            <li className='nav-links-mobile-container'>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                登入
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>登入</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;