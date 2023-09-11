import styles from '../../styles/General.module.scss';

const TextArea = ({ rows, cols, placeholder, onChange, value }) => {
  return (
    <textarea
      className={styles.textArea}
      rows={rows}
      cols={cols}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextArea;
