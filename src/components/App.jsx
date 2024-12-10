import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

const Home = lazy(() => import("../pages/HomePage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage"));
const Login = lazy(() => import("../pages/LoginPage"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div>404: Page Not Found</div>} />
      </Routes>
    </Suspense>
  );
}

export default App;
