import React from "react";
import Layout from "layout";
import Contacts from "components/Contacts";
import useInitializeApp from "hooks/useInitializeApp";

function App() {
  useInitializeApp();

  return (
    <Layout>
      <Contacts />
    </Layout>
  );
}

export default App;
