// src/routes.tsx
import { Routes, Route } from "react-router-dom";
import HomePage  from './pages/HomePage';
import { NotFound } from './pages/NotFound';
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import UserList from "./components/UserList";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-user" element={<CreateUser />} />
      <Route path="/edit-user/:id" element={<EditUser />} />
      <Route path="//user-list" element={<UserList />} />
      <Route path="*" element={<NotFound />} />
      {/* alte rute */}
    </Routes>
  );
}


    