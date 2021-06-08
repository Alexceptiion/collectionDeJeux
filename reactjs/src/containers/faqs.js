import React from "react";
import { Accordion } from "../components";
import faqsData from "../fixtures/faqs.json";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Questions fréquemment posées</Accordion.Title>
    </Accordion>
  );
}