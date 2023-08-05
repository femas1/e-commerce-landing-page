import styles from './NavbarLink.module.css';

interface Props {
    linkTitle: string;
}

const NavbarLink = ({ linkTitle }: Props) => {
  return (
    <div>
      <li className="nav-item">
          <a className={`${styles.link} nav-link`} href="#">{linkTitle}</a>
        </li>

    </div>
  )
}

export default NavbarLink;
