import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stats from "../components/Stats";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;