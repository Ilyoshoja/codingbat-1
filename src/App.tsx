import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Problem, Login, Register, Subject, Main } from "./pages";

const App: FC = () => (
  <div>
    <Routes>
      <Route path="" element={<Main />}>
        <Route index element={<Subject />} />
        <Route path='problem' element={<Problem />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path='register' element={<Register />} />

    </Routes>
  </div>
);

export default App;
