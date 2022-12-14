import { useEffect, useState } from "react";
import { fetchEmployees } from "../../features/employees/employeesApi";
import EmployeeTable from "../components/EmployeeTable";
import { EmployeeType } from "../../types";

type Props = {};

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
