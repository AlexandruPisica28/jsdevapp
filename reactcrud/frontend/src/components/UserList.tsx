import  { useState, useEffect } from "react";

import { Table } from "react-bootstrap";
import UserTableRow from "./UserTableRow";
import { getUsers } from "../services/api";
import type { User } from "../types/User";
const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    console.log("primesc datele");
    getUsers()
      .then(({ data }) => {
        console.log(data);
        setUsers(data['data'] );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DataTable = () => {
    return users.map((res, i) => {
      return <UserTableRow obj={res} key={i} />;
    });
  };

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nume</th>
            <th>Prenume</th>
            <th>Email</th>
            <th>Telefon</th>
            <th>CNP</th>
            <th>Data nastere</th>
            <th>Poza</th>
            <th>Actiuni</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};

export default UserList;