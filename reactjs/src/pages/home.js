import React from "react";
import { Feature, OptForm  } from "../components";
import { HeaderContainer } from "../containers/header";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Votre bibilothèque et plus.</Feature.Title>
          <Feature.SubTitle>Noter, Commentez n'importe où.</Feature.SubTitle>
        </Feature>
        <OptForm>
          <OptForm>
            <OptForm.Input placeholder="Email" />
            <OptForm.Input placeholder="Pseudo" />
            <OptForm.Input placeholder="Mot de passe" />
            <OptForm.Button>S'inscrire Maintenant</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Prêt à démarrer? Entrez les informations pour créer votre compte.
            </OptForm.Text>
          </OptForm>
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
