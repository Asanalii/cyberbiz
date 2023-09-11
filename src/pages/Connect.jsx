import styles from '../styles/Connect.module.scss';
import Input from '../components/Connect/Input';
import TextArea from '../components/Connect/TextArea';
import Button from '../components/General/Button';

const Connect = () => {
  /* eslint-disable quotes*/
  return (
    <section className={styles.connectSection}>
      <form className={styles.connectFormWrapper}>
        <h2 className={styles.connectForm__title}>Let's connect</h2>
        <div className={styles.connectForm__inputContainer}>
          <div className={styles.inputRow}>
            <Input placeholder={'Name'} />
            <Input placeholder={'E-mail'} />
          </div>
          <Input placeholder={'Subject'} />
          <TextArea placeholder={'Message'} rows={8} />
        </div>
        <div className={styles.connectFormSubmitContainer}>
          <Button value={"Let's talk"} variant={'transparent'} p={{ x: '80px', y: '20px' }} fontSize={'18   px'} />
        </div>
      </form>
    </section>
  );
};

export default Connect;
