import React, { useState } from 'react';

export default function App() {
  // un solo estado
  // etiqueta <form>
  // un solo event handler
  // DRY: muchos evt.target.value
  // estilos

  const [user, setUser] = useState({
    nombre: '',
    apellido: '',
    edad: '',
  });

  function onInputChange(evt) {
    const value = evt.target.value;
    const inputName = evt.target.name;

    const newUserState = { ...user };
    newUserState[inputName] = value;
    setUser(newUserState);
  }

  function onSubmit(event) {
    event.preventDefault();
    console.log(
      `Your name is ${user.nombre} ${user.apellido} and you have ${user.edad} years`
    );
  }

  const formInputs = [
    {
      label: 'Nombre',
      name: 'nombre',
    },
    {
      label: 'Edad',
      name: 'edad',
    },
    {
      label: 'Apellido',
      name: 'apellido',
    },
  ];

  return (
    <form onSubmit={(evt) => onSubmit(evt)}>
      {formInputs.map((inputData) => (
        <div style={{ marginBottom: 4 }}>
          <label htmlFor={inputData.name} style={{ marginRight: 2 }}>
            {inputData.label}
          </label>
          <input name={inputData.name} type="text" onChange={onInputChange} />
        </div>
      ))}
      <button type="submit">Crear orden</button>
    </form>
  );
}
