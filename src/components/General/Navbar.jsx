import IconsContainer from '../Home/IconsContainer';
import { ReactComponent as CyberbizLogo } from '../../assets/icons/cyberbizlogo.svg';
import styles from '../../styles/General.module.scss';

const Navbar = ({ isLeftDirection }) => {
  /* eslint-disable indent */
  return (
    <nav aria-label="primary-navigation" className={styles.ownNavbar}>
      <CyberbizLogo className={isLeftDirection ? styles.cyberbizLogo__white : styles.cyberbizLogo__purple} />
      <IconsContainer isLeftDireciton={isLeftDirection} />
    </nav>
    /* eslint-enable indent */
  );
};

export default Navbar;
