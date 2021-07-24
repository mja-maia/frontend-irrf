import { calcIRPF } from "./calcIRPF";

describe("Calc IRPF", () => {
  test("Deve retornar zero porque esta abaixo da aliquota minima", () => {
    const employee = {
      nome: "Edson Thiago Drumond",
      cpf: "748.517.476-24",
      salario: 1045,
      desconto: 78.38,
      dependentes: 1,
    };

    expect(calcIRPF(employee)).toBe(0);
  });

  test("Deve retornar 1503.52 porque esta acima da aliquota minima", () => {
    const employee = {
      nome: "Valentina Clara Nunes",
      cpf: "101.151.404-41",
      salario: 10000,
      desconto: 713.1,
      dependentes: 4,
    };

    expect(calcIRPF(employee)).toBe(1503.52);
  });
});
