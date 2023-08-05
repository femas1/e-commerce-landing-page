import styles from './Navbar.module.css';

import Logo from '../Logo/Logo';
import NavbarLink from '../NavbarLink/NavbarLink';
import Avatar from '../Avatar/Avatar';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const avatar = "src/assets/images/image-avatar.png";

const Navbar = () => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary ${styles.navbar} p-4`}>
        <div className="container-fluid justify-content-start">
      
          <Logo imageLink="src\assets\images\logo.svg"/>
          
          <ul className="navbar-nav">
            <NavbarLink linkTitle='Men'/>
            <NavbarLink linkTitle='Women'/>
            <NavbarLink linkTitle='About'/>
            <NavbarLink linkTitle='Contact'/>
            <NavbarLink linkTitle='Company'/>
            <ShoppingCartOutlinedIcon />
            <Avatar src={avatar}/>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
