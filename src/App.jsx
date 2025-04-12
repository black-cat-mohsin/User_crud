import { BrowserRouter, Routes, Route } from "react-router";
import AuthLayout from "./layouts/auth-layout";
import Login from "./pages/login-page";
import SignUp from "./pages/signup-page/SignUp";
import MainLayout from "./layouts/main-layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
