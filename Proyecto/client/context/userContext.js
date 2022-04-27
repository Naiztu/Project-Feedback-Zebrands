import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { currentEmpleado } from "../services/empleado";
import { getAuth } from "../services/login";

export const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  async function loadUserFromCookies() {
    const token = Cookies.get("token");
    if (token) {
      try {
        const data = await currentEmpleado();
        setUser(data.user);
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    loadUserFromCookies();
  }, []);

  async function loginAuth(email, password) {
    const body = { email, password };
    try {
      const data = await getAuth(body);
      Cookies.set("token", data.token);
      api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      setUser(data.user);

      if (data.user.id_rol === 1) {
        router.push("/lead");
      } else router.push("/user");
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  async function logoutAuth() {
    setUser(null);
    Cookies.remove("token");
    delete api.defaults.headers.Authorization;
    router.push("/");
  }

  return (
    <UserContext.Provider
      value={{ user, loginAuth, logoutAuth, setUser, isAuthenticated: !!user }}
    >
      {children}
    </UserContext.Provider>
  );
};
