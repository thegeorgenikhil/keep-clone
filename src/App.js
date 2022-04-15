import MockmanEs from "mockman-js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Toast from "./components/Toast/Toast";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Toast />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mock" element={<MockmanEs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
