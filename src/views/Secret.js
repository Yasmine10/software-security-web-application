import React from "react";
import { Container } from "reactstrap";

import Loading from "../components/Loading";
import { withAuthenticationRequired } from "@auth0/auth0-react";

export const SecretComponent = () => {

  return (
    <Container className="mb-5">
          <h1 className="mb-4">Secret</h1>
          <p>You can only view this page when you're logged in.</p>
    </Container>
  );
};

export default withAuthenticationRequired(SecretComponent, {
  onRedirecting: () => <Loading />,
});
