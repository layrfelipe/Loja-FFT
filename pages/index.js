import { createClient } from "../prismic-configuration";

import Link from 'next/link';
import Image from 'next/image';
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

import styles from "../styles/Home.module.scss";

import logoBrasao from "../public/images/logos/logo-brasao.png";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>FFT - Início</title>
      </Head>
      <Header />
      <div className={styles.homeContainer} />
      <div className={styles.homeContainerMobile}><h2>#RECORDARÉVIVER</h2></div>

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


          {
            products.slice(0, 4).map( (product) => {
                return(
                  <div className={styles.productWrapper} key={product.uid}>
                    <Link href={`/loja/${product.uid}`}>
                      <a>
                        <div className={styles.productImageContainer}>
                          <Image
                            src={product.data.image_1.url}
                            alt='EDITAR ALT'
                            width={1200}
                            height={1000}
                          />
                        </div>
                        <div className={styles.productInfo}>
                            <h2>{product.data.name.toUpperCase()}</h2>
                            <p>{product.data.headline}</p>
                            <h3>{product.data.status.toUpperCase()}</h3>
                        </div>
                      </a>
                    </Link>
                  </div>
                );
            })
          }
        </div>
      </div>

      <Navigation />
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  const client = createClient()
  const products = await client.getAllByType("product")

  return {
      props: {
          products: products
      }
  }
}