import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

const Home = lazy(() => import("../pages/HomePage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage"));
const Login = lazy(() => import("../pages/LoginPage"));
const Registration = lazy(() => import("../pages/RegistrationPage"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
}

export default App;
