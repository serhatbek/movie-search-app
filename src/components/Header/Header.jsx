import './Header.scss';
import { useEffect, useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { SlMenu } from 'react-icons/sl';
import { VscChromeClose } from 'react-icons/vsc';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { ContentWrapper } from '../../components';
import logo from '../../assets/images/movix-logo.svg';

const Header = () => {
  const [show, setShow] = useState('top');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState('');
  const [showSearch, setShowSearch] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow('hide');
      } else {
        setShow('show');
      }
      setLastScrollY(window.scrollY);
    } else {
      setShow('top');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const searchQueryHandler = (e) => {
    if (e.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`);

      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setShowSearch(false);
  };

  const navigationHandler = (type) => {
    if (type === 'movie') {
      navigate('/explore/movie');
    }

    if (type === 'tv') {
      navigate('/explore/tv');
    }
    setMobileMenu(false);
  };

  return (
    <header className={`header ${mobileMenu ? 'mobileView' : ''} ${show}`}>
      <ContentWrapper>
        <Link to={'/'} className='header__logo'>
          <img src={logo} alt='' />
        </Link>

        <nav>
          <ul className='header__menuItems'>
            <li onClick={() => navigationHandler('movie')}>Movies</li>
            <li onClick={() => navigationHandler('tv')}>TV Shows</li>
            <li>
              <HiOutlineSearch onClick={openSearch} />
            </li>
          </ul>
        </nav>

        <div className='header__mobileMenuItems'>
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose onClick={closeMobileMenu} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>

      {showSearch && (
        <div className='header__searchBar'>
          <ContentWrapper>
            <div className='header__searchBar__input'>
              <input
                type='text'
                name='search'
                placeholder='Search for a movie or tv show...'
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
