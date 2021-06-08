import React from "react";
import { Accordion } from "../components";
import OptForm from "../components/opt-form";
import faqsData from "../fixtures/faqs.json";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Questions fréquemment posées</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <Accordion.Item></Accordion.Item>

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
    </Accordion>
  );
}
