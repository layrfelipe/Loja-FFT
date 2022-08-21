import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Footer.module.scss';

import logoCoroa from '../public/images/logos/logo-coroa.png';

import logoInstagram from '../public/images/social/instagram.svg';
import logoTwitter from '../public/images/social/twitter.svg';

export default function Header() {

    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerMainContent}>
                <div className={styles.leftSection}>
                    <div className={styles.logoContainer}>
                        <Link href='/'>
                            <a>
                                <Image src={logoCoroa} alt='EDITAR ALT' />
                            </a>
                        </Link>
                    </div>
                </div>
                
                <div className={styles.rightSection}>
                    <h2>#CULTURADEARQUIBANCADA</h2>
                    <p>
                        AO ADQUIRIR QUALQUER PRODUTO DA FFT VOCÊ ESTÁ CONTRIBUINDO PARA A
                        PROMOÇÃO DO FUTEBOL COMO CULTURA E DA ARQUIBANCADA COMO EXPRESSÃO
                        POPULAR, DE AFETOS E DE ARTE.
                    </p>
                    <h3>SOMOS A FFT.<br /> #PELOFLUMINENSE&nbsp;&nbsp;#PELAFESTA</h3>
                    <h4>FALE COM A GENTE</h4>

                    <div className={styles.socialContainer}>
                        <a href="https://instagram.com/fanfarrafestivatricolor" target='_blank' rel="noreferrer">
                            <div className={styles.logoAndTextContainer}>
                                <div className={styles.logoContainer}>
                                    <Image src={logoInstagram} alt="EDITA ALT" />
                                </div>
                                /FANFARRAFESTIVATRICOLOR
                            </div>
                        </a>


                        <a href="https://twitter.com/fanfarra_ft" target='_blank' rel="noreferrer">
                            <div className={styles.logoAndTextContainer}>
                                <div className={styles.logoContainer}>
                                    <Image src={logoTwitter} alt="EDITA ALT" />
                                </div>
                                /FANFARRA_FT
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.copyrights}>
                <p>2022 | Todos os direitos reservados © Fanfarra Festiva Tricolor</p>
                <p>Site desenvolvido por <a href="https://linkedin.com/in/layr-felipe/" target="_blank" rel="noreferrer">Layr Felipe</a></p>
            </div>
        </div>
    )
}