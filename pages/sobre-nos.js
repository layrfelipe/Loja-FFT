import Image from "next/image";
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

import styles from "../styles/SobreNos.module.scss";

import logoFluSimples from "../public/images/logos/logo-flu-simples.png";
import trompete from "../public/images/logos/logo-trompete.png";
import trombeta from "../public/images/logos/logo-trombeta.png";
import estandarte from "../public/images/logos/logo-estandarte.png";
import logoCoroaCamo from "../public/images/logos/logo-coroa-camo.png";
import textura from "../public/images/extras/textura-logos-brasao.png";

export default function SobreNos() {
  return (
    <>
      <Head>
        <title>FFT - Sobre nós</title>
      </Head>
      <Header />
      <div className={styles.sobreNosContainer}>
        <div className={styles.header}>

          <div class={styles.logoContainer}>
            <Image src={logoFluSimples} alt="EDITAR ALT"/>
            <p className={styles.below}>FLUMINENSE<br/>FOOTBALL<br/>CLUB</p>
          </div>

          <p className={styles.plus}>+</p>

          <div class={styles.logoContainer}>
            <p className={styles.above}>TROMPETE</p>
            <Image src={trompete} alt="EDITAR ALT"/>
          </div>

          <p className={styles.plus}>+</p>

          <div className={styles.logoContainer}>
            <Image src={trombeta} alt="EDITAR ALT"/>
            <p className={styles.below}>TROMBETA</p>
          </div>

          <p className={styles.plus}>+</p>

          <div className={styles.logoContainer}>
            <p className={styles.above}>ESTANDARTE</p>
            <Image src={estandarte} alt="EDITAR ALT"/>
          </div>
        </div>

        <div className={styles.textContainer}>
          <p>
            A FANFARRA FESTIVA TRICOLOR orem ipsum dolor sit amet, consectetur adipiscing elit. In et
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
            <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et
            justo congue, egestas augue id, malesuada tortor. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Curabitur eu auctor lacus.
            <br /> <br /> 
            Quisque accumsan
            pharetra pulvinar. Phasellus accumsan, ante id elementum aliquet,
            elit ligula euismod ligula, sit amet hendrerit eros massa vel
            purus. Vestibulum vitae ligula sollicitudin, accumsan eros
            sodales, vehicula magna. Nam vel blandit tortor. Nunc mattis eget
            leo a sodales. Phasellus aliquet tristique nunc, in tempor elit
            tristique congue.
            <br /> <br />
            Pelo Fluminense.
            <br />
            Pela festa.
            <br />
            Somos a <b>#FFT</b>
            <br />
          </p>
        </div>

        <div className={styles.logos}>
          <div className={styles.logoContainer}>
            <Image src={logoCoroaCamo} alt="EDITAR ALT"/>
          </div>

          <div className={styles.logoContainer}>
            <Image src={textura} alt="EDITAR ALT"/>
          </div>
        </div>
      </div>
      <Navigation />
      <Footer />
    </>
  )
}