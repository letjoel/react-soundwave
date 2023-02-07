import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiscoverPage from "./pages/DiscoverPage/DiscoverPage";
import JoinPage from "./pages/JoinPage/JoinPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import { Layout } from "./components/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
