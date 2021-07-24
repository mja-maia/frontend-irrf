import { Employee } from "../store/ducks/employees";

export const calcIRPF = ({
  salario,
  desconto,
  dependentes,
}: Employee): Number => {
  const REDUCAO_DEPENDENTE = 164.56;
  const salarioBase = salario - desconto - REDUCAO_DEPENDENTE * dependentes;
  let salarioLiquido = 0;

  if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    salarioLiquido = salarioBase * 0.075 - 142.8;
  } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    salarioLiquido = salarioBase * 0.15 - 354.8;
  } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    salarioLiquido = salarioBase * 0.225 - 636.13;
  } else if (salarioBase > 4664.68) {
    salarioLiquido = salarioBase * 0.275 - 869.36;
  }

  return Math.round(salarioLiquido * 100) / 100;
};
