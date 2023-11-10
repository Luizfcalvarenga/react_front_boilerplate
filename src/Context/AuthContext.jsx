import { createContext, useEffect, useState } from "react";
import { api } from "../Services/api";

export const userToken = () => window.localStorage.getItem("@app/token");
export const AuthContext = createContext({});
export function AuthContextProvider(props) {
  const [user, setUser] = useState();

  const isAuthenticated = () => userToken() !== null;

  async function getUserInfo(requestBody) {
    if (isAuthenticated()) {
      try {
        const response = await api.get("/api/v1/users/me", {
          headers: {
            Authorization: `Bearer ${userToken()}`,
            uid: window.localStorage.getItem("@app/uid"),
            client: window.localStorage.getItem("@app/client"),
            "access-token": window.localStorage.getItem("@app/token"),
          }
        });
        const user = response.data;
        setUser(user);
      } catch {
        signOutUser();
      }
    }
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  async function signInUser(email, password) {
    const requestBody = {
      email,
      password
    };
    try {
      const response = await api.post("/api/v1/auth/sign_in", requestBody);
      if (response) {
        window.localStorage.setItem("@app/token", response.headers["access-token"]);
        window.localStorage.setItem("@app/uid", response.headers["uid"]);
        window.localStorage.setItem("@app/client", response.headers["client"]);
        window.localStorage.setItem("@app/expiry", response.headers["expiry"]);
        await getUserInfo(requestBody);
        window.location.href = "/";
      } else {
        alert("Ocorreu um erro no seu login");
      }
    } catch {
      alert("Ocorreu um erro no seu login");

    }
  }

  async function signUpUser(email, password) {
    const requestBody = { email, password};
    try {
      const response = await api.post("/api/v1/auth", requestBody);
      if (response) {
        window.localStorage.setItem(
          "@app/token",
          response.headers["access-token"]
        );
        window.localStorage.setItem("@app/uid", response.headers["uid"]);
        window.localStorage.setItem("@app/client", response.headers["client"]);
        window.localStorage.setItem("@app/expiry", response.headers["expiry"]);
        await getUserInfo();
        window.location.href = "/";
      } else {
        alert("Ocorreu um erro no seu cadastro");
      }
    } catch (e) {
      alert("deu ruim")

    }
  }

  async function signOutUser() {
    setUser(null);
    window.localStorage.removeItem("@app/token");
    window.localStorage.removeItem("@app/uid");
    window.localStorage.removeItem("@app/client");
    window.localStorage.removeItem("@app/expiry");
    window.location = "/"
  }

  return (
    <AuthContext.Provider
      value={{ user, signInUser, isAuthenticated, signOutUser, signUpUser }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
