import styles from "../css/DownFooter.module.css";

function DownFooter(params) {
  return (
    <footer className={styles.footerDistributed}>
      <div className={styles.footerLeft}>
        <h3>
          SGA<span>OM</span>
        </h3>
        <p className={styles.footerCompanyName}>SGAOM © 2023</p>
      </div>

      <div className={styles.footerCenter}>
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>444 S. Cedros Ave</span>Tuxtla Gutierrez, Chiapas
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+1.555.555.5555</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="" className={styles.correo}> soportesgaom@gmail.com</a>
          </p>
        </div>
      </div>

      <div className={styles.footerRight}>
        <p className={styles.footerCompanyAbout}>
          <span>Acerca de la Compañia</span>
          SGAOM es una plataforma integral diseñada para gestionar de manera
          eficiente y efectiva todos los aspectos relacionados con la
          planificación, ejecución y seguimiento de proyectos de obras públicas.
        </p>
      </div>
    </footer>
  );
}

export default DownFooter;
