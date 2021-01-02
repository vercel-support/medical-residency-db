import styles from './HomePage.module.scss';

const HomePage: React.FC = () => (
  <div className={styles.content}>
    <span className={styles.author}>Made by sasdasd<a href={'https://yannickwittwer.dev'} target="_blank" rel="noreferrer">yannickwittwer.dev</a></span>

    <h1>
      pep
      {styles.pepa}
    </h1>
  </div>
);

export default HomePage;
