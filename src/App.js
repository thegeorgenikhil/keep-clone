import MockmanEs from "mockman-js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Toast from "./components/Toast/Toast";
import Page404 from "./pages/404Page/Page404";
import ArchivePage from "./pages/Archive/ArchivePage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import TagPage from "./pages/TagPage/TagPage";

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
          <Route
            path="/archive"
            element={
              <PrivateRoute>
                <ArchivePage />
              </PrivateRoute>
            }
          />

          <Route
            path="/tags/:tag"
            element={
              <PrivateRoute>
                <TagPage />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mock" element={<MockmanEs />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
