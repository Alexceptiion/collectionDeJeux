import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Origo" src="images/misc/OrigoLogoFigma.png" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>S'identifier</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
