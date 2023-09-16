import IconsContainer from '../Home/IconsContainer';
import { ReactComponent as CyberbizLogo } from '../../assets/icons/cyberbizlogo.svg';
import styles from '../../styles/General.module.scss';

const Navbar = ({ isLeftDirection }) => {
  /* eslint-disable indent */
  return (
    <nav
      aria-label="primary-navigation"
      style={
        isLeftDirection
          ? {
              left: '100px',
            }
          : {
              right: '100px',
            }
      }
      className={styles.ownNavbar}
    >
      <CyberbizLogo className={styles.cyberbizLogo} />
      <IconsContainer />
    </nav>
    /* eslint-enable indent */
  );
};

export default Navbar;
