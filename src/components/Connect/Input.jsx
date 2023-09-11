import styles from '../../styles/General.module.scss';

const Input = ({ value, onChange, placeholder }) => {
  return <input placeholder={placeholder} onChange={onChange} value={value} className={styles.input} />;
};

export default Input;
