import Link from 'next/link';
import Image from 'next/image';
import Head from "next/head";

import Header from "../components/Header"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation";

import styles from "../styles/Mart.module.scss";

import logoMart from "../public/images/logos/logo-mart.png";

export default function Mart() {
  return (
    <>
      <Head>
        <title>FFT - mArt</title>
      </Head>
      <Header />
      <div className={styles.martContainer}>
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <Image
              src={logoMart}
              alt='EDITAR ALT'
            />
          </div>
          <h3>MOVIMENTO ARTÍSTICO TRICOLOR</h3>
        </div>

        <div className={styles.text}>
          <p>
            <span className={styles.miniHeader}>A SOCIEDADE E O FUTEBOL</span>
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et
            justo congue, egestas augue id, malesuada tortor. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Curabitur eu auctor lacus. Quisque accumsan
            pharetra pulvinar. Phasellus accumsan, ante id elementum aliquet,
            elit ligula euismod ligula, sit amet hendrerit eros massa vel
            purus. Vestibulum vitae ligula sollicitudin, accumsan eros
            sodales, vehicula magna. Nam vel blandit tortor. Nunc mattis eget
            leo a sodales. Phasellus aliquet tristique nunc, in tempor elit
            tristique congue.
            <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et
            justo congue, egestas augue id, malesuada tortor. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Curabitur eu auctor lacus. Quisque accumsan
            pharetra pulvinar. Phasellus accumsan, ante id elementum aliquet,
            elit ligula euismod ligula, sit amet hendrerit eros massa vel
            purus. Vestibulum vitae ligula sollicitudin, accumsan eros
            sodales, vehicula magna. Nam vel blandit tortor. Nunc mattis eget
            leo a sodales. Phasellus aliquet tristique nunc, in tempor elit
            tristique congue.
          </p>
      
          <br />

          <p>
            <span>MISSÃO:</span>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et
            justo congue, egestas augue id, malesuada tortor. Orci varius
            natoque penatibus et magnis dis parturient montes. Phasellus
            aliquet tristique nunc, in tempor elit tristique congue.
            <br />
            <br />
            <span>VISÃO:</span>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et
            justo congue, egestas augue id, malesuada tortor. Orci varius
            natoque penatibus et magnis dis parturient montes. Phasellus
            aliquet tristique nunc, in tempor elit tristique congue.
            <br />
            <br />
            <span>VALORES:</span>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et
            justo congue, egestas augue id, malesuada tortor. Orci varius
            natoque penatibus et magnis dis parturient montes. Phasellus
            aliquet tristique nunc, in tempor elit tristique congue.
          </p>

          <br /><br /><br />

          <h2>FAÇA P<span id="arte">ARTE</span> DO MOVIMENTO!</h2>
          <p>
              @MOVIMENTOARTISTICOTRICOLOR
              <br />
              movimentoartisticotricolor@gmail.com
          </p>

        </div>
      </div>

      <Navigation />
      <Footer />
    </>
  )
}
