import React from "react";
import { Accordion, OptForm } from "../components";
import faqsData from "../fixtures/faqs";

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
        <OptForm.Input placeholder="Email address"  />
        <OptForm.Button>S'incrire Maintenant</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Prêt à démarrer? Entrez votre email.
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
