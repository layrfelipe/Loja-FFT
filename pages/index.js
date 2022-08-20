import Link from 'next/link';
import Image from 'next/image'

import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

import styles from "../styles/Home.module.scss";

import logoBrasao from "../public/images/logos/logo-brasao.png";
import camisaAssis from "../public/images/products/camisa-assis.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.homeContainer} />

      <div className={styles.featuredProductsContainer}>
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <Image
              src={logoBrasao}
              alt='EDITAR ALT'
            />
          </div>
          <h3>PRODUTOS EM DESTAQUE</h3>
        </div>

        <div className={styles.products}>
          <div className={styles.productWrapper}>
            <Link href='/loja'>
              <a>
                <div className={styles.productImageContainer}>
                  <Image
                    src={camisaAssis}
                    alt='EDITAR ALT'
                  />
                </div>
                <div className={styles.productInfo}>
                    <h2>CAMISA ALGODÃO</h2>
                    <p>RECORDAR É VIVER | ASSIS</p>
                </div>
              </a>
            </Link>
          </div>

          <div className={styles.productWrapper}>
            <Link href='/loja'>
              <a>
                <div className={styles.productImageContainer}>
                  <Image
                    src={camisaAssis}
                    alt='EDITAR ALT'
                  />
                </div>
                <div className={styles.productInfo}>
                    <h2>CAMISA ALGODÃO</h2>
                    <p>RECORDAR É VIVER | ASSIS</p>
                </div>
              </a>
            </Link>
          </div>

          <div className={styles.productWrapper}>
            <Link href='/loja'>
              <a>
                <div className={styles.productImageContainer}>
                  <Image
                    src={camisaAssis}
                    alt='EDITAR ALT'
                  />
                </div>
                <div className={styles.productInfo}>
                    <h2>CAMISA ALGODÃO</h2>
                    <p>RECORDAR É VIVER | ASSIS</p>
                </div>
              </a>
            </Link>
          </div>

          <div className={styles.productWrapper}>
            <Link href='/loja'>
              <a>
                <div className={styles.productImageContainer}>
                  <Image
                    src={camisaAssis}
                    alt='EDITAR ALT'
                  />
                </div>
                <div className={styles.productInfo}>
                    <h2>CAMISA ALGODÃO</h2>
                    <p>RECORDAR É VIVER | ASSIS</p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Navigation />
      <Footer />
    </>
  )
}
