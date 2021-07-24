import { removeDotsAndDash } from "../../utils/removeDotsAndDash";

export function typedAction<T extends string>(type: T): { type: T };
export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P
): { type: T; payload: P };
export function typedAction(type: string, payload?: any) {
  return { type, payload };
}

export interface Employee {
  nome: string;
  cpf: string;
  salario: number;
  desconto: number;
  dependentes: number;
}

type EmployeesState = {
  employees: Employee[];
};

const initialState: EmployeesState = {
  employees: [
    {
      nome: "Letícia Aurora Farias",
      cpf: "936.938.039-60",
      salario: 998,
      desconto: 74.85,
      dependentes: 2,
    },
    {
      nome: "Edson Thiago Drumond",
      cpf: "748.517.476-24",
      salario: 1045,
      desconto: 78.38,
      dependentes: 1,
    },
    {
      nome: "Fátima Elza Tereza Castro",
      cpf: "701.118.872-08",
      salario: 5500,
      desconto: 628.95,
      dependentes: 0,
    },
    {
      nome: "Sandra Giovanna Drumond",
      cpf: "715.890.756-25",
      salario: 4522,
      desconto: 492.03,
      dependentes: 3,
    },
    {
      nome: "Valentina Clara Nunes",
      cpf: "101.151.404-41",
      salario: 10000,
      desconto: 713.1,
      dependentes: 4,
    },
  ],
};

export const setEmployee = (employee: Employee) => {
  return typedAction("employee/SET_EMPLOYEE", employee);
};

export const updateEmployee = (employee: Employee) => {
  return typedAction("employee/UPDATE_EMPLOYEE", employee);
};

export const removeEmployee = (cpf: string) => {
  return typedAction("employee/REMOVE_EMPLOYEE", cpf);
};

type EmployeeAction = ReturnType<
  typeof setEmployee | typeof updateEmployee | typeof removeEmployee
>;

export function employeeReducer(
  state = initialState,
  action: EmployeeAction
): EmployeesState {
  switch (action.type) {
    case "employee/SET_EMPLOYEE": {
      const newEmployeesArray = [...state.employees, action.payload];
      return {
        ...state,
        employees: newEmployeesArray,
      };
    }
    case "employee/UPDATE_EMPLOYEE": {
      const employeeIndex = state.employees.findIndex(
        (item) =>
          removeDotsAndDash(item.cpf) === removeDotsAndDash(action.payload.cpf)
      );

      const employees = state.employees;
      employees[employeeIndex] = action.payload;

      return {
        ...state,
        employees,
      };
    }
    case "employee/REMOVE_EMPLOYEE": {
      const employeeIndex = state.employees.findIndex(
        (item) =>
          removeDotsAndDash(item.cpf) === removeDotsAndDash(action.payload)
      );
      state.employees.splice(employeeIndex, 1);

      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
