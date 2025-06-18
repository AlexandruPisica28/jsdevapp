// EditUser Component for update user data

// Import Modules
import  { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateUser,getUserById } from "../services/api";
import type { User } from "../types/User";
import { format, parseISO } from "date-fns";
import UserForm from "./UserForm";

// EditUser Component
const EditUser = () => {
  const [formValues, setFormValues] = useState({
    id: "",
    nume: "",
    prenume: "",
    email: "",
    telefon: "",
    poza: "",
    cnp: "",
    datanastere: "",
  });
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  //onSubmit handler
  // const onSubmit = (userObject:User) => {
  //   console.log(userObject);
  //   updateUser(Number(id), userObject)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         alert("User successfully updated");
  //         navigate("/user-list");
  //       } else Promise.reject();
  //     })
  //     .catch((err) => alert("Something went wrong" + err));
  // };
//onSubmit handler
const onSubmit = (userObject: User, poza: File | null) => {
  const formData = new FormData();
  // Adaugă toate câmpurile, dar nu adăuga poza ca string!
  Object.entries(userObject).forEach(([key, value]) => {
    if (key !== "poza") formData.append(key, value);
  });
  // Dacă s-a selectat o poză nouă, adaug-o
  if (poza) {
    formData.append("poza", poza);
  }
  updateUser(Number(id), formData)
    .then((res) => {
      if (res.status === 200) {
        alert("User successfully updated");
        navigate("/user-list");
      } else Promise.reject();
    })
    .catch((err) => alert("Something went wrong: " + err));
};
  // Load data from server and reinitialize user form
  useEffect(() => {
    getUserById(Number(id))
      .then((res) => {
        console.log(res);
        const user = Array.isArray(res.data["data"]) ? res.data["data"][0] : res.data["data"];
        const { id, nume, prenume, email, telefon, poza, cnp } = user;
        const mydate = user.datanastere;
        const datanastere = format(parseISO(mydate), "yyyy-MM-dd");

        setFormValues({
          id: String(id),
          nume,
          prenume,
          email,
          telefon,
          poza,
          cnp,
          datanastere,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  // Return user form
  return (
    <UserForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
      Update User
    </UserForm>
  );
};

// Export EditUser Component
export default EditUser;