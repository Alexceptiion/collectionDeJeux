import React from "react";
import { Footer } from "../components";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Des questions? Nous Contacter</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Qui somme nous ?</Footer.Link>
          <Footer.Link href="#">Contacter nous</Footer.Link>
          <Footer.Link href="#">À propos</Footer.Link>
          <Footer.Link href="#">Aide</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Conditions d'utilisation</Footer.Link>
          <Footer.Link href="#">Emploi</Footer.Link>
          <Footer.Link href="#">Contrat Utilisateur</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Mention légales</Footer.Link>
          <Footer.Link href="#">Information d'entreprise</Footer.Link>
          <Footer.Link href="#">
            Politique relative à la protection des données personelles et aux
            cookies(vos droits à la protection des données personnelles)
          </Footer.Link>
          <Footer.Link href="#">Avis jeux vidéo</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break></Footer.Break>
      <Footer.Text>2021 Origo</Footer.Text>
    </Footer>
  );
}
