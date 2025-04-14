import { BrowserRouter, Routes, Route } from "react-router";
import AuthLayout from "./layouts/auth-layout";
import Login from "./pages/login-page";
import SignUp from "./pages/signup-page";
import MainLayout from "./layouts/main-layout";
import Dashboard from "./pages/dashboard";
import UserDetailsPage from "./pages/user-details-page";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user/:id" element={<UserDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
