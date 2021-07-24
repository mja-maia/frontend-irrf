import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "./styles";
import { RootState } from "../../store";
import { removeEmployee } from "../../store/ducks/employees";
import { calcIRPF } from "../../services/calcIRPF";
import { useHistory } from "react-router-dom";
import { removeDotsAndDash } from "../../utils/removeDotsAndDash";

const ShowEmployee: React.FC = () => {
  const { employees } = useSelector((state: RootState) => state.employees);
  const history = useHistory();
  const dispatch = useDispatch();

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
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Salário</th>
            <th>Desconto</th>
            <th>Dependentes</th>
            <th>Desconto IRPF</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.cpf}>
              <td>{employee.nome}</td>
              <td>{employee.cpf}</td>
              <td>{employee.salario}</td>
              <td>{employee.desconto}</td>
              <td>{employee.dependentes}</td>
              <td>{calcIRPF(employee)}</td>
              <td>
                <button
                  onClick={() =>
                    history.push(`/form/${removeDotsAndDash(employee.cpf)}`)
                  }
                  className="btn btn-primary"
                >
                  Editar
                </button>
                <button
                  onClick={() => dispatch(removeEmployee(employee.cpf))}
                  className="btn btn-danger"
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default ShowEmployee;
