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
import { ROUTES, BASE_PATH } from "./constants/routes";

const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }
  return children;
};

const HomeRedirect = () => {
  const { user } = useAuth();
  return <Navigate to={user ? ROUTES.DASHBOARD : ROUTES.LOGIN} replace />;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={BASE_PATH} replace />} />
      <Route path={BASE_PATH} element={<HomeRedirect />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<RegistrationForm />} />
      <Route
        path={ROUTES.DASHBOARD}
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route
        path={ROUTES.PROFILES}
        element={
          <RequireAuth>
            <Profiles />
          </RequireAuth>
        }
      />
      <Route
        path={ROUTES.EXPLORE}
        element={
          <RequireAuth>
            <Explore />
          </RequireAuth>
        }
      />
      <Route path={ROUTES.CONTACT} element={<Contact />} />
      <Route path={ROUTES.ABOUT} element={<AboutUs />} />
      <Route path={ROUTES.PRIVACY} element={<Privacidad />} />
      <Route path={ROUTES.TERMS} element={<Terms />} />
      <Route
        path={ROUTES.SETTINGS}
        element={
          <RequireAuth>
            <Settings />
          </RequireAuth>
        }
      />
      <Route path="*" element={<Navigate to={BASE_PATH} replace />} />
    </Routes>
  );
}

export default App;
