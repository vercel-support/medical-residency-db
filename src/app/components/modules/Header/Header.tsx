
import styles from './Header.module.scss';

const Header: React.FC = () => (
  <header className={styles.header}>
    <span className={styles.socials} data-cy={'header-socials'}>
      <a href={'https://github.com/wityan/next-js-boilerplate'} rel="noreferrer noopener" target={'_blank'}>
        s
      </a>
      <a
        href={'https://medium.com/@wityan/next-js-project-structure-1531610bed71'}
        rel="noreferrer noopener"
        target={'_blank'}
      >
       s
      </a>
      <a href={'https://twitter.com/YannickWittwer3'} rel="noreferrer noopener" target={'_blank'}>
       s
      </a>
    </span>
  </header>
);

export default Header;
