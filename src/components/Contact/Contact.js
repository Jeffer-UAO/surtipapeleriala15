import styles from "./Contact.module.scss";
import { FooterApp } from "../FooterApp";

export function Contact(props) {
  const { about } = props;

  return (
    <>
      <div className={styles.container}>
        <h1>SURTIPAPELERIA LA 15</h1>
        <div className={styles.phone}>
          <h5>Líneas de atención</h5>
          <ul>
            <li>(602) 881 08 92</li>
            <li>(+57) 310 390 06 66</li>
          </ul>
        </div>

        <div className={styles.adress}>
          <h5>Ubicación:</h5>
          <p>Cll 15 # 9-64, Centro de Cali</p>
        </div>
      </div>
      <FooterApp />
    </>
  );
}
