import React from "react";

import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <div className="App">
      <h1 data-testid='something'>LoginForm</h1>
      <ContactForm />
    </div>
  );
}
