import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Profiles from "./pages/Profiles";
import RegistrationForm from "./pages/RegistrationForm";
import Contact from "./pages/Contact";
import Explore from "./pages/Explore";
import AboutUs from "./pages/AboutUs";
import Privacidad from "./pages/Privacidad";
import Terms from "./pages/Terms";
import Settings from "./pages/Settings";

const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const HomeRedirect = () => {
  const { user } = useAuth();
  return <Navigate to={user ? "/dashboard" : "/login"} replace />;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeRedirect />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route
        path="/profiles"
        element={
          <RequireAuth>
            <Profiles />
          </RequireAuth>
        }
      />
      <Route
        path="/ecplorer"
        element={
          <RequireAuth>
            <Explore />
          </RequireAuth>
        }
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="/AboutUS" element={<AboutUs />} />
      <Route path="/privacidad" element={<Privacidad />} />
      <Route path="/terminos" element={<Terms />} />
      <Route
        path="/settings"
        element={
          <RequireAuth>
            <Settings />
          </RequireAuth>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
