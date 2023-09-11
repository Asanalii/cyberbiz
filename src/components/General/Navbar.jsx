import IconsContainer from '../Home/IconsContainer';
import { ReactComponent as CyberbizLogo } from '../../assets/icons/cyberbizlogo.svg';
import styles from '../../styles/General.module.scss';

const Navbar = () => {
  return (
    <nav aria-label="primary-navigation" className={styles.ownNavbar}>
      <CyberbizLogo className={styles.cyberbizLogo} />
      <IconsContainer />
    </nav>
  );
};

export default Navbar;
