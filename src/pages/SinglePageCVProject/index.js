import styles from "./index.module.css"

export default function SinglePageCVProuect() {

    return(
        <div className={styles.page}>
            <hr className={styles.divider}/>
            <section className={styles.section}>
                <h1 className={styles.h1}>Jhonatan Rodolfo Morales Carrillo</h1>
                <h2 className={styles.h2}>Web Developer and RPA</h2>
                <h3 className={styles.h3}>14 South Street, Llanitos Downtown</h3>
                <h3 className={styles.h3}>Los Patios, Norte de Santander, Colombia</h3>
                <h3 className={styles.h3}>+57 000 0000</h3>
                <h3 className={styles.h3}>jhonatann989@gmail.com</h3>
            </section>
            <section className={styles.section}>
                <h2 className={styles.h2}>Skills</h2>
                <div className={styles.pillGroup}>
                    <span className={styles.pill}>HTML</span>
                    <span className={styles.pill}>Javascript</span>
                    <span className={styles.pill}>React JS</span>
                    <span className={styles.pill}>Node JS</span>
                    <span className={styles.pill}>Automation Anywhere</span>
                    <span className={styles.pill}>Power Automate Desktop</span>
                    <span className={styles.pill}>English (C1)</span>
                    <span className={styles.pill}>SQL (Basics)</span>
                    <span className={styles.pill}>C# (Basics)</span>
                </div>
            </section>
            <section className={styles.section}>
                <h2 className={styles.h2}>Education</h2>
                <h3 className={styles.institution}>Instituto Universitario de Tecnología Agroindustrial Región Los Andes</h3>
                <h3 className={styles.h3}>Engineer Degree</h3>
                <h3 className={styles.h3}>From September 2010 to July 2014</h3>
            </section>
            <section className={styles.section}>
                <h2 className={styles.h2}>Experience</h2>

                <h3 className={styles.institution}>Teleperformance</h3>
                <h3 className={styles.h3}>Semi Senior Developer</h3>
                <h3 className={styles.h3}>September 2023 - Today</h3>
                <ul>
                    <li><h4 className={styles.h4}>Power Automate Desktop</h4></li>
                    <li><h4 className={styles.h4}>C#</h4></li>
                    <li><h4 className={styles.h4}>Leadership</h4></li>
                </ul>

                <h3 className={styles.institution}>Teleperformance</h3>
                <h3 className={styles.h3}>Junior Developer</h3>
                <h3 className={styles.h3}>March 2021 - September 2023</h3>
                <ul>
                    <li><h4 className={styles.h4}>Automation Anywhere</h4></li>
                    <li><h4 className={styles.h4}>Google Apps Scripts</h4></li>
                    <li><h4 className={styles.h4}>Node JS</h4></li>
                </ul>

                <h3 className={styles.institution}>Inversiones en Soluciones de TI de Codigo Abierto SAS</h3>
                <h3 className={styles.h3}>Junior Developer</h3>
                <h3 className={styles.h3}>December 2019 - March 2021</h3>
                <ul>
                    <li><h4 className={styles.h4}>React JS</h4></li>
                    <li><h4 className={styles.h4}>REST</h4></li>
                    <li><h4 className={styles.h4}>Symfony</h4></li>
                </ul>
            </section>
        </div>
    )
}