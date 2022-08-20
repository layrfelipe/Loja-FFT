import Header from "../components/Header"
import Footer from "../components/Footer"

import styles from "../styles/SobreNos.module.scss";

export default function SobreNos() {
  return (
    <>
      <Header />
      <div className={styles.sobreNosContainer}>
        <h1>Sobre nós</h1>
      </div>
      <Footer />
    </>
  )
}
