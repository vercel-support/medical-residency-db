import styles from './Footer.module.scss';
import Link from 'next/link'

const Footer: React.FC = () => {

  var links = [
    { text: 'Toffee tiramisu fruitcake jelly', href: '' },
    { text: 'Bear claw pastry ice cream cake dessert', href: '' },
    { text: 'Donut lollipop macaroon', href: '' },
    { text: 'Cupcake pie powder chocolate', href: '' }
  ];


  return (
    <div className="container mt-4">
      <footer className={styles.footer}>
        <h2 className="text-center p-4">ResidencyDatabase.online</h2>
        <div className="row">
          <div className="col-lg-5 col-12">
            <div className="pl-4 ml-5">
              <ul className={styles.footerLinks}>
                <li>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link></li>
                <li>
                  <Link href="/refund-policy">
                    <a>
                      Refund Policy</a>
                  </Link></li>
                <li>
                  <Link href="/data-accuracy">
                    <a>Data Accuracy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/data-accuracy">
                    <a href="/about-us">About us</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-7 col-12">
            <h3>From our blog</h3>
            <ul className="pl-4">
              {links.map((f, index) => <li key={index}><a href={f.href}>{f.text}</a></li>)}
            </ul>
          </div>
        </div>

        <div className="text-center p-3 text-muted">
          <small>
            © All rights reserved 2010, ResidencyDatabase llc
        </small>
        </div>
      </footer>
    </div>
  )
}
  ;

export default Footer;
