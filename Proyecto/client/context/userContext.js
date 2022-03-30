import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id_empleado: 1,
    nombre: "Alan",
    apellido_paterno: "Brito",
    apellido_materno: "Juarez",
    nivel_general: 3.1,
    nivel_craft: 3.1,
    nivel_business: 3.1,
    nivel_people: 3.2,
    correo: "alanBrito@zeb.mx",
    equipo: "ZeCore Client",
    chapterId: 1,
    img: "/assets/avatar.jpg",
    id_rol: 3,
  });
  const setIdRol = (_id_rol) => {
    setUser({ ...user, id_rol: _id_rol });
  };
  return (
    <UserContext.Provider value={{ user, setIdRol }}>
      {children}
    </UserContext.Provider>
  );
};
