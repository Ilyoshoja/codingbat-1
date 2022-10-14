import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Section, Problem, Login, Register } from "./pages";

const App: FC = () => (
  <div>
    <Routes>
      <Route path='' element={<Login />} />
      <Route path='section' element={<Section />} />
      <Route path='problem' element={<Problem />} />
      <Route path='register' element={<Register />} />
    </Routes>
  </div>
);

export default App;
