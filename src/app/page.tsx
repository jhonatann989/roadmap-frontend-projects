import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ol>
          <li><a href="./SinglePageCVProject">Single Page CV</a></li>
        </ol>
       </main>
    </div>
  );
}
