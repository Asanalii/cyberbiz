import styles from '../styles/Services.module.scss';
import ServicesList from '../components/MyServicesComponents/ServicesList';

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesWrapper}>
        <h2 className={styles.servicesTitle}>My services</h2>
        <ServicesList />
      </div>
    </section>
  );
};

export default Services;
