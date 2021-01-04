import styles from './Card.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<Props> = ({ children, className }) => (
  <div className={styles.card + " " + className}>{children}</div>
);

export default Card;
