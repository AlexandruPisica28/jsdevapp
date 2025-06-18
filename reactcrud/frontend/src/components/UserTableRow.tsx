
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";
import { deleteUser } from "../services/api";
import { API_URL } from "../config";

import type { User } from "../types/User";

interface UserTableRowProps {
  obj: User;
}

const UserTableRow = (props: UserTableRowProps) => {
  //console.log(props.obj);
  const {
    id,
    nume,
    prenume,
    email,
    telefon,
    cnp,
    datanastere,
    poza,
  } = props.obj;
  const styleImg = {
    maxWidth: 150,
    width: "100%",
  };
  const handleDeleteUser = () => {
    deleteUser(id)
      .then((res) => {
        if (res.status === 200) {
          alert("User successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch(() => alert("Something went wrong"));
  };

  return (
    <tr>
      <td>{nume}</td>
      <td>{prenume}</td>
      <td>{email}</td>
      <td>{telefon}</td>
      <td>{cnp}</td>
      <td>{format(parseISO(datanastere), "yyyy-MM-dd")}</td>
      <td>
        <img style={styleImg} src={API_URL+'/uploads/'+poza} alt={nume} />
      </td>
      <td>
        <Link className="edit-link btn btn-info btn-sm" to={"/edit-user/" + id}>
          Edit
        </Link>
        <Button onClick={handleDeleteUser} size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default UserTableRow;