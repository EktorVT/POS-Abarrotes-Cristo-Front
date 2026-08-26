import Button from "@/components/ui/Button/Button";
import styles from "./Login.module.css";
import Input from "@/components/ui/Input/Input";
import { useState } from "react";
import { Eye, EyeOff, Lock, MoveRight, User } from "lucide-react";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const verifyData = () => {
    if (username === "" || password === "") {
      setErrorMessage("Username or password must not be empty");
      return;
    }

    setErrorMessage("");
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Abarrotes Cristo</h1>
        <h2 className={styles.subtitle}>Log In to continue</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            verifyData();
          }}
        >
          <label className={styles.label} htmlFor="username">
            Username
          </label>
          <Input
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            value={username}
            icon={<User />}
          />

          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            value={password}
            icon={<Lock />}
            rightElement={
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((previous) => !previous)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            }
          ></Input>
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}

          <div className={styles.buttonContainer}>
            <Button className={styles.button} type="submit">
              LogIn <MoveRight className={styles.buttonIcon} />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
