import Link from 'next/link';
import Image from 'next/image';
import Head from "next/head";

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import NavigationHelper from "../../components/NavigationHelper";

import styles from "../../styles/Loja.module.scss";

import logoBrasao from "../../public/images/logos/logo-brasao.png";

import products from '../../database/products';

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
          
          {
            products.map( (product) => {
              return(
                <Link href={`/loja/${product.uid}`} key={product.uid}>
                  <a>
                    <div className={styles.imageContainer}>
                      <Image
                        src={product.image_path}
                        alt='EDITAR ALT'
                        width={1200}
                        height={1000}
                      />
                    </div>

                    <div className={styles.productInfo}>
                      <h2>{product.name.toUpperCase()}</h2>
                      <p>{product.headline}</p>
                      <p>R${product.price}</p>
                      {product.status == "esgotado" && <h3>{product.status.toUpperCase()}</h3>}
                    </div>
                  </a>
                </Link>
              )
            })
          }

        </div>
      </div>
      <NavigationHelper />
      <Footer />
    </>
  )
}

export async function getStaticProps(context) {
  return {
      props: {}
  }
}