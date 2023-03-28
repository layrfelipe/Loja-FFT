import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from "react";

import styles from '../styles/Header.module.scss';
import logo from '../public/images/logos/logo-brasao.png'
import burger from '../public/images/social/burger.svg';

export default function Header() {

    const router = useRouter();

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerBar}>
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

                <div className={styles.buttonContainer} onClick={handleClick}>
                    <Image src={burger} alt="EDITAR ALT" layout='responsive'/>
                </div>
            </div>

            <div className={open ? styles.burgerMenuOpen : styles.burgerMenuClosed}>
                <ul>
                    <li><Link href='/'>Início</Link></li>
                    <li><Link href='/loja'>Loja</Link></li>
                    <li><Link href='/mart'>mArt</Link></li>
                    <li><Link href='/sobre-nos'>Sobre nós</Link></li>
                </ul>
            </div>
        </div>
    )
}


