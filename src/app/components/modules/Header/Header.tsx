import styles from './Header.module.scss';
import Link from 'next/link'

const Header: React.FC = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <Link href="/">
        <a className="navbar-brand">ResidencyDatabase.online</a>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">

            <Link href="/contact">
              <a className="nav-link">Contact <span className="sr-only">(current)</span></a>
            </Link>


          </li>
          <li className="nav-item">
            <Link href="/blog">
              <a className="nav-link">Blog</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
