import { createClient } from "../../prismic-configuration";
import Image from 'next/image';
import Head from "next/head";

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Navigation from "../../components/Navigation";

import styles from "../../styles/Product.module.scss";

export default function Product({product}) {
    let esgotado = (product.data.status == "esgotado")
    esgotado = !esgotado

    const handleClickOrder = () => {
        if (esgotado) return

        alert("vai pro zap")
    }

    return (
        <>
            <Head>
                <title>FFT - Loja</title>
            </Head>

            <Header />

            <div className={styles.productContainer}>
                <div className={styles.info}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={product.data.image_1.url}
                            alt='EDITAR ALT'
                            width={1200}
                            height={1000}
                          />
                    </div>

                    <div className={styles.details}>
                        <h3>Home/Loja/{product.data.category.toUpperCase()}</h3>
                        <h2>{product.data.name}</h2>
                        <h5>R${product.data.price}</h5>
                        <p>{product.data.headline}</p>
                        <p>{product.data.concept[0].text}</p>
                        <a className={esgotado ? styles.esgotado : ""} href={esgotado ? "" : "https://wa.me/5521969000446"} target="_blank" rel="noreferrer">ENCOMENDAR VIA ZAP</a>
                        <p id={styles.warning}>*Em breve, vendas direto no site!</p>
                    </div>
                </div>

                <div className={styles.description}>
                    <hr />
                    <h4>Descrição do produto</h4>
                    <p>{product.data.description}</p>
                </div>
            </div>

            <Navigation />
            <Footer />
        </>
    )
}

export async function getServerSideProps(context) {
    const client = createClient()
    const product = await client.getByUID("product", context.query.product)

    return {
        props: {
            product: product
        }
    }
}