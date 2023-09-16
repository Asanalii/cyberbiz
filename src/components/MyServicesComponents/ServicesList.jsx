import { servicesMock } from '../../utils/mockServices';
import ServiceItem from './ServiceItem';
import styles from '../../styles/Services.module.scss';

const ServicesList = () => {
  return (
    <ul className={styles.servicesList}>
      {servicesMock.map(service => (
        <ServiceItem key={service.title} title={service.title} content={service.content} />
      ))}
    </ul>
  );
};

export default ServicesList;
