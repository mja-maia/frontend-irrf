import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { Container } from "./styles";

import {
  setEmployee,
  Employee,
  updateEmployee,
} from "../../store/ducks/employees";
import { useParams } from "react-router-dom";
import { RootState } from "../../store";

interface FormParams {
  cpf: string;
}

const Form: React.FC = () => {
  const { cpf } = useParams<FormParams>();
  const { employees } = useSelector((state: RootState) => state.employees);

  const [employee, setEmployeeObj] = useState<Employee>({
    nome: "",
    salario: 0,
    dependentes: 0,
    cpf: "",
    desconto: 0,
  });
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const employeeObj = {
      ...employee,
      [e.target.name]: e.target.value,
    };
    setEmployeeObj(employeeObj);
  };

  const handleSubit = useCallback(() => {
    if (cpf) {
      dispatch(updateEmployee(employee));
      toast.success("Empregado atualizado com sucesso!");
      return;
    }
    dispatch(setEmployee(employee));
    toast.success("Empregado inserido com sucesso!");
  }, [employee, dispatch, cpf]);

  useEffect(() => {
    const searchedEmployee = employees.find(
      (item) => item.cpf.replaceAll("-", "").replaceAll(".", "") === cpf
    );

    if (searchedEmployee) {
      setEmployeeObj(searchedEmployee);
    }
  }, [cpf, employees]);

  return (
    <Container>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nome
          </label>
          <input
            name="nome"
            className="form-control"
            id="name"
            value={employee?.nome}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cpf" className="form-label">
            CPF
          </label>
          <input
            name="cpf"
            className="form-control"
            id="cpf"
            value={employee?.cpf}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="salary" className="form-label">
            Salário Bruto
          </label>
          <input
            type="number"
            name="salario"
            className="form-control"
            id="salary"
            value={employee?.salario}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="discount" className="form-label">
            Desconto da previdência
          </label>
          <input
            type="number"
            name="desconto"
            className="form-control"
            id="discount"
            value={employee?.desconto}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="dependents" className="form-label">
            Número de dependentes
          </label>
          <input
            name="dependentes"
            min={0}
            type="number"
            className="form-control"
            id="dependents"
            value={employee?.dependentes}
            onChange={handleInputChange}
          />
        </div>

        <button type="button" onClick={handleSubit} className="btn btn-primary">
          Adicionar
        </button>
      </form>
    </Container>
  );
};

export default Form;
