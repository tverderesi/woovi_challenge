import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboard from "./pages/Onboard";
import OnboardUI from "./components/layout/login/OnboardUI";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AuthRoute from "./util/AuthRoute";
import StudentHome from "./pages/StudentHome";
import Home from "./pages/Home";

import NotFound from "./pages/NotFound";

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} errorElement={<NotFound />}>
          {/* prettier-ignore */}
        </Route>
        <Route
          path="app"
          element={
            <AuthRoute>
              <Onboard />
            </AuthRoute>
          }
          errorElement={<NotFound />}
        >
          <Route path="/app/" element={<OnboardUI />} />
          <Route path="/app/login" element={<Login />} />
          <Route path="/app/register" element={<Register />} />
          <Route path="/app/home" element={<Home />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

// Old Routes
