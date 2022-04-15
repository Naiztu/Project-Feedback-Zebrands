import Axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [id_user, setId_User] = useState(1);
  const [user, setUser] = useState(null);
  const [idRol, setIdRol] = useState(3);

  useEffect(async () => {
    if (id_user) {
      const res = await Axios.get(
        `${process.env.HOSTBACK}/empleado/${id_user}`
      );
      console.log(res);
      setUser(res.data.data_empleado);
    }
  }, [id_user]);
  function loginAuth(email, pass) {
    try {

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <UserContext.Provider value={{ user, setId_User, setIdRol, idRol }}>
      {children}
    </UserContext.Provider>
  );
};
