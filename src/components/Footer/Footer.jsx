import { ContentWrapper } from '../../components';
import './Footer.scss';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <ContentWrapper>
        <ul className='footer__menu-items'>
          <li>
            <a href='#'>Terms Of Use</a>
          </li>
          <li>
            <a href='#'>Privacy Policy</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>FAQ</a>
          </li>
        </ul>
        <p className='footer__info-text'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt iste
          ullam ex nulla, alias expedita, quidem illum repellendus enim iure,
          atque et corporis at beatae perspiciatis exercitationem odit magnam
          repellat. Deleniti voluptates, nobis alias ullam accusantium suscipit
          eligendi! Odit, distinctio!
        </p>
        <ul className='footer__social'>
          <li>
            <a href='#' className='icon'>
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href='#' className='icon'>
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href='#' className='icon'>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href='#' className='icon'>
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
