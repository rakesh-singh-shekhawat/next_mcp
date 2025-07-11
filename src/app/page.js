import Dashboard from "./pages/index";
import Image from "next/image";
import styles from "./page.module.css";
// import "fab-plugins-library/dist/fab-plugins-library.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <Dashboard />
      </div>
    </main>
  );
}
