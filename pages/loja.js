import Link from 'next/link';
import Image from 'next/image'

import Header from "../components/Header"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation";

import styles from "../styles/Loja.module.scss";

import logoBrasao from "../public/images/logos/logo-brasao.png";
import camisaAssis from "../public/images/products/camisa-assis.jpg";

export default function Loja() {
  return (
    <>
      <Header />
      <div className={styles.lojaContainer}>
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <Image
              src={logoBrasao}
              alt='EDITAR ALT'
            />
          </div>
          <h3>PRODUTOS</h3>
        </div>

        <div className={styles.productsContainer}>
          <Link href='/mart'>
            <a>
              <div className={styles.imageContainer}>
                <Image
                  src={camisaAssis}
                  alt='EDITAR ALT'
                />
              </div>

              <div className={styles.productInfo}>
                <h2>Nome do produto</h2>
              </div>
            </a>
          </Link>

          <Link href='/mart'>
            <a>
              <div className={styles.imageContainer}>
                <Image
                  src={camisaAssis}
                  alt='EDITAR ALT'
                />
              </div>

              <div className={styles.productInfo}>
                <h2>Nome do produto</h2>
              </div>
            </a>
          </Link>

          <Link href='/mart'>
            <a>
              <div className={styles.imageContainer}>
                <Image
                  src={camisaAssis}
                  alt='EDITAR ALT'
                />
              </div>

              <div className={styles.productInfo}>
                <h2>Nome do produto</h2>
              </div>
            </a>
          </Link>

          <Link href='/mart'>
            <a>
              <div className={styles.imageContainer}>
                <Image
                  src={camisaAssis}
                  alt='EDITAR ALT'
                />
              </div>

              <div className={styles.productInfo}>
                <h2>Nome do produto</h2>
              </div>
            </a>
          </Link>

          <Link href='/mart'>
            <a>
              <div className={styles.imageContainer}>
                <Image
                  src={camisaAssis}
                  alt='EDITAR ALT'
                />
              </div>

              <div className={styles.productInfo}>
                <h2>Nome do produto</h2>
              </div>
            </a>
          </Link>

          <Link href='/mart'>
            <a>
              <div className={styles.imageContainer}>
                <Image
                  src={camisaAssis}
                  alt='EDITAR ALT'
                />
              </div>

              <div className={styles.productInfo}>
                <h2>Nome do produto</h2>
              </div>
            </a>
          </Link>
        </div>

      </div>
      <Navigation />
      <Footer />
    </>
  )
}
