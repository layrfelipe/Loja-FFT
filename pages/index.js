import { useRef } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import NavigationHelper from "../components/NavigationHelper";

import styles from "../styles/Home.module.scss";

import logoBrasao from "../public/images/logos/logo-brasao.png";

import { getAllProducts } from '../lib/database';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export default function Home({ products }) {
  const swiperRef = useRef();

  return (
    <>
      <Head>
        <title>FFT - Início</title>
      </Head>
      
      <Header />

      <div className={styles.homeContainer}>
        <Swiper
          onBeforeInit={(swiper) => { swiperRef.current = swiper }}
          slidesPerView={1}
          spaceBetween={5}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          pagination={false}
          loop={true}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className={styles.mySwiper}
        >
          <SwiperSlide className={styles.slide} id={styles.slideOne}>
            <CaretLeft className={styles.caretLeft} color="white" size={50} onClick={() => swiperRef.current.slidePrev()}>Prev</CaretLeft>
            <CaretRight className={styles.caretRight} color="white" size={50} onClick={() => swiperRef.current.slideNext()}>Prev</CaretRight>
          </SwiperSlide>
          <SwiperSlide className={styles.slide} id={styles.slideTwo}>
            <CaretLeft className={styles.caretLeft} color="white" size={50} onClick={() => swiperRef.current.slidePrev()}>Prev</CaretLeft>
            <CaretRight className={styles.caretRight} color="white" size={50} onClick={() => swiperRef.current.slideNext()}>Prev</CaretRight>
          </SwiperSlide>
          <SwiperSlide className={styles.slide} id={styles.slideThree}>
            <CaretLeft className={styles.caretLeft} color="white" size={50} onClick={() => swiperRef.current.slidePrev()}>Prev</CaretLeft>
            <CaretRight className={styles.caretRight} color="white" size={50} onClick={() => swiperRef.current.slideNext()}>Prev</CaretRight>
          </SwiperSlide>
        </Swiper>
      </div>

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
                            src={product.image_path}
                            alt='EDITAR ALT'
                            width={1200}
                            height={1000}
                          />
                        </div>
                        <div className={styles.productInfo}>
                            <h2>{product.name.toUpperCase()}</h2>
                            <p>{product.headline}</p>
                            <h3 className={product.status == "esgotado" ? styles.esgotado : ""}>{product.status.toUpperCase()}</h3>
                        </div>
                      </a>
                    </Link>
                  </div>
                );
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
  const products = getAllProducts();

  return {
      props: {
          products: products
      }
  }
}