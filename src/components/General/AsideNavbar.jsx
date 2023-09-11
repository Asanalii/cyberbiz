import { ReactComponent as HomeIcon } from '../../assets/icons/home_icon.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user_icon.svg';
import { ReactComponent as HeartPlusIcon } from '../../assets/icons/heart_plus_icon.svg';
import { ReactComponent as CardsIcon } from '../../assets/icons/cards_icon.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/shopping_cart_icon.svg';
import styles from '../../styles/General.module.scss';

const AsideNavbar = () => {
  return (
    <aside className={styles.asideBar}>
      <HomeIcon className={styles.asideBar__icon} />
      <UserIcon className={styles.asideBar__icon} />
      <HeartPlusIcon className={styles.asideBar__icon} />
      <CardsIcon className={styles.asideBar__icon} />
      <CartIcon className={styles.asideBar__icon} />
    </aside>
  );
};

export default AsideNavbar;
