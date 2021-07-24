import React from "react";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "./styles";

export const Header: React.FC = () => {
  const history = useHistory();

  const handleMenuClick = useCallback(
    (page) => {
      history.push(page);
    },
    [history]
  );

  return (
    <Container>
      <span onClick={() => handleMenuClick("/add")}>Registrar funcionário</span>
      <span onClick={() => handleMenuClick("/")}>
        Tabelas e cálculos do IRRF
      </span>
    </Container>
  );
};
