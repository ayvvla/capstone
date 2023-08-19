"use client";
import React, { useState } from "react";
import signUp from "@/firebase/signup";
import signIn from "@/firebase/signin";
import { useRouter } from "next/navigation";
import styles from "./signup.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [option, setOption] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password != confirmPassword) {
      toast.error("Password does not match")
    }
    const { result, error } = await signUp(email, password);
    if (error) {
      return console.log(error);
    }
    toast.success("Sign up successful");

    return setOption(1);
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { result, error } = await signIn(email, password);

    if (error) {
      toast.error("Email or Password is incorrect");
      console.log(error);
      return;
    }
    console.log(result);
    toast.success("Sign in Successful");
    return router.push("/");
  };

  const handleForget = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.body}>
      <div className={styles.app}>
        <div className={styles.form}>
          <header className={styles.header}>
            <div
              className={` ${styles.headings}   ${
                option === 1
                  ? styles.headingssignin
                  : option === 2
                  ? styles.headingssignup
                  : styles.headingsforgot
              } `}
            >
              <span className={styles.span}>Sign in to your account</span>
              <span className={styles.span}>Create an account</span>
              <span className={styles.span}>Reset your password</span>
            </div>
          </header>
          <ul className={styles.options}>
            <li
              className={`${option === 1 ? styles.active : ""}`}
              onClick={() => setOption(1)}
            >
              Sign in
            </li>
            <li
              className={`${option === 2 ? styles.active : ""}`}
              onClick={() => setOption(2)}
            >
              Sign up
            </li>
            <li
              className={`${option === 3 ? styles.active : ""}`}
              onClick={() => setOption(3)}
            >
              Forgot
            </li>
          </ul>

          <form
            className={styles.accountform}
            onSubmit={
              option === 1
                ? handleSignIn
                : option === 2
                ? handleSignUp
                : handleForget
            }
          >
            <div
              className={` ${styles.accountformfields}  ${
                option === 1
                  ? styles.signin
                  : option === 2
                  ? styles.signup
                  : styles.forgot
              }`}
            >
              <input
                className={styles.input}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                type="email"
                placeholder="E-mail"
                required
              />
              <input
                className={styles.input}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required={option === 1 || option === 2 ? true : false}
                disabled={option === 3 ? true : false}
              />
              <input
                className={styles.input}
                onChange={(e) => setConfirmPassword(e.target.value)}
                id="repeat-password"
                name="repeat-password"
                type="password"
                placeholder="Repeat password"
                required={option === 2 ? true : false}
                disabled={option === 1 || option === 3 ? true : false}
              />
            </div>
            {errorMessage ? (
              <small className={styles.error}>password does not match</small>
            ) : (
              <div></div>
            )}
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            <button className={styles.btnsubmitform} type="submit">
              {option === 1
                ? "Sign in"
                : option === 2
                ? "Sign up"
                : "Reset password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
