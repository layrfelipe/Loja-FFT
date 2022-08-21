import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from '../styles/Header.module.scss';
import logo from '../public/images/logos/logo-brasao.png'
import burger from '../public/images/social/burger.svg';

export default function Header() {

    const router = useRouter();

    return (
        <div className={styles.headerContainer}>
            <Link href='/'>
                <a>
                    <div className={styles.logoAndTextContainer}>
                        <div className={styles.logoContainer}>
                            <Image
                                src={logo}
                                alt='EDITAR ALT'
                            />
                        </div>
                        <p>FANFARRA<br />FESTIVA<br />TRICOLOR</p>
                    </div>
                </a>
            </Link>

            <ul className={styles.menu}>
                <Link href='/'><li className={router.pathname == '/' ? styles.active : styles.inactive}>Início</li></Link>
                <Link href='/loja'><li className={router.pathname == '/loja' ? styles.active : styles.inactive}>Loja</li></Link>
                <Link href='/mart'><li className={router.pathname == '/mart' ? styles.active : styles.inactive}>mArt</li></Link>
                <Link href='/sobre-nos'><li className={router.pathname == '/sobre-nos' ? styles.active : styles.inactive}>Sobre nós</li></Link>
            </ul>

            <div className={styles.buttonContainer}>
                <Image src={burger} alt="EDITAR ALT" layout='responsive'/>
            </div>
        </div>
    )
}


