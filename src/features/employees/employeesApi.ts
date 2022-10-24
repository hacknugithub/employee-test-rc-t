import axios from "axios";

type EmployeeType = {
  id: string;
  name: string;
  last_name: string;
  birthday: Date;
};

export async function fetchEmployees(): Promise<Array<EmployeeType>> {
  const url: string = process.env.REACT_APP_API_URL as string;
  // console.log(url);
  const result = await axios.get(`${url}/employees/manuel_guerrero`);
  // console.log(result.data.data.employees);
  return result.data.data.employees as Array<EmployeeType>;
}
