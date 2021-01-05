import styles from './Footer.module.scss';

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
                <li><a href="/contact">Contact</a></li>
                <li><a href="/refund-policy">Refund Policy</a></li>
                <li><a href="/data-accuracy">Data Accuracy</a></li>
                <li><a href="/about-us">About us</a></li>
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
