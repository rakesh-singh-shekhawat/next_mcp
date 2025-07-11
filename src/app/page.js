export const dynamic = "force-dynamic";
import Dashboard from "./pages/index";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <Dashboard />
      </div>
    </main>
  );
}
