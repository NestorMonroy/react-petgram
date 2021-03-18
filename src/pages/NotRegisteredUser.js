import React, { Fragment } from "react";
import Context from "../Context";
import { UserForm } from "../components/userForm";

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <Fragment>
          <UserForm title='Registrarse' />
          <UserForm title='Iniciar sesión' />
        </Fragment>
      );
    }}
  </Context.Consumer>
);
