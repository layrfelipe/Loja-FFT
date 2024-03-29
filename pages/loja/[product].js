import Image from 'next/image';
import Head from "next/head";

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import NavigationHelper from "../../components/NavigationHelper";

import styles from "../../styles/Product.module.scss";

import { getProductByUID, getAllProductsUIDs } from '../../lib/database';

export default function Product({ product }) {
    const productName = product.name.replaceAll(" ", "%20").replaceAll("#", "").toUpperCase()
    const productCategory = product.category.toUpperCase()
    const wppURL = `https://wa.me/5521969000446?text=Olá,%20Fanfarra!%20Eu%20gostaria%20de%20realizar%20uma%20compra:%20${productCategory}%20${productName}.`

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
                            src={product.image_path}
                            alt='EDITAR ALT'
                            layout='fill'
                          />
                    </div>

                    <div className={styles.details}>
                        <h3>Home/Loja/{product.category.toUpperCase()}</h3>
                        <h2>{product.name}</h2>
                        <h5>R${product.price}</h5>
                        <p>{product.headline}</p>
                        <p id={styles.concept}>{product.concept}</p>
                        {product.status == "esgotado" ?
                            <button className={styles.esgotado}>ESGOTADO</button>
                            :
                            <a className={styles.disponivel} href={wppURL} target="_blank" rel="noreferrer">COMPRAR PELO WHATSAPP</a>
                        }
                        <p id={styles.warning}>*Em breve, vendas direto no site!</p>
                    </div>
                </div>

                <div className={styles.description}>
                    <hr />
                    <h4>Descrição do produto</h4>
                    <p>{product.description}</p>
                </div>
            </div>

            <NavigationHelper />
            <Footer />
        </>
    )
}

export async function getStaticPaths() {
    let paths = []
    const products = getAllProductsUIDs();

    products.forEach( (item) => {
        paths.push({
            params: {
                product: item.toString()
            }
        })
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const productUID = context.params.product;
    const product = getProductByUID(productUID);

    return {
        props: {
            product: product
        }
    }
}