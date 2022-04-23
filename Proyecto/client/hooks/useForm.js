import { useState } from "react";

export const useForm = () => {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState([]);

  const setItem = (init, expresion) => {
    setData((prevState) => [
      ...prevState,
      {
        ...init,
        id: prevState.length,
        expresion,
      },
    ]);
  };

  const handle = (e) => {
    const newData = [...data];
    newData[e.target.id][e.target.name] = e.target.value;
    setData(newData);
  };

  const handleBlur = (e) => {
    handle(e);
    setErrors(validateForm(e.target.id, errors));
  };

  function checkErrors() {
    const newErrors = data
      .map((item) => {
        return validateForm(item.id, [])[0];
      })
      .filter((i) => i != undefined);
    setErrors(newErrors);
    return newErrors.length;
  }

  const validateForm = (index, errores) => {
    const { expresion, descripcion_respuesta, id, message } = data[index]
    let errs = errores.filter((item) => item.id != id);

    if (!descripcion_respuesta.trim()) {
      errs = errs.concat([
        { id, message: "No puedes dejar en blanco el campo" },
      ]);
    } else if (!expresion.test(descripcion_respuesta.trim())) {
      errs = errs.concat([{ id, message }]);
    }
    return errs;
  };

  return [data, errors, handle, handleBlur, setItem, checkErrors];
};
