import { AuthForm } from "@/components/auth-form";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.forms} aria-label="Account access">
        <AuthForm mode="login" />
        <AuthForm mode="register" />
      </section>
    </main>
  );
}
