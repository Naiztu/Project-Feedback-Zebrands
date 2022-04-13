import Axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [id_user, setId_User] = useState(1);
  const [user, setUser] = useState(null);
  const [idRol, setIdRol] = useState(3);

  useEffect(() => {
    async function loadUserFromCookies() {
      const data_empleado = Cookies.get("data");
      if (data_empleado) {
        setUser(data_empleado);
      }
    }
    loadUserFromCookies();
  }, []);

  const login = async (email, password) => {
    const { data: data_empleado } = await Axios.get(
      `${process.env.HOSTBACK}/empleado/${id_user}`,
      { email, password }
    );
    if (data_empleado) {
      console.log("Got token");
      Cookies.set("data", data_empleado, { expires: 60 });
      setUser(user);
      console.log("Got user", user);
    
    }
  };

  const logout = (email, password) => {
    Cookies.remove("data");
    setUser(null);
  };
  
  return (
    <UserContext.Provider value={{ user, setId_User, setIdRol, idRol }}>
      {children}
    </UserContext.Provider>
  );
};
