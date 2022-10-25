import axios from "axios";
import { EmployeeType, EmployeeSubmitForm } from "../../types";

export async function fetchEmployees(): Promise<Array<EmployeeType>> {
  const url: string = process.env.REACT_APP_API_URL as string;
  const result = await axios.get(`${url}/employees/manuel_guerrero`);
  // console.log(result.data.data.employees);
  return result.data.data.employees as Array<EmployeeType>;
}

export async function createEmployee(
  data: EmployeeSubmitForm
): Promise<EmployeeType> {
  const url: string = process.env.REACT_APP_API_URL as string;
  const result = await axios.post(`${url}/employees/manuel_guerrero`, data);
  console.log(result.data.data);
  return result.data.data as EmployeeType;
}
