import { createContext, useContext, useState } from "react";

export const AsignarContext = createContext();

export const useAsignar = () => {
  return useContext(AsignarContext);
};

export const UserProvider = ({ children }) => {
  const [listAsignar, setAsignacion] = useState([]);
  const setIdRol = (_id_rol) => {
    setUser({ ...user, id_rol: _id_rol });
  };
  return (
    <UserContext.Provider value={{ user, setIdRol }}>
      {children}
    </UserContext.Provider>
  );
};
