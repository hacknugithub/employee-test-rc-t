import { useEffect, useState } from "react";
import { fetchEmployees } from "../../features/employees/employeesApi";
import EmployeeTable from "../components/EmployeeTable";

type Props = {};

type EmployeeType = {
  id: string;
  name: string;
  last_name: string;
  birthday: Date;
};

export default function Employees({}: Props) {
  const [employees, setEmployees] = useState<Array<EmployeeType>>([]);
  useEffect(() => {
    return () => {
      fetchEmployees().then((result) => {
        console.log(result);
        setEmployees(result);
      });
    };
  }, []);

  return (
    <div className="container-fluid d-flex">
      <div className="col-lg-12">
        <EmployeeTable data={employees} />
      </div>
    </div>
  );
}
