import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import styles from "./auth-form.module.css";

type AuthFormProps = {
  mode: "login" | "register";
};

export function AuthForm({ mode }: AuthFormProps) {
  const isLogin = mode === "login";
  const title = isLogin ? "Login" : "Register";

  return (
    <form className={styles.form}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.fields}>
        <InputField
          autoComplete="email"
          label="Email"
          name={`${mode}-email`}
          type="email"
        />
        <InputField
          autoComplete={isLogin ? "current-password" : "new-password"}
          label="Password"
          name={`${mode}-password`}
          type="password"
        />
        {!isLogin && (
          <InputField
            autoComplete="new-password"
            label="Confirm password"
            name="register-password-confirmation"
            type="password"
          />
        )}
      </div>
      <Button type="submit">{title}</Button>
    </form>
  );
}
