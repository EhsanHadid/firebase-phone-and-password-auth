import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/auth/protecte-route";
import { useUser } from "./components/auth/auth-provider";
import LoginPage from "./pages/login-page";
import Dashboard from "./pages/dashboard";

function App() {
  const user = useUser();

  return (
    <div className="container">
      <Routes>
        <Route element={<ProtectedRoute isAllowed={!user} redirectPath="/" />}>
          <Route path="login" element={<LoginPage isLogin={true} />} />
          <Route path="signup" element={<LoginPage isLogin={false} />} />
        </Route>

        {/* <Route
          element={<ProtectedRoute isAllowed={!user} redirectPath="/" />}
        ></Route> */}

        <Route
          element={<ProtectedRoute isAllowed={!!user} redirectPath="/login" />}
        >
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </div>
  );
}

export default App;
