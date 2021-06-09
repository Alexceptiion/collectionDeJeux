import React from "react";
import { Header } from "./components";
import * as ROUTES from './constants/routes';

export  function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Origo"/>
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Signin</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
