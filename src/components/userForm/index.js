import React from "react";
import { useImputValue } from "../../hooks/useInputValue";
import { Error, Form, Input, Title } from "./stlyes";

export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useImputValue("");
  const password = useImputValue("");


  return (
    <>
      <Form disabled={disabled} >
        <Title> {title} </Title>
        <Input disabled={disabled} placeholder='Email' {...email} />
        <Input
          disabled={disabled}
          placeholder='Contraseña'
          type='password'
          {...password}
        />
        <button disabled={disabled}> {title}aca </button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};
