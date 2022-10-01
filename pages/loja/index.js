import { createClient } from "../../prismic-configuration";
import Link from 'next/link';
import Image from 'next/image';
import Head from "next/head";

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Navigation from "../../components/Navigation";

import styles from "../../styles/Loja.module.scss";

import logoBrasao from "../../public/images/logos/logo-brasao.png";

export default function Loja({ products }) {
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
                        src={product.data.image_1.url}
                        alt='EDITAR ALT'
                        width={1200}
                        height={1000}
                      />
                    </div>

                    <div className={styles.productInfo}>
                      <h2>{product.data.name.toUpperCase()}</h2>
                      <p>{product.data.headline}</p>
                      <p>R${product.data.price}</p>
                      <h3>{product.data.status.toUpperCase()}</h3>
                    </div>
                  </a>
                </Link>
              )
            })
          }


          {/* <Link href='/loja'>
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
          </Link> */}
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