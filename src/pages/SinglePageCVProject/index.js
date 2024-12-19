import styles from "./index.module.css"

export default function SinglePageCVProuect() {

    return(
        <div className={styles.page}>
            <hr className={styles.divider}/>
            <section className={styles.section}>
                <h1 className={styles.h1}>Jhonatan Rodolfo Morales Carrillo</h1>
                <h2 className={styles.h2}>Web Developer and RPA</h2>
            </section>
            <section className={styles.section}>
                <h3 className={styles.h3}>14 South Street, Llanitos Downtown</h3>
                <h3 className={styles.h3}>Los Patios, Norte de Santander, Colombia</h3>
                <h3 className={styles.h3}>+573174000395</h3>
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
        </div>
    )
}