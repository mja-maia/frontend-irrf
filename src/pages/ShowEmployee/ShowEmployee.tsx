import React from "react";
import { useSelector } from "react-redux";
import { Container } from "./styles";
import { RootState } from "../../store";
import { calcIRPF } from "../../services/calcIRPF";

const ShowEmployee: React.FC = () => {
  const { employees } = useSelector((state: RootState) => state.employees);

  return (
    <Container>
      <h2>Tabelas e cálculos do IRRF</h2>

      <p>
        A tabela do IR é um dos principais instrumentos para auxiliar os
        contribuintes na hora de enviar as informações fiscais para a Receita.
        Afinal, é nesse documento que constam as alíquotas do Imposto de Renda
      </p>

      <p>
        Isso quer dizer que é essa a fonte para você saber qual é o percentual
        que deve ser aplicado sobre os seus rendimentos. Portanto, na hora de
        fazer o cálculo e declarar seus rendimentos, ter essa tabela é
        fundamental para que você não envie nenhum dado errrado, e
        consequentemente, não caia na malha fina.
      </p>

      <h2>Seus funcionários</h2>

      <table>
        <tr>
          <th>Nome</th>
          <th>CPF</th>
          <th>Salário</th>
          <th>Desconto</th>
          <th>Dependentes</th>
          <th>Desconto IRPF</th>
        </tr>

        {employees.map((employee) => (
          <tr>
            <td>{employee.nome}</td>
            <td>{employee.cpf}</td>
            <td>{employee.salario}</td>
            <td>{employee.desconto}</td>
            <td>{employee.dependentes}</td>
            <td>{calcIRPF(employee)}</td>
          </tr>
        ))}
      </table>
    </Container>
  );
};

export default ShowEmployee;
