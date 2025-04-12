import AuthLayout from "./layouts/auth-layout";
import Login from "./pages/login-page";
import SignUp from "./pages/signup-page/SignUp";

function App() {
  return (
    <>
      <AuthLayout>
        <Login />
      </AuthLayout>

      <AuthLayout>
        <SignUp />
      </AuthLayout>
    </>
  );
}

export default App;
