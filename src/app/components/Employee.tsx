import React from "react";
import Moment from "react-moment";

type Props = {
  employee: {
    id: string;
    name: string;
    last_name: string;
    birthday: number;
  };
};

export default function Employee({
  employee: { id, name, last_name, birthday },
}: Props) {
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{last_name}</td>
      <td>
        <Moment format="YYYY/MM/DD">{birthday}</Moment>
      </td>
    </tr>
  );
}
