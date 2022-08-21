import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from '../styles/Navigation.module.scss';

import posterCartola from '../public/images/extras/poster-cartola.jpg';
import posterLoja from '../public/images/extras/logo-com-bg-camo.jpg';
import posterAtaque from '../public/images/extras/ataque-maracana.jpg';

export default function Navigation() {

    const router = useRouter();

    return (
        <div className={styles.navigationContainer}>
            <Link href='/loja'>
                <a className={router.pathname == '/loja' ? styles.inactive : ''}>
                    <div className={styles.description}>
                        <h3>LOJA</h3>
                        <p>SAIBA MAIS...</p>
                    </div>

                    <div className={styles.navigationImageContainer}>
                        <Image
                            src={posterLoja}
                            alt="EDITAR ALT"
                        />
                    </div>
                </a>
            </Link>

            <Link href='/mart'>
                <a className={router.pathname == '/mart' ? styles.inactive : ''}>
                    <div className={styles.description}>
                        <h3>MOVIMENTO ARTÍSTICO TRICOLOR</h3>
                        <p>SAIBA MAIS...</p>
                    </div>

                    <div className={styles.navigationImageContainer}>
                        <Image
                            src={posterCartola}
                            alt="EDITAR ALT"
                        />
                    </div>
                </a>
            </Link>

            <Link href='/sobre-nos'>
                <a className={router.pathname == '/sobre-nos' ? styles.inactive : ''}>
                    <div className={styles.description}>
                        <h3>SOBRE A FFT</h3>
                        <p>SAIBA MAIS...</p>
                    </div>

                    <div className={styles.navigationImageContainer}>
                        <Image
                            src={posterAtaque}
                            alt="EDITAR ALT"
                        />
                    </div>
                </a>
            </Link>
        </div>
    )
}


