import Link from 'next/link';
import Image from 'next/image';
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

import styles from "../styles/Home.module.scss";

import logoBrasao from "../public/images/logos/logo-brasao.png";
import camisaFutSemPreconceito from "../public/images/products/camisa-futebol-sem-preconceito.jpg"
import camisaAssis from "../public/images/products/camisa-assis.jpg";
import camisaCartola from "../public/images/products/camisa-cartola.jpg";
import camisaChicoGuanabara from "../public/images/products/camisa-chico-guanabara.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>FFT - Início</title>
      </Head>
      <Header />
      {/* <div className={styles.homeContainer} /> */}

      {/* <div className={styles.featuredProductsContainer}>
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
                    src={camisaFutSemPreconceito}
                    alt='EDITAR ALT'
                  />
                </div>
                <div className={styles.productInfo}>
                    <h2>CAMISA JOGO</h2>
                    <p>FUTEBOL SEM PRECONCEITO</p>
                    <h3>ESGOTADO</h3>
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
                    <h3>ESGOTADO</h3>
                </div>
              </a>
            </Link>
          </div>

          <div className={styles.productWrapper}>
            <Link href='/loja'>
              <a>
                <div className={styles.productImageContainer}>
                  <Image
                    src={camisaCartola}
                    alt='EDITAR ALT'
                  />
                </div>
                <div className={styles.productInfo}>
                    <h2>CAMISA ALGODÃO</h2>
                    <p>GRANDES SÃO OS OUTROS | CARTOLA</p>
                    <h3 className={styles.preSale}>PRÉ-VENDA</h3>
                </div>
              </a>
            </Link>
          </div>

          <div className={styles.productWrapper}>
            <Link href='/loja'>
              <a>
                <div className={styles.productImageContainer}>
                  <Image
                    src={camisaChicoGuanabara}
                    alt='EDITAR ALT'
                  />
                </div>
                <div className={styles.productInfo}>
                    <h2>CAMISA JOGO</h2>
                    <p>NOVEMBRO PRETO</p>
                    <h3>ESGOTADO</h3>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div> */}

      {/* <Navigation />
      <Footer /> */}
    </>
  )
}
