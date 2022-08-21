import Link from 'next/link';
import Image from 'next/image';
import Head from "next/head";

import Header from "../components/Header"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation";

import styles from "../styles/Loja.module.scss";

import logoBrasao from "../public/images/logos/logo-brasao.png";

import camisaFutSemPreconceito from "../public/images/products/camisa-futebol-sem-preconceito.jpg"
import camisaAssis from "../public/images/products/camisa-assis.jpg";
import camisaCartola from "../public/images/products/camisa-cartola.jpg";
import camisaChicoGuanabara from "../public/images/products/camisa-chico-guanabara.jpg";
import ecoCopo from "../public/images/products/ecocopo.jpg";
import fineArtCartola from "../public/images/products/fine-art-cartola.jpg";

export default function Loja() {
  return (
    <>
      <Head>
        <title>FFT - Loja</title>
      </Head>
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
          <Link href='/loja'>
            <a>
              <div className={styles.imageContainer}>
                <Image
                  src={camisaFutSemPreconceito}
                  alt='EDITAR ALT'
                />
              </div>

              <div className={styles.productInfo}>
                <h2>CAMISA JOGO</h2>
                <p>FUTEBOL SEM PRECONCEITO</p>
                <p>R$100</p>
                <h3>ESGOTADO</h3>
              </div>
            </a>
          </Link>

          <Link href='/loja'>
            <a>
              <div className={styles.imageContainer}>
                <Image
                  src={camisaAssis}
                  alt='EDITAR ALT'
                />
              </div>

              <div className={styles.productInfo}>
                <h2>CAMISA ALGODÃO</h2>
                <p>RECORDAR É VIVER | ASSIS</p>
                <p>R$100</p>
                <h3>ESGOTADO</h3>
              </div>
            </a>
          </Link>

          <Link href='/loja'>
            <a>
              <div className={styles.imageContainer}>
                <Image
                  src={camisaCartola}
                  alt='EDITAR ALT'
                />
              </div>

              <div className={styles.productInfo}>
                <h2>CAMISA ALGODÃO</h2>
                <p>GRANDES SÃO OS OUTROS | CARTOLA</p>
                <p>R$100</p>
                <h3 className={styles.preSale}>PRÉ-VENDA</h3>
              </div>
            </a>
          </Link>

          <Link href='/loja'>
            <a>
              <div className={styles.imageContainer}>
                <Image
                  src={camisaChicoGuanabara}
                  alt='EDITAR ALT'
                />
              </div>

              <div className={styles.productInfo}>
                <h2>CAMISA JOGO</h2>
                <p>NOVEMBRO PRETO</p>
                <p>R$100</p>
                <h3>ESGOTADO</h3>
              </div>
            </a>
          </Link>

          <Link href='/loja'>
            <a>
              <div className={styles.imageContainer}>
                <Image
                  src={ecoCopo}
                  alt='EDITAR ALT'
                />
              </div>

              <div className={styles.productInfo}>
                <h2>ECO COPO</h2>
                <p>COPO ECOLÓGICO DA FANFARRA</p>
                <p>R$15</p>
                <h3>ESGOTADO</h3>
              </div>
            </a>
          </Link>

          <Link href='/loja'>
            <a>
              <div className={styles.imageContainer}>
                <Image
                  src={fineArtCartola}
                  alt='EDITAR ALT'
                />
              </div>

              <div className={styles.productInfo}>
                <h2>FINE ART CARTOLA</h2>
                <p>TAMANHO A3 (SEM MOLDURA)</p>
                <p>R$40</p>
                <h3>ESGOTADO</h3>
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
