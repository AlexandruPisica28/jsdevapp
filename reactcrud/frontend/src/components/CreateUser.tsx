
// Import Modules
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "./UserForm";
import { createUser } from "../services/api";
import type { User } from "../types/User";
// CreateUser Component
const CreateUser = () => {
    const navigate = useNavigate();	
    const [formValues] =
        useState({ id:'',nume: '',prenume:'', email: '',  telefon: '', cnp:'', poza:'',datanastere:'' })
    // onSubmit handler
    const onSubmit = (userObject: User, poza: File | null) => {
        const formData = new FormData();
        Object.entries(userObject).forEach(([key, value]) => {
        if (key !== "poza") formData.append(key, value);
        });
        if (poza) {
        formData.append("poza", poza);
        }
        createUser(formData)
        .then((res) => {
            if (res.status === 200) {
            alert("User successfully created");
            navigate("/user-list");
            } else Promise.reject();
        })
        .catch(() => alert("Something went wrong"));
    };


    // Return user form
    return (
        <UserForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize >
            Create User
        </UserForm>
    )
}

// Export CreateUser Component
export default CreateUser