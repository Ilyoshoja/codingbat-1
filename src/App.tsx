import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Problem, Login, Register,Subject } from "./pages";

const App: FC = () => (
  <div>
    <Routes>
      <Route path='' element={<Login />} />
      <Route path='home' element={<Home />}>
      <Route index element={<Subject />} />
      <Route path='problem' element={<Problem />} />
      </Route>
      <Route path='register' element={<Register />} />
   
    </Routes>
  </div>
);

export default App;
